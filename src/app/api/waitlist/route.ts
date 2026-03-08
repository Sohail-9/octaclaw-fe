import { NextRequest, NextResponse } from "next/server";
import { ensureWaitlistTable, getSql } from "@/lib/db";
import { sendAdminWaitlistNotification, sendWaitlistConfirmation } from "@/lib/email/service";
import { validateEmail } from "@/lib/validation";

export const runtime = "nodejs";

type WaitlistRow = {
  id: string;
  email: string;
  created_at: string;
  ip_address: string | null;
  user_agent: string | null;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { email?: unknown };
    const email = body?.email;

    if (typeof email !== "string" || !validateEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      null;
    const userAgent = request.headers.get("user-agent") ?? null;

    await ensureWaitlistTable();

    const sql = getSql();

    const result = await sql`
      INSERT INTO waitlist (email, ip_address, user_agent)
      VALUES (${normalizedEmail}, ${ipAddress}, ${userAgent})
      ON CONFLICT (email) DO NOTHING
      RETURNING id, email, created_at, ip_address, user_agent
    `;

    const rows = result as unknown as WaitlistRow[];
    const isAlreadyRegistered = rows.length === 0;

    if (isAlreadyRegistered) {
      return NextResponse.json(
        { success: true, message: "Already on the waitlist" },
        { status: 200 }
      );
    }

    const confirmation = await sendWaitlistConfirmation(normalizedEmail);
    if (!confirmation.success) {
      console.warn("[waitlist] Confirmation email failed:", confirmation.error);
    }

    const adminNotice = await sendAdminWaitlistNotification({ email: normalizedEmail });
    if (!adminNotice.success) {
      console.warn("[waitlist] Admin notification failed:", adminNotice.error);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully added to waitlist",
        emailSent: confirmation.success,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[waitlist] Unexpected error:", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}

/**
 * Admin: GET /api/waitlist?secret=<ADMIN_SECRET>
 */
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret || secret !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await ensureWaitlistTable();

  const sql = getSql();

  const result = await sql`
    SELECT id, email, created_at, ip_address
    FROM waitlist
    ORDER BY created_at DESC
    LIMIT 1000
  `;

  const rows = result as unknown as Array<Pick<WaitlistRow, "id" | "email" | "created_at" | "ip_address">>;
  return NextResponse.json({ count: rows.length, entries: rows });
}
