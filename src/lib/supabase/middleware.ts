import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

function isRecoveryIntent(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const next = params.get("next") ?? "";
  return params.get("type") === "recovery" || next.startsWith("/reset-password");
}

export async function updateSession(request: NextRequest) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    return NextResponse.next({ request });
  }

  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;
  const isLoginPage = pathname.startsWith("/login");
  const isResetPasswordPage = pathname.startsWith("/reset-password");
  const isAuthPage = isLoginPage || isResetPasswordPage;
  const isAuthCallback = pathname.startsWith("/auth/callback");
  const code = request.nextUrl.searchParams.get("code");
  const tokenHash = request.nextUrl.searchParams.get("token_hash");
  const recovery = isRecoveryIntent(request);

  if (
    !isAuthCallback &&
    (isLoginPage || isResetPasswordPage || pathname === "/") &&
    (code || tokenHash)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/callback";
    if (recovery || isLoginPage || isResetPasswordPage || pathname === "/") {
      url.searchParams.set("next", "/reset-password");
    }
    return NextResponse.redirect(url);
  }

  if ((isLoginPage || pathname === "/") && recovery && !code && !tokenHash) {
    const url = request.nextUrl.clone();
    url.pathname = "/reset-password";
    return NextResponse.redirect(url);
  }

  if (!user && !isAuthPage && !isAuthCallback) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (user && isLoginPage) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
