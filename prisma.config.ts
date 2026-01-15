import { defineConfig } from "prisma/config";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

function normalizeDatabaseUrl(raw: string): string {
  let url = raw.trim();
  url = url.replace(/^['"]+|['"]+$/g, "");
  url = url.replace(/^postgresql:\s*"?\/\//i, "postgresql://");
  url = url.replace(/^postgres:\s*"?\/\//i, "postgresql://");
  return url;
}

const rawUrl = process.env.DATABASE_URL;

if (!rawUrl) {
  throw new Error("DATABASE_URL is not set");
}

const url = normalizeDatabaseUrl(rawUrl);

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url,
  },
});