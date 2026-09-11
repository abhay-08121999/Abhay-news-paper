import { createClient } from "@supabase/supabase-js";
 
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// TEMPORARY DIAGNOSTIC — remove once Google sign-in is confirmed working.
// This runs in the browser and tells you, in plain terms, whether the
// env vars actually made it into this build.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "[Supabase] Missing config in this build.",
    "\nVITE_SUPABASE_URL:", supabaseUrl || "(missing)",
    "\nVITE_SUPABASE_ANON_KEY:", supabaseAnonKey ? `present (${supabaseAnonKey.length} chars)` : "(missing)"
  );
} else {
  console.log(
    "[Supabase] Config loaded OK.",
    "\nURL:", supabaseUrl,
    "\nAnon key length:", supabaseAnonKey.length
  );
}
 
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
