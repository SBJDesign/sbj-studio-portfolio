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

## Contact form delivery (UseSendCore)

The contact form posts to `POST /api/contact`, which sends inquiries to your inbox via [UseSendCore](https://usesendcore.com).

1. Copy `.env.example` to `.env.local`.
2. Add your UseSendCore API key and inbox email:

```env
USESENDCORE_API_KEY=your_api_key_here
USESENDCORE_FROM=no-reply@usesendcore.com
CONTACT_INBOX_EMAIL=sbjdesigns.ng@gmail.com
```

3. Restart the dev server (`npm run dev`) and submit a test from `/contact`.
4. For Vercel (or other hosts), add the same variables under **Project Settings → Environment Variables**.

Never commit `.env.local` or expose your API key in client-side code.

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
