# Cassiano — Personal Website

A high-end, interactive personal website positioning Cassiano as a global thought leader in information systems, media, and technology culture.

## Stack

- **Next.js 15** with App Router + Turbopack
- **TypeScript**
- **Tailwind CSS** + custom CSS variables
- **Google Fonts** — Sora (display) + JetBrains Mono (code/labels)

## Design System

| Token | Value |
|-------|-------|
| `--bg` | `#0A0A0A` |
| `--accent` | `#38BDF8` (cyan) |
| `--text` | `#EAEAEA` |
| `--font-sans` | Sora |
| `--font-mono` | JetBrains Mono |

## Structure

```
cassiano-site/
├── app/
│   ├── layout.tsx          # Server Component — metadata, html/body
│   ├── ClientLayout.tsx    # Client Component — BootSequence + Navbar
│   ├── globals.css         # Design tokens, animations, base styles
│   ├── page.tsx            # Home: Hero + Domain Map + Essays + CTA
│   ├── about/
│   │   └── page.tsx        # About: Bio + What I do + Timeline + Interests
│   └── portfolio/
│       └── page.tsx        # Work: Filterable project grid + Stats
├── components/
│   ├── Navbar.tsx          # Floating translucent nav, mobile-responsive
│   ├── BootSequence.tsx    # Terminal boot animation on first load
│   ├── SystemMap.tsx       # Interactive SVG domain map with nodes
│   ├── DomainView.tsx      # Expandable essay panel for domain nodes
│   ├── Essay.tsx           # Expandable essay card component
│   └── PortfolioItem.tsx   # Expandable project card with status
└── data/
    ├── domains.ts          # 5 domain objects with essays + metadata
    └── portfolio.ts        # 6 project objects with details + tags
```

## Features

- **BootSequence**: Terminal-style text animation on first visit (persisted via sessionStorage, runs once per session)
- **SystemMap**: Interactive SVG node map with connection lines, hover effects, click-to-expand
- **DomainView**: Slide-in essay panel with per-domain accent colors
- **Essays**: Smooth max-height expand/collapse
- **PortfolioItem**: Hover lift + color-coded status + expand detail
- **Navbar**: Transparent → frosted glass on scroll, mobile hamburger menu
- **Design tokens**: Full CSS variable system for consistent theming

## Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deployment

Push to GitHub and connect to Vercel. No environment variables required.

## Customization

1. **Content**: Edit `data/domains.ts` and `data/portfolio.ts`
2. **Colors**: Modify CSS variables in `globals.css`
3. **Personal info**: Update `app/about/page.tsx` and `app/portfolio/page.tsx`
4. **Email**: Replace `hello@cassiano.io` throughout with actual address
5. **Boot lines**: Edit the `LINES` array in `components/BootSequence.tsx`
