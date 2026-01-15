import { NextResponse } from "next/server";
import { clearAdminCookie } from "@/lib/adminAuth";

export async function POST() {
  const response = NextResponse.json({ success: true, data: null, error: null });
  clearAdminCookie(response);
  return response;
}
