import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createAdminSessionToken,
  setAdminCookie,
  validateAdminCredentials,
} from "@/lib/adminAuth";

const loginSchema = z.object({
  email: z.string().email("Valid email is required"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request: Request) {
  try {
    const json = await request.json().catch(() => null);
    const parsed = loginSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, data: null, error: parsed.error.errors[0]?.message ?? "Invalid request" },
        { status: 400 },
      );
    }

    const { email, password } = parsed.data;

    if (!validateAdminCredentials(email, password)) {
      return NextResponse.json(
        { success: false, data: null, error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const token = await createAdminSessionToken(email.trim().toLowerCase());
    const response = NextResponse.json({ success: true, data: { email }, error: null });
    setAdminCookie(response, token);
    return response;
  } catch (error: any) {
    console.error("/api/admin/auth/login error:", error);
    const message = error?.message || "Internal server error";
    return NextResponse.json({ success: false, data: null, error: message }, { status: 500 });
  }
}
