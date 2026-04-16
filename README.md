# SBJ Studio Portfolio

A premium, high-performance portfolio website for SBJ Studio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Run locally

1. Install Node.js LTS (includes npm) from [nodejs.org](https://nodejs.org).
2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Contact form delivery

The contact form posts to `POST /api/contact`.

- For production delivery, set `CONTACT_WEBHOOK_URL` in your environment (e.g. Formspree, Make, Zapier, or your CRM webhook).
- If `CONTACT_WEBHOOK_URL` is not set, submissions are still accepted and logged on the server.

### Formspree quick setup

1. Create a form at [Formspree](https://formspree.io) and copy your endpoint:
   - Example: `https://formspree.io/f/xyzabcde`
2. Copy `.env.example` to `.env.local`:
   - `CONTACT_WEBHOOK_URL=https://formspree.io/f/xyzabcde`
3. Restart your dev server and submit a test inquiry from `/contact`.
4. For deployment (Vercel), add `CONTACT_WEBHOOK_URL` in Project Settings -> Environment Variables.

## Pages included

- `/` Home
- `/about` About
- `/services` Services
- `/portfolio` Portfolio with category filter
- `/portfolio/[slug]` Case study detail pages
- `/contact` Contact form and direct channels

## Brand system suggestions

- **Accent color:** `#36C9C2` (Teal Aqua)
- **Base colors:** `#0C0C1E` (Deep Night), `#F7F7F7` (Soft White), `#B5B5B5` (Muted Gray)
- **Font pairing:** `Space Grotesk` (headlines) + `Inter` (body)

## Premium animation ideas

- Hero headline fade/slide reveal with layered timing
- Hover elevation and accent border glow on cards
- Active nav indicator using shared layout animation
- Soft section reveal on scroll for calm, modern rhythm
