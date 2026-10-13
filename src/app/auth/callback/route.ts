import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

function safeNextPath(raw: string | null) {
  if (!raw || !raw.startsWith("/")) return "/";
  return raw;
}

function isRecoveryFlow(searchParams: URLSearchParams, next: string) {
  return searchParams.get("type") === "recovery" || next.startsWith("/reset-password");
}

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const authError = searchParams.get("error");
  const type = searchParams.get("type");
  let next = safeNextPath(searchParams.get("next"));
  const recovery = isRecoveryFlow(searchParams, next);
  if (recovery) next = "/reset-password";

  const forwardedHost = request.headers.get("x-forwarded-host");
  const appOrigin =
    process.env.NODE_ENV !== "development" && forwardedHost
      ? `https://${forwardedHost}`
      : origin;

  const failUrl = recovery
    ? `${appOrigin}/reset-password?error=invalid`
    : `${appOrigin}/login?error=confirmation`;

  if (authError || (!code && !tokenHash)) {
    return NextResponse.redirect(failUrl);
  }

  const successRedirect = NextResponse.redirect(`${appOrigin}${next}`);

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            successRedirect.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const otpType =
    type === "recovery" || recovery
      ? "recovery"
      : type === "signup" || type === "invite" || type === "magiclink" || type === "email_change"
        ? type
        : "email";

  const { error } = code
    ? await supabase.auth.exchangeCodeForSession(code)
    : await supabase.auth.verifyOtp({
        type: otpType,
        token_hash: tokenHash!,
      });

  if (!error) {
    return successRedirect;
  }

  return NextResponse.redirect(failUrl);
}
