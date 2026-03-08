export function validateEmail(raw: string): boolean {
  const email = raw.trim();

  if (email.length < 3 || email.length > 254) return false;
  // Pragmatic email validation (good enough for waitlist signup)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
