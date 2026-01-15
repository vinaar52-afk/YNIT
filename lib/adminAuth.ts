/**
 * Admin authentication utilities (cookie-based, separate from Supabase).
 * Trust boundary: ONLY admin routes may set/read the admin session cookie.
 * User-facing routes must ignore this cookie; admin routes must NOT accept Supabase tokens.
 */

import { NextRequest, NextResponse } from "next/server";

const ADMIN_COOKIE_NAME = "admin_session";
const ADMIN_SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

const textEncoder = new TextEncoder();

function base64UrlEncode(bytes: Uint8Array): string {
  if (typeof btoa !== "undefined") {
    let binary = "";
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  // Node fallback
  return Buffer.from(bytes).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(input: string): Uint8Array | null {
  try {
    const normalized = input.replace(/-/g, "+").replace(/_/g, "/");
    if (typeof atob !== "undefined") {
      const binary = atob(normalized);
      const bytes = new Uint8Array(binary.length);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return bytes;
    }
    // Node fallback
    return new Uint8Array(Buffer.from(normalized, "base64"));
  } catch (error) {
    console.error("Failed to decode base64url", error);
    return null;
  }
}

async function hmacSha256(message: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    textEncoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, textEncoder.encode(message));
  return base64UrlEncode(new Uint8Array(signature));
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

function getAdminEnv() {
  const email = process.env.ADMIN_EMAIL?.trim();
  const password = process.env.ADMIN_PASSWORD?.trim();
  const secret = process.env.ADMIN_SESSION_SECRET?.trim();
  return { email, password, secret };
}

export async function createAdminSessionToken(email: string): Promise<string> {
  const { secret } = getAdminEnv();
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured");
  }

  const payload = {
    email,
    exp: Math.floor(Date.now() / 1000) + ADMIN_SESSION_MAX_AGE_SECONDS,
    nonce: crypto.randomUUID(),
  };
  const payloadJson = JSON.stringify(payload);
  const payloadB64 = base64UrlEncode(textEncoder.encode(payloadJson));
  const signature = await hmacSha256(payloadB64, secret);
  return `${payloadB64}.${signature}`;
}

export async function verifyAdminSessionToken(token: string): Promise<{ email: string } | null> {
  const { secret, email: expectedEmail } = getAdminEnv();
  if (!secret || !expectedEmail) return null;

  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadB64, signature] = parts;
  const expectedSignature = await hmacSha256(payloadB64, secret);
  if (!timingSafeEqual(signature, expectedSignature)) return null;

  const payloadBytes = base64UrlDecode(payloadB64);
  if (!payloadBytes) return null;
  let payload: any;
  try {
    payload = JSON.parse(new TextDecoder().decode(payloadBytes));
  } catch (error) {
    console.error("Invalid admin session payload", error);
    return null;
  }

  if (!payload?.email || typeof payload.exp !== "number") return null;
  if (payload.email !== expectedEmail) return null;
  if (payload.exp < Math.floor(Date.now() / 1000)) return null;

  return { email: payload.email };
}

export function getAdminCookie(request: NextRequest): string | null {
  const cookie = request.cookies.get(ADMIN_COOKIE_NAME);
  return cookie?.value ?? null;
}

export function setAdminCookie(response: NextResponse, token: string) {
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: ADMIN_SESSION_MAX_AGE_SECONDS,
  });
}

export function clearAdminCookie(response: NextResponse) {
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

export function validateAdminCredentials(inputEmail: string, inputPassword: string) {
  const { email, password } = getAdminEnv();
  if (!email || !password) {
    throw new Error("Admin credentials are not configured");
  }
  const cleanEmail = inputEmail.trim().toLowerCase();
  const cleanPassword = inputPassword.trim();
  if (cleanEmail !== email.toLowerCase()) return false;
  if (cleanPassword.length !== password.length) return false;
  return timingSafeEqual(cleanPassword, password);
}

export async function requireAdmin(request: NextRequest) {
  const token = getAdminCookie(request);
  if (!token) return null;
  return verifyAdminSessionToken(token);
}

export function unauthorizedResponse(message = "Unauthorized") {
  return NextResponse.json({ success: false, data: null, error: message }, { status: 401 });
}

export const ADMIN_COOKIE = ADMIN_COOKIE_NAME;
