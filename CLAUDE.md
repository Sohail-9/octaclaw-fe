# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Next.js with Turbopack)
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

No test suite is configured.

## Architecture

OctaClaw marketing/landing site — a single-page Next.js 16 App Router site that collects waitlist emails. Light mode only; dark backgrounds appear only inside intentional UI chrome (code blocks, terminal mockups).

### Page Structure

`src/app/page.tsx` composes the single page in this order:

```
Navbar → HeroSection → MetricsStrip → FeaturesBento → DashboardShowcase
       → HowItWorksSection → SDKPreview → CTASection → Footer
```

Unused section components also exist in `src/components/sections/`: `HomeWaitlistHero`, `UseCases`, `WhyOctaClaw`, `Features`.

### Component Organization

- `src/components/sections/` — page sections
- `src/components/layout/` — Navbar, Footer (barrel-exported from `index.ts`)
- `src/components/ui/` — reusable visual primitives; many have paired `.css` files for keyframe animations that can't be expressed in Tailwind

### Styling

**Tailwind CSS v4** — no config file; all configuration lives in `globals.css`.

Theme tokens are defined in `globals.css` under two blocks:
- `@theme inline` — maps Tailwind color/font utilities to CSS variables (e.g. `--color-brand-primary: var(--brand-primary)`)
- `:root` — the actual values:
  - `--brand-primary: #7c3aed` (violet), `--brand-secondary: #059669` (emerald)
  - `--bg-base: #ffffff`, `--bg-surface: #fafafa`
  - `--text-main: #09090b`, `--text-muted: rgba(9,9,11,0.5)`
  - `--border-subtle: rgba(9,9,11,0.07)`
  - Fonts: `--font-sans` (Inter), `--font-heading` (Space Grotesk), `--font-mono` (JetBrains Mono), `--font-serif` (Instrument Serif)

Global utility classes in `globals.css`: `.glass-light`, `.dotted-grid`, `.bg-dot-grid-light`, `.text-gradient`, `.animate-infinite-scroll`, `.animate-float`, `.animate-pulse-ring`, `.animate-blob` (with `.blob-delay-1/2/3`), `.animate-dash-flow` / `.animate-dash-flow-slow`.

### Backend: Waitlist API

`src/app/api/waitlist/route.ts` — Node.js runtime route:
- **POST**: validates email, applies in-memory IP rate limiting (5 req/min), inserts into Neon DB via `ON CONFLICT DO NOTHING`, sends confirmation + admin emails in parallel
- **GET**: admin endpoint protected by `ADMIN_SECRET` env var, returns all waitlist entries

### Data & Email

- `src/lib/db.ts` — lazy singleton Neon DB client (`getSql()`); exports `ensureWaitlistTable()` which auto-migrates on first call
- `src/lib/email/service.ts` — lazy singleton Nodemailer transporter via Gmail; exports `sendWaitlistConfirmation` and `sendAdminWaitlistNotification`
- `src/lib/email/templates/` — plain HTML/text email templates
- `src/lib/validation.ts` — email validation
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Required Environment Variables

```
DATABASE_URL          # Neon PostgreSQL connection string
GOOGLE_APP_USER       # Gmail address for sending emails
GOOGLE_APP_PASSWORD   # Gmail app password
ADMIN_SECRET          # Secret token for GET /api/waitlist admin endpoint
```
