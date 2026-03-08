type AdminNotificationTemplate = {
  subject: string;
  html: string;
  text: string;
};

export function adminWaitlistNotificationTemplate(params: {
  email: string;
  productName?: string;
}): AdminNotificationTemplate {
  const productName = params.productName ?? "OctaClaw";
  const subject = `New ${productName} waitlist signup`;
  const text = `New waitlist signup: ${params.email}`;

  const html = `
  <div style="font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <h2 style="margin:0 0 8px 0;">New waitlist signup</h2>
    <p style="margin:0;">Email: <strong>${params.email}</strong></p>
  </div>
  `.trim();

  return { subject, html, text };
}
