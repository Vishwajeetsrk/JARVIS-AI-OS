// Lovable cloud-auth replaced with direct Supabase auth.
// We use Supabase OAuth directly — no third-party auth wrapper needed.
import { supabase } from "../supabase/client";

type SignInOptions = {
  redirect_uri?: string;
  extraParams?: Record<string, string>;
};

// Thin shim so any existing code that imports `lovable.auth` still compiles.
// Routes using Google/social login now call supabase.auth.signInWithOAuth directly.
export const lovable = {
  auth: {
    signInWithOAuth: async (
      provider: "google" | "apple" | "microsoft",
      opts?: SignInOptions,
    ) => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider === "microsoft" ? "azure" : provider,
        options: {
          redirectTo: opts?.redirect_uri ?? window.location.origin,
          queryParams: opts?.extraParams,
        },
      });
      if (error) return { error };
      return { data, redirected: true };
    },
  },
};
