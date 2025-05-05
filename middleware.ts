import { auth } from "@/auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/") {
    const home = new URL("/", req.nextUrl.origin);
    return Response.redirect(home);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|sign-in|favicon.ico|images).*)"],
};
