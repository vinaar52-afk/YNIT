import { createClient, type Session } from "@supabase/supabase-js";

import prisma from "./prisma";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");
}

if (!supabaseAnonKey) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) throw error;

  if (data.session) {
    await ensurePrismaUser(data.session);
  }

  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  if (data.session) {
    await ensurePrismaUser(data.session);
  }

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getSession(): Promise<Session | null> {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session;
}

export async function ensurePrismaUser(session: Session) {
  const supabaseUserId = session.user.id;
  const email = session.user.email;

  if (!email) {
    throw new Error("Supabase session is missing user email");
  }

  const existing = await prisma.user.findUnique({
    where: { supabaseUserId },
  } as any);

  if (existing) return existing;

  return prisma.user.create({
    data: {
      supabaseUserId,
      email,
    },
  } as any);
}
