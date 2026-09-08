import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export type UserTier = "free" | "premium";

export interface User {
  id: string;
  name: string;
  email: string;
  tier: UserTier;
  avatar?: string;
  joinedDate: string;
  country: string;
  savedArticles: number;
  readingStreak: number;
  subscriptionStatus?: string | null;
  currentPeriodEnd?: string | null;
}

interface AuthContextType {
  user: User | null;
  isSignedIn: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signUp: (
    email: string,
    password: string,
    metadata?: Record<string, unknown>
  ) => Promise<{ success: boolean; error?: string; needsEmailConfirmation?: boolean }>;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
  upgradeToPremoium: () => void;
  /** Re-fetches tier/subscription status from the profiles table.
   *  Call this after a Razorpay payment is verified — never trust
   *  the client to grant itself premium; this reads the value the
   *  server-side Edge Function actually wrote. */
  refreshProfile: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | null>(null);

/** Reads the profiles row for a user. Returns null fields if the row
 *  doesn't exist yet (shouldn't happen once the DB trigger is in place,
 *  but the UI shouldn't break if it does). */
async function fetchProfile(userId: string) {
  const { data } = await supabase
    .from("profiles")
    .select("tier, saved_articles, reading_streak, subscription_status, current_period_end")
    .eq("id", userId)
    .maybeSingle();
  return data;
}

/** Single source of truth for turning a Supabase auth user into the
 *  User shape the rest of the app uses — combines auth metadata with
 *  the profiles table so tier/subscription is always real, not a
 *  hardcoded "free" like before. */
async function buildUser(supaUser: SupabaseUser): Promise<User> {
  const profile = await fetchProfile(supaUser.id);

  return {
    id: supaUser.id,
    name:
      supaUser.user_metadata?.full_name ||
      supaUser.user_metadata?.name ||
      supaUser.email?.split("@")[0] ||
      "User",
    email: supaUser.email || "",
    tier: (profile?.tier as UserTier) || "free",
    joinedDate: supaUser.created_at
      ? new Date(supaUser.created_at).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })
      : "",
    country: (supaUser.user_metadata?.country as string) || "",
    savedArticles: profile?.saved_articles ?? 0,
    readingStreak: profile?.reading_streak ?? 0,
    subscriptionStatus: profile?.subscription_status ?? null,
    currentPeriodEnd: profile?.current_period_end ?? null,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(await buildUser(session.user));
      }

      setIsLoading(false);
    };

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session?.user) {
        setUser(await buildUser(session.user));
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    const normalizedEmail = email.trim().toLowerCase();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    setIsLoading(false);

    if (error) {
      return { success: false, error: error.message };
    }

    if (data.user) {
      setUser(await buildUser(data.user));
      return { success: true };
    }

    return { success: false, error: "Login failed" };
  };

  const signUp = async (
    email: string,
    password: string,
    metadata?: Record<string, unknown>
  ) => {
    setIsLoading(true);
    const normalizedEmail = email.trim().toLowerCase();

    const { data, error } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/login`,
        data: metadata,
      },
    });

    setIsLoading(false);

    if (error) {
      return { success: false, error: error.message };
    }

    // If the project has email confirmation disabled, Supabase returns an
    // active session immediately — sign the user in right away instead of
    // making them wait on a confirmation email that was never sent.
    if (data.session && data.user) {
      setUser(await buildUser(data.user));
      return { success: true, needsEmailConfirmation: false };
    }

    return { success: true, needsEmailConfirmation: true };
  };

  const resetPassword = async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim().toLowerCase(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true };
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      console.error(error);
      return { success: false, error: error.message };
    }
    return { success: true };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  /** Instant optimistic UI flip — kept for anywhere that wants premium
   *  to feel immediate. The real, server-verified value always comes
   *  from refreshProfile() / the next session load, so this can't be
   *  abused to grant free premium access; the DB is the source of truth. */
  const upgradeToPremoium = () => {
    if (user) setUser({ ...user, tier: "premium" });
  };

  const refreshProfile = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session?.user) {
      setUser(await buildUser(session.user));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isSignedIn: !!user,
        isLoading,
        signIn,
        signUp,
        signInWithGoogle,
        resetPassword,
        signOut,
        upgradeToPremoium,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
