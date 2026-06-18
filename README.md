# Starfruit Express — Website Redesign

A high-fidelity marketing website for **Starfruit Express**, a Florida-based food procurement and logistics company serving restaurants.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Language | TypeScript |

## Project Structure

```
src/
├── app/
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles & design tokens
│   └── layout.tsx      # Root layout
├── components/
│   ├── layout/
│   │   ├── navbar.tsx  # Fixed top navigation
│   │   └── footer.tsx  # Footer with ticker strip
│   ├── sections/
│   │   ├── hero-section.tsx   # Landing hero
│   │   ├── stats-section.tsx  # Scrolling metrics band
│   │   └── cta-section.tsx    # Conversion CTA
│   └── shared/
│       ├── animated-counter.tsx
│       └── metric-card.tsx
└── data/               # Static data / content
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design

- **Color palette**: Dark forest green (`#0d1f12`) · Amber gold (`#d4a843`) · Sage green (`#4ade80`)
- **Typography**: Georgia serif for brand name · System sans-serif for body
- **Responsive**: Mobile-first, tested at 375 · 768 · 1024 · 1440px

## Deployment

Deploy to [Vercel](https://vercel.com) with zero config — the project is fully compatible with Vercel's Next.js preset.
