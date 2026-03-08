import nodemailer from "nodemailer";
import { adminWaitlistNotificationTemplate } from "./templates/adminNotification";
import { waitlistConfirmationTemplate } from "./templates/waitlistConfirmation";

function getMailerConfig() {
  const user = process.env.GOOGLE_APP_USER;
  const pass = process.env.GOOGLE_APP_PASSWORD;

  if (!user || !pass) {
    return { ok: false as const, error: "Missing GOOGLE_APP_USER / GOOGLE_APP_PASSWORD" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  return { ok: true as const, transporter, user };
}

export async function sendWaitlistConfirmation(toEmail: string) {
  const mailer = getMailerConfig();
  if (!mailer.ok) return { success: false as const, error: mailer.error };

  const tpl = waitlistConfirmationTemplate({ productName: "OctaClaw" });

  try {
    await mailer.transporter.sendMail({
      from: `OctaClaw <${mailer.user}>`,
      to: toEmail,
      subject: tpl.subject,
      text: tpl.text,
      html: tpl.html,
    });
    return { success: true as const };
  } catch (error: unknown) {
    return { success: false as const, error: error instanceof Error ? error.message : "Email send failed" };
  }
}

export async function sendAdminWaitlistNotification(params: { email: string }) {
  const adminTo = process.env.GOOGLE_APP_USER;
  if (!adminTo) return { success: false as const, error: "Missing GOOGLE_APP_USER" };

  const mailer = getMailerConfig();
  if (!mailer.ok) return { success: false as const, error: mailer.error };

  const tpl = adminWaitlistNotificationTemplate({ email: params.email, productName: "OctaClaw" });

  try {
    await mailer.transporter.sendMail({
      from: `OctaClaw <${mailer.user}>`,
      to: adminTo,
      subject: tpl.subject,
      text: tpl.text,
      html: tpl.html,
    });
    return { success: true as const };
  } catch (error: unknown) {
    return { success: false as const, error: error instanceof Error ? error.message : "Email send failed" };
  }
}
