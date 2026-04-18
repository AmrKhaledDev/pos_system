import { auth as proxy } from "@/auth";
import GetUserSession from "./lib/GetUserSession";
import { NextResponse } from "next/server";
// ==============================================
const authRoutes = ["/login", "/register"];
export default proxy(async (req) => {
  const pathname = req.nextUrl.pathname;
  const userSession = await GetUserSession();
  if (authRoutes.includes(pathname) && userSession)
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
});
export const config = {
  matcher: ["/login", "/register"],
};
