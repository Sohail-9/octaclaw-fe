/* eslint-disable @typescript-eslint/no-require-imports */
const { neon } = require("@neondatabase/serverless");
const fs = require("fs");
const path = require("path");

// Manually load .env variables if present
try {
  const envPath = path.join(__dirname, "../.env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    envContent.split("\n").forEach((line) => {
      const parts = line.split("=");
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const val = parts.slice(1).join("=").trim().replace(/^['"]|['"]$/g, "");
        if (key && !key.startsWith("#")) {
          process.env[key] = val;
        }
      }
    });
  }
} catch (e) {
  console.warn("Could not read local .env file:", e.message);
}

async function run() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("Error: DATABASE_URL environment variable is not set.");
    process.exit(1);
  }

  console.log("Connecting to database and running waitlist schema migration...");
  try {
    const sql = neon(databaseUrl);

    // Create table
    await sql`
      CREATE TABLE IF NOT EXISTS waitlist (
        id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
        email       TEXT        NOT NULL UNIQUE,
        created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
        ip_address  TEXT,
        user_agent  TEXT
      )
    `;
    console.log("✓ Table 'waitlist' verified/created.");

    // Create indexes
    await sql`CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email)`;
    await sql`CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at DESC)`;
    console.log("✓ Indexes verified/created.");

    console.log("Migration completed successfully.");
    process.exit(0);
  } catch (error) {
    console.error("Migration failed:", error);
    process.exit(1);
  }
}

run();
