import { neon } from "@neondatabase/serverless";

let sqlClient: ReturnType<typeof neon> | null = null;

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
  }

  if (!sqlClient) {
    sqlClient = neon(databaseUrl);
  }

  return sqlClient;
}

let waitlistMigrated = false;

export async function ensureWaitlistTable(): Promise<void> {
  if (waitlistMigrated) return;

  const sql = getSql();

  await sql`
    CREATE TABLE IF NOT EXISTS waitlist (
      id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
      email       TEXT        NOT NULL UNIQUE,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      ip_address  TEXT,
      user_agent  TEXT
    )
  `;

  await sql`CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email)`;
  await sql`CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at DESC)`;

  waitlistMigrated = true;
}
