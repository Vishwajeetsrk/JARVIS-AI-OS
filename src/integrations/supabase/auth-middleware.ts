import { createMiddleware } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'
import { supabaseAdmin } from './client.server'

function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith('sb_publishable_') || value.startsWith('sb_secret_');
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    if (isNewSupabaseApiKey(supabaseKey) && headers.get('Authorization') === `Bearer ${supabaseKey}`) {
      headers.delete('Authorization');
    }

    headers.set('apikey', supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

const DEFAULT_GUEST_USER_ID = "00000000-0000-0000-0000-000000000000";

const MOCK_GUEST_CLAIMS = {
  sub: DEFAULT_GUEST_USER_ID,
  iss: "https://tupgfxqkefgntrpgakxk.supabase.co/auth/v1",
  aud: "authenticated",
  exp: 9999999999,
  iat: 1700000000,
  email: "guest@jarvis.dev",
  phone: "",
  app_metadata: { provider: "email", providers: ["email"] },
  user_metadata: { name: "Vishwajeet (Guest)" },
  role: "authenticated",
  aal: "aal1",
  amr: [{ method: "password", timestamp: 1700000000 }],
  session_id: "guest-session-id",
  is_anonymous: false,
};

export const requireSupabaseAuth = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {
    const SUPABASE_URL = process.env.SUPABASE_URL;
    const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      console.error("[auth-middleware] Missing SUPABASE_URL or SUPABASE_PUBLISHABLE_KEY env vars");
    }

    const request = getRequest();
    const authHeader = request?.headers?.get('authorization');

    if (SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY && authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.replace('Bearer ', '');
      if (token && token.split('.').length === 3) {
        try {
          const supabase = createClient<Database>(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY,
            {
              global: {
                fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY),
                headers: { Authorization: `Bearer ${token}` },
              },
              auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
            }
          );
          const { data } = await supabase.auth.getClaims(token);
          if (data?.claims?.sub) {
            return next({
              context: {
                supabase,
                userId: data.claims.sub,
                claims: data.claims,
              },
            });
          }
        } catch {
          // Fallback below
        }
      }
    }

    // Guest / Dev Mode fallback — only when env vars are missing or auth failed
    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      console.warn("[auth-middleware] Running in guest mode — set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY for production");
    }
    return next({
      context: {
        supabase: supabaseAdmin as unknown as ReturnType<typeof createClient<Database>>,
        userId: DEFAULT_GUEST_USER_ID,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        claims: MOCK_GUEST_CLAIMS as any,
      },
    });
  },
);
