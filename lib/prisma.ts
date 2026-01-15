/**
 * Prisma Client Configuration
 * 
 * This file provides a singleton Prisma Client instance for database operations.
 * Prevents multiple instances in development due to hot reloading.
 */

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// Validate environment variables
function normalizeDatabaseUrl(raw: string): string {
  let url = raw.trim();
  url = url.replace(/^['"]+|['"]+$/g, "");
  url = url.replace(/^postgresql:\s*"?\/\//i, "postgresql://");
  url = url.replace(/^postgres:\s*"?\/\//i, "postgresql://");
  return url;
}

const databaseUrlRaw = process.env.DATABASE_URL;

if (!databaseUrlRaw) {
  throw new Error(
    "DATABASE_URL environment variable is not set. Please check .env.local",
  );
}

const databaseUrl = normalizeDatabaseUrl(databaseUrlRaw);

// PrismaClient + Pool singletons
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
  pgPool: Pool | undefined;
};

const pgPool =
  globalForPrisma.pgPool ??
  new Pool({
    connectionString: databaseUrl,
  });

const adapter = new PrismaPg(pgPool);

// Initialize Prisma Client
const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.pgPool = pgPool;
}

/**
 * Helper function to safely connect Prisma
 */
export async function connectPrisma(): Promise<void> {
  await prisma.$connect();
}

/**
 * Helper function to safely disconnect Prisma
 */
export async function disconnectPrisma(): Promise<void> {
  await prisma.$disconnect();
}

export default prisma;
