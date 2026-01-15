import { NextRequest, NextResponse } from "next/server";
import { requireAdmin, unauthorizedResponse } from "@/lib/adminAuth";

const OPEN_ADMIN_PATHS = [
  "/api/admin/auth/login",
  "/api/admin/auth/logout",
  "/api/admin/auth/me",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith("/api/admin")) {
    // Non-admin routes are not handled here; user routes rely on Supabase tokens.
    return NextResponse.next();
  }

  if (OPEN_ADMIN_PATHS.some((p) => pathname === p)) {
    return NextResponse.next();
  }

  const admin = await requireAdmin(request);
  if (!admin) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/admin/:path*"],
};
