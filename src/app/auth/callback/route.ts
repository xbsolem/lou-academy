import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = request.nextUrl;
  const code = searchParams.get("code");
  const authError = searchParams.get("error");
  let next = searchParams.get("next") ?? "/";
  if (!next.startsWith("/")) next = "/";

  const forwardedHost = request.headers.get("x-forwarded-host");
  const appOrigin =
    process.env.NODE_ENV !== "development" && forwardedHost
      ? `https://${forwardedHost}`
      : origin;

  if (authError || !code) {
    return NextResponse.redirect(`${appOrigin}/login?error=confirmation`);
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

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (!error) {
    return successRedirect;
  }

  return NextResponse.redirect(`${appOrigin}/login?error=confirmation`);
}
