type WaitlistEmailTemplate = {
  subject: string;
  html: string;
  text: string;
};

export function waitlistConfirmationTemplate(params: {
  productName?: string;
} = {}): WaitlistEmailTemplate {
  const productName = params.productName ?? "OctaClaw";

  const subject = `You’re on the ${productName} waitlist`;

  const text =
    `Thanks for joining the ${productName} waitlist.\n\n` +
    `We’re preparing a private beta for builders experimenting with visual AI workflows. ` +
    `We’ll reach out as soon as access opens up.\n\n` +
    `— Team ${productName}`;

  const html = `
  <div style="background:#0B0B0F;padding:32px;font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#F1F5F9;">
    <div style="max-width:560px;margin:0 auto;border:1px solid rgba(255,255,255,0.08);background:rgba(255,255,255,0.04);border-radius:18px;overflow:hidden;">
      <div style="padding:22px 24px;background:linear-gradient(135deg, rgba(124,58,237,0.25), rgba(59,130,246,0.18));">
        <div style="font-size:14px;letter-spacing:0.06em;text-transform:uppercase;color:rgba(241,245,249,0.75);">Private Beta</div>
        <div style="font-size:22px;font-weight:700;margin-top:8px;">${productName}</div>
      </div>
      <div style="padding:24px;">
        <h1 style="margin:0 0 10px 0;font-size:22px;line-height:1.25;">You’re on the list</h1>
        <p style="margin:0 0 14px 0;color:rgba(148,163,184,1);font-size:15px;line-height:1.6;">
          Thanks for joining the ${productName} waitlist. We’re preparing early access for builders exploring
          a visual workspace for AI workflows.
        </p>
        <p style="margin:0 0 18px 0;color:rgba(148,163,184,1);font-size:15px;line-height:1.6;">
          We’ll reach out as soon as your invite is ready.
        </p>
        <div style="margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,0.08);display:flex;gap:10px;flex-wrap:wrap;color:rgba(148,163,184,1);font-size:12px;">
          <span>Early access</span>
          <span>•</span>
          <span>Private beta</span>
          <span>•</span>
          <span>Limited seats</span>
        </div>
        <p style="margin:18px 0 0 0;color:rgba(148,163,184,1);font-size:12px;line-height:1.6;">
          If you didn’t request this, you can ignore this email.
        </p>
      </div>
    </div>
  </div>
  `.trim();

  return { subject, html, text };
}
