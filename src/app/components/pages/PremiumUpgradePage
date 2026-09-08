import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { loadRazorpayScript } from "../../../lib/loadRazorpayScript";
import { supabase } from "../../../lib/supabase";
import { CheckCircle2, AlertCircle, Newspaper, BookMarked, ShieldCheck, Crown } from "lucide-react";
import logoImg from "../../../imports/logo.png";

const perks = [
  { icon: Newspaper, text: "Ad-free reading across every section" },
  { icon: BookMarked, text: "Full archive access and unlimited saved articles" },
  { icon: ShieldCheck, text: "Exclusive investigative reports and priority newsletters" },
];

export function PremiumUpgradePage() {
  const { user, isSignedIn, refreshProfile, upgradeToPremoium } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    if (!isSignedIn) {
      navigate("/login", { state: { from: "/premium" } });
      return;
    }

    if (user?.tier === "premium") return;

    setError("");
    setLoading(true);

    try {
      const scriptOk = await loadRazorpayScript();
      if (!scriptOk) {
        throw new Error("Couldn't load the payment window. Check your connection and try again.");
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) throw new Error("Your session expired — please sign in again.");

      // Ask our Edge Function to create the subscription server-side.
      const { data, error: fnError } = await supabase.functions.invoke(
        "create-razorpay-subscription",
        {
          headers: { Authorization: `Bearer ${session.access_token}` },
        }
      );
      if (fnError || !data?.subscriptionId) {
        throw new Error(data?.error || fnError?.message || "Couldn't start the subscription.");
      }

      const options = {
        key: data.keyId,
        subscription_id: data.subscriptionId,
        name: "The Pride Times",
        description: "Premium Membership — $4.99/month",
        image: logoImg,
        prefill: {
          name: data.name || "",
          email: data.email || "",
        },
        theme: { color: "#DC2626" },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_subscription_id: string;
          razorpay_signature: string;
        }) => {
          // Payment succeeded in the checkout widget — now verify it
          // server-side before trusting it, and only then grant premium.
          setLoading(true);
          try {
            const { data: verifyData, error: verifyError } = await supabase.functions.invoke(
              "verify-razorpay-payment",
              {
                body: response,
                headers: { Authorization: `Bearer ${session.access_token}` },
              }
            );
            if (verifyError || !verifyData?.success) {
              throw new Error(
                verifyData?.error || verifyError?.message || "Payment could not be verified."
              );
            }

            upgradeToPremoium(); // instant UI flip
            await refreshProfile(); // then sync with the real DB value
            navigate("/dashboard", { state: { justUpgraded: true } });
          } catch (e) {
            setError((e as Error).message);
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.on("payment.failed", (resp: any) => {
        setError(resp?.error?.description || "Payment failed. Please try again.");
        setLoading(false);
      });
      rzp.open();
    } catch (e) {
      setError((e as Error).message);
      setLoading(false);
    }
  };

  const alreadyPremium = user?.tier === "premium";

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-black py-3 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="The Pride Times" className="h-10 w-auto object-contain" />
          <span className="pt-logo text-lg" style={{ color: "#fff" }}>
            THE <span className="pt-logo-accent">PRIDE</span> TIMES
          </span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden p-6">
            <div className="flex items-center gap-2 mb-2">
              <Crown size={18} className="text-amber-500" />
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                Premium Membership
              </span>
            </div>
            <h1 className="text-2xl">$4.99 / month</h1>
            <p className="text-sm text-gray-500 mt-1">Cancel anytime. Billed monthly via Razorpay.</p>

            <div className="flex flex-col gap-3 mt-6 mb-6">
              {perks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={14} className="text-red-600" />
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded p-3 mb-4 flex items-start gap-2">
                <AlertCircle size={14} className="text-red-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-red-700">{error}</p>
              </div>
            )}

            {alreadyPremium ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded p-4 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <p className="text-sm text-emerald-700">You're already on Premium. Thanks for subscribing!</p>
              </div>
            ) : (
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </span>
                ) : (
                  "Subscribe to Premium"
                )}
              </button>
            )}

            {!isSignedIn && (
              <p className="text-xs text-gray-500 text-center mt-3">
                You'll be asked to sign in first.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
