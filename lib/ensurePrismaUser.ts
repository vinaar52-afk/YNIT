import prisma from "./prisma";

export async function ensurePrismaUser(params: {
  supabaseUserId: string;
  email: string;
}) {
  const supabaseUserId = params.supabaseUserId.trim();
  const email = params.email.toLowerCase().trim();

  if (!supabaseUserId) {
    throw new Error("supabaseUserId is required");
  }

  if (!email) {
    throw new Error("email is required");
  }

  return prisma.user.upsert({
    where: { supabaseUserId },
    update: { email },
    create: {
      supabaseUserId,
      email,
    },
  });
}
