

# Sri Satyaritha Engineers — Revised Plan

## Change from Previous Plan
Use React with JavaScript-style approach (minimal TypeScript, no complex types). All components will use `.tsx` files but written in plain JS style without type annotations.

## Implementation Structure

### Files to Create/Modify

1. **`src/index.css`** — Update CSS variables to the dark industrial color scheme
2. **`src/pages/Index.tsx`** — Main page composing all sections
3. **`src/components/Navbar.tsx`** — Fixed top nav with smooth scroll links + mobile menu
4. **`src/components/HeroSection.tsx`** — Full-viewport hero with blueprint grid, headline, CTAs
5. **`src/components/AboutSection.tsx`** — Company intro, Vision/Mission/Values cards, stats
6. **`src/components/ServicesSection.tsx`** — 5 service cards with icons and hover glow
7. **`src/components/ProjectsSection.tsx`** — 6 project cards with hover overlay
8. **`src/components/WhyChooseUsSection.tsx`** — 5 credibility points with icons
9. **`src/components/ClientsSection.tsx`** — Client logos and certification badges
10. **`src/components/ContactSection.tsx`** — Form + contact details
11. **`src/components/Footer.tsx`** — Company info, links, contact

### Design System (applied via CSS variables + Tailwind)
- Background: `#0B1220`, Cards: `#111827`, Primary: `#1E3A8A`, Accent: `#F97316`, Cyan: `#06B6D4`
- Bold headings with letter-spacing, clean sans-serif body
- Blueprint grid overlays, subtle glow effects, smooth scroll

### Sections (as described in previous plan)
- Hero with "Engineering Excellence. Built on Precision."
- About with Vision/Mission/Values + stats counter
- Services: 5 cards (Fabrication, CNC, Installation, Maintenance, Custom Engineering)
- Projects: 6-card grid with hover overlays
- Why Choose Us: 5 credibility points
- Clients & Certifications
- Contact form + details
- Footer

All components use Lucide React icons, Tailwind classes, and simple functional components without TypeScript type annotations.

