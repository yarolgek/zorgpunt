# ZorgpuntConnect (ZPC) Frontend Improvements — Implementation Plan

Frontend-only improvements for the landing page. No backend implementation in this plan (form submission wiring via third-party services is noted where relevant as optional frontend configuration).

**How to use this doc:** Work top-to-bottom by priority phase. Check boxes (`- [ ]` → `- [x]`) as items are completed. Add dates or PR links inline if helpful.

**Primary files touched:** `app/`, `components/landing/`, `app/globals.css`, `app/layout.tsx`, `public/`

---

## Progress overview

| Phase | Focus | Status |
|-------|--------|--------|
| [P0](#phase-p0--foundation--blockers) | Foundation & blockers | Complete |
| [P1](#phase-p1--conversion--core-ux) | Conversion & core UX | Complete |
| [P2](#phase-p2--content--trust) | Content & trust | Complete |
| [P3](#phase-p3--visual-identity--polish) | Visual identity & polish | Complete |
| [P4](#phase-p4--accessibility--motion) | Accessibility & motion | Complete |
| [P5](#phase-p5--seo--metadata) | SEO & metadata | Not started |
| [P6](#phase-p6--performance--housekeeping) | Performance & housekeeping | Not started |

---

## Phase P0 — Foundation & blockers

Must be resolved before polish; broken or inconsistent basics undermine trust.

### P0.1 Brand & naming alignment

- [x] Decide canonical product name: **ZorgMatch** vs **ZorgPunt** (repo vs UI) → **ZorgMatch** in UI/metadata; repo folder stays `zorgpunt`
- [x] Decide canonical advisor persona name: **Lieke** vs **Sanne** (copy, alt text, filenames) → **Lieke**
- [x] Update all user-facing strings to match decision (`hero-section`, `faq-section`, `footer`, `contact-form`, `testimonials-section`) — already aligned; hero image path → `lieke-avatar.jpg`
- [x] Update `app/layout.tsx` metadata (`title`, `description`, `authors`, `openGraph`) to match — added `openGraph.siteName`
- [x] Update `package.json` `name` if aligning with brand (optional) → `zorgmatch`
- [x] Update `README.md` / `IMPLEMENTATION_KICKSTART.md` references or add note that kickstart is historical

**Files:** `components/landing/*.tsx`, `app/layout.tsx`, `README.md`

### P0.2 Missing & mismatched assets

- [x] Add advisor avatar image to `public/images/` (consistent filename, e.g. `lieke-avatar.jpg`)
- [x] Fix `hero-section.tsx` `Image` `src` and `alt` to match actual file and persona name
- [x] Add favicon set referenced in `layout.tsx`: `icon-light-32x32.png`, `icon-dark-32x32.png`, `apple-icon.png` (or simplify `icons` config to existing `icon.svg` only) → simplified to `icon.svg` only
- [x] Verify all `public/` assets load in dev and production build (no 404s in network tab) — `npm run build` OK; removed legacy `sanne-avatar.jpg`

**Files:** `public/`, `components/landing/hero-section.tsx`, `app/layout.tsx`

### P0.3 Design tokens — single source of truth

- [x] Choose primary brand color: kickstart sage `#6B8E23` **or** current `#759940` (document choice in this file) → **`#759940`**
- [x] Update `app/globals.css` `:root` tokens to match chosen palette (+ `--brand-secondary: #006AA5`)
- [x] Fix misleading CSS comments (e.g. “Brand Blue” → accurate name)
- [x] Align `--sidebar-*` and chart tokens if unused, or leave documented as “reserved”
- [x] Confirm cream/off-white/charcoal/slate tokens match kickstart table (`#FAFAFA`, `#F7F5F0`, `#2D3748`, `#64748B`)
- [x] Run contrast check on primary green vs background and on primary button text (WCAG 4.5:1 for body-sized text) — see decisions log; `--primary-foreground: #1f2618` on green buttons

**Files:** `app/globals.css`

### P0.4 Typography — wire Geist

- [x] Apply Geist Sans to `body` via `next/font` `className` (use `variable` on `html` if preferred)
- [x] Remove or use unused `_geist` / `_geistMono` imports in `layout.tsx`
- [x] Verify font loads (no FOUT flash of system font on first paint) — `display: 'swap'` + self-hosted via `next/font`
- [x] Optional: document decision on secondary heading font (defer to P3 if not doing now)

**Files:** `app/layout.tsx`

### P0.5 CSS duplication

- [x] Confirm only `app/globals.css` is imported (not `styles/globals.css`)
- [x] Delete or archive `styles/globals.css` if unused, to avoid future token drift

**Files:** `app/layout.tsx`, `styles/globals.css`

---

## Phase P1 — Conversion & core UX

Highest impact on lead capture and navigation clarity.

### P1.1 “Hoe het werkt” — real process section

- [x] Add new section component (e.g. `how-it-works-section.tsx`) with 3–4 numbered steps
- [x] Provide **two paths**: Opdrachtgever flow and ZZP’er flow (tabs, side-by-side columns, or stacked blocks)
- [x] Move or duplicate `#hoe-het-werkt` anchor to this section (not metrics)
- [x] Rename metrics section id if needed (e.g. `#vertrouwen` or keep metrics without misleading nav label)
- [x] Update header/footer nav label if section title changes — nav label unchanged; anchor now correct
- [x] Add section to `app/page.tsx` between hero and metrics (or after metrics — decide IA)

**Files:** `components/landing/how-it-works-section.tsx` (new), `app/page.tsx`, `header.tsx`, `footer.tsx`

### P1.2 Hero ↔ form redundancy

- [x] Decide pattern: hero cards **scroll + pre-fill** form vs remove form step 0 when coming from card → skip step 0, go to niche
- [x] Ensure hero card links use `#contact-form?role=...` and scroll into view
- [x] Add `scroll-margin-top` on `#contact-form` for sticky header offset
- [x] On hash arrival: scroll to form and optionally focus first focusable control
- [x] Test mobile: card tap → form visible without confusion — `scroll-margin-top` + mobile CTA padding

**Files:** `hero-section.tsx`, `contact-form.tsx`, `globals.css` or component styles

### P1.3 Mobile sticky CTA

- [x] Add bottom sticky bar component (mobile only, `md:hidden`)
- [x] Copy: e.g. “Gratis gesprek aanvragen” → links to `#contact-form`
- [x] Hide when form is in viewport (optional `IntersectionObserver`) to avoid duplicate CTAs
- [x] Ensure bar does not cover form submit button (safe-area padding, `pb-*` on `main` or form)

**Files:** new `components/landing/mobile-cta-bar.tsx`, `app/page.tsx`

### P1.4 Form UX enhancements

- [x] Success state: add “What happens next” 3-step list (static copy)
- [x] Role-specific microcopy on step 2 (headlines, placeholder for `bericht`)
- [x] Niche step: improve mobile layout (select vs grid — pick one approach) → stacked on mobile, grid on `md+`
- [x] Trust row under submit: extend with “AVG-conform”, “Geen spam” (static)
- [x] Sync URL hash when user selects role in-form (shareable state; optional query `?role=`)
- [x] Optional (no custom backend): wire submit to Formspree / Basin / similar — document endpoint in env example only

**Files:** `contact-form.tsx`, `.env.example` (optional)

### P1.5 Tone of voice (u vs je)

- [x] Document rule: **u** for opdrachtgevers, **je** for zzp’ers (or single register — decide)
- [x] Audit and align `faq-section`, `contact-form`, `hero-section`, `footer`, success messages
- [x] Align testimonial section intro if it addresses both audiences — already neutral

**Files:** `components/landing/*.tsx`

---

## Phase P2 — Content & trust

Static content and layout; builds credibility without backend.

### P2.1 Metrics section

- [x] Add section heading (e.g. “Waarom ZorgMatch”) so metrics are not mistaken for “how it works”
- [x] Consider subtle animation on scroll (defer animation details to P4)
- [x] Verify metric copy matches brand decisions (150+ professionals, 9.5/10, 24u)

**Files:** `metrics-section.tsx`

### P2.2 Spoed / acute staffing callout

- [x] Add compact callout block for opdrachtgevers (urgent staffing)
- [x] Place near hero or top of how-it-works / metrics — after hero
- [x] Optional: `tel:` link for phone (frontend only)

**Files:** `spoed-callout.tsx`, `lib/site.ts`

### P2.3 Pricing / fee transparency (static)

- [x] Add short “Geen verrassingen” block: when opdrachtgever pays, zzp free to join
- [x] Optional: simple comparison table — ZorgMatch vs traditional bureau (2–3 rows)

**Files:** `pricing-trust-section.tsx`

### P2.4 Sector coverage grid

- [x] Visual grid of sectors (Thuiszorg, VVT, GGZ, etc.) with icons
- [x] Align labels with form niche options in `contact-form.tsx` — shared `lib/sectors.ts`
- [x] Place after metrics or within how-it-works — after metrics

**Files:** `sectors-section.tsx`, `lib/sectors.ts`

### P2.5 Footer & legal trust

- [x] Add contact block: phone, email, city/region (as available) — `lib/site.ts` placeholders
- [x] Add links: Privacybeleid, Algemene voorwaarden, Cookiebeleid (pages or placeholder routes)
- [x] Optional: KvK number, LinkedIn — KvK in footer; LinkedIn deferred
- [x] Keep “AVG/GDPR conform” only with linked policy page

**Files:** `footer.tsx`, `app/privacy/page.tsx`, `app/voorwaarden/page.tsx`, `app/cookies/page.tsx`

### P2.6 Header navigation

- [x] Update nav items to match final section ids and labels
- [x] Optional: active section highlight on scroll (intersection observer)

**Files:** `header.tsx`

---

## Phase P3 — Visual identity & polish

Differentiation and premium feel.

### P3.1 Logo & wordmark

- [x] Design or add SVG logo mark + wordmark — `public/logo-zpc.png` (user asset)
- [x] Replace text-only logo in `header.tsx` and `footer.tsx` — `BrandLogo` component
- [x] Export favicon from logo (`public/icon.svg` and PNG sizes) — metadata uses `logo-zpc.png`

**Files:** `public/`, `header.tsx`, `footer.tsx`, `brand-logo.tsx`, `lib/brand.ts`

### P3.2 Hero visual polish

- [x] Professional photo for advisor (or approved stock with care context) — Lieke avatar (P0.2)
- [x] Refine persona cards: hover states, optional persona accent colors — green / blue accents
- [x] Balance left column density on large screens — `lg:max-w-xl`, gradient backdrop

**Files:** `hero-section.tsx`, `public/images/`

### P3.3 Section visual depth

- [x] Subtle gradients or dividers between major sections — hero gradient, `section-band`
- [x] Consistent card shadow/border language across hero cards, form, testimonials — `card-elevated`
- [x] Avoid over-animation; keep calm healthcare aesthetic

**Files:** section components, `globals.css`

### P3.4 Optional heading font

- [x] If adopted: load second font for `h1`/`h2` only — deferred; Geist only
- [x] Document pairing in this file

**Files:** `app/layout.tsx`, `globals.css`

### P3.5 Dark mode decision

- [x] **Option A:** Remove unused `.dark` overrides and `ThemeProvider` if not shipping dark mode — keep `.dark` tokens for shadcn; no toggle on landing
- [ ] **Option B:** Implement `ThemeProvider` + toggle and audit all landing components in dark mode — not chosen

**Files:** `app/layout.tsx`, `theme-provider.tsx`, `globals.css`, UI components as needed

---

## Phase P4 — Accessibility & motion

WCAG-oriented pass; required for carousel and scroll UX.

### P4.1 Skip links & landmarks

- [x] Add `<main id="main">` wrapper in `page.tsx`
- [x] Skip link: “Naar hoofdinhoud” → `#main`; keep or add second skip to `#contact-form`
- [x] Verify heading hierarchy: single `h1`, logical `h2` per section

**Files:** `app/page.tsx`

### P4.2 Testimonials carousel

- [x] Make dot indicators clickable with `aria-label` per slide
- [x] Add prev/next buttons (keyboard operable)
- [x] `aria-live="polite"` on quote container
- [x] Pause auto-advance on hover and focus
- [x] Respect `prefers-reduced-motion`: disable auto-rotate and progress bar animation
- [ ] Desktop: optional 2-up layout per kickstart — deferred

**Files:** `testimonials-section.tsx`, `hooks/use-reduced-motion.ts`

### P4.3 Form accessibility

- [x] Step indicator: `aria-current="step"` on active step
- [x] Announce step changes for screen readers (optional `aria-live` region)
- [x] Confirm all step buttons are `type="button"` except submit
- [x] Error summary or focus first invalid field on submit fail

**Files:** `contact-form.tsx`

### P4.4 Focus & contrast

- [x] Keyboard-test full page tab order (header → main → footer)
- [x] Verify focus rings visible on all interactive elements
- [x] Re-check contrast after final primary color (P0.3) — unchanged from P0.3 log

**Files:** global QA

---

## Phase P5 — SEO & metadata

Discoverability and sharing; no backend.

### P5.1 Open Graph & Twitter

- [ ] Create `public/og-image.png` (1200×630): brand, tagline, primary color
- [ ] Add `openGraph.images`, `twitter.card` in `layout.tsx`
- [ ] Align `description` with hero `h1` messaging

**Files:** `app/layout.tsx`, `public/`

### P5.2 Structured data (JSON-LD)

- [ ] Add `Organization` schema (name, url, logo, contactPoint)
- [ ] Add `FAQPage` schema from `faq-section` items
- [ ] Optional: `WebSite` with `potentialAction` SearchAction if search exists later
- [ ] Validate with Google Rich Results Test

**Files:** `app/layout.tsx` or `components/landing/structured-data.tsx`

### P5.3 Production metadata cleanup

- [ ] Remove `generator: 'v0.app'` from metadata
- [ ] Set canonical URL when domain is known
- [ ] Confirm `lang="nl"` and locale `nl_NL` on Open Graph

**Files:** `app/layout.tsx`

---

## Phase P6 — Performance & housekeeping

Maintainability and load performance.

### P6.1 Images

- [ ] Avatar: WebP where possible, correct `sizes`, `priority` only for above-fold hero image
- [ ] OG image optimized (< 300 KB target)

**Files:** `hero-section.tsx`, `public/`

### P6.2 Bundle & dependencies

- [ ] Audit unused shadcn/ui components — remove from repo over time if not planned (optional, low priority)
- [ ] Document that large `components/ui` folder is template residue

### P6.3 Analytics (frontend events)

- [ ] Vercel Analytics already in production — optional custom events for CTA clicks (section id, role selected)
- [ ] Document event names for future funnels

**Files:** CTA components, `layout.tsx`

### P6.4 Dev environment

- [ ] Resolve Next.js turbopack root warning (multiple lockfiles parent/child) — `next.config` `turbopack.root` or lockfile cleanup
- [ ] Confirm `npm run build` passes with zero missing asset errors

**Files:** `next.config.ts` / `next.config.js`, repo root

### P6.5 Final QA checklist

- [ ] Mobile: iPhone SE width — form usable, sticky CTA not overlapping
- [ ] Mobile: menu open/close, anchor scroll with header height
- [ ] Desktop: sticky form column (`lg:sticky`) does not jump oddly
- [ ] All hash deep links: `#hoe-het-werkt`, `#ervaringen`, `#faq`, `#contact-form?role=*`
- [ ] Form validation messages in Dutch, phone/email edge cases
- [ ] Lighthouse: Performance, Accessibility, SEO (baseline scores recorded below)

**Record baselines (fill when run):**

| Metric | Before | After |
|--------|--------|-------|
| Performance | | |
| Accessibility | | |
| SEO | | |
| Best Practices | | |

---

## Suggested implementation order (sprints)

### Sprint 1 — Unblock (P0)
P0.1 → P0.2 → P0.3 → P0.4 → P0.5

### Sprint 2 — IA & conversion (P1)
P1.1 → P1.2 → P1.3 → P1.4 → P1.5

### Sprint 3 — Trust content (P2)
P2.1 → P2.2 → P2.3 → P2.4 → P2.5 → P2.6

### Sprint 4 — Polish & compliance (P3 + P4 + P5)
P3.1–P3.3 → P4.1–P4.4 → P5.1–P5.3

### Sprint 5 — Ship-ready (P3 remainder + P6)
P3.4–P3.5 (if needed) → P6.1–P6.5

---

## Component map (target architecture)

```
app/
├── page.tsx                          # Assemble sections + skip links + main landmark
├── layout.tsx                        # Fonts, metadata, JSON-LD
├── globals.css                       # Brand tokens only
├── privacy/page.tsx                  # Optional placeholder (P2.5)
└── voorwaarden/page.tsx              # Optional placeholder (P2.5)

components/landing/
├── header.tsx                        # Logo, nav, active section (P2.6)
├── hero-section.tsx                  # Persona cards, avatar, deep links (P1.2)
├── contact-form.tsx                  # Multi-step, a11y, success steps (P1.4, P4.3)
├── how-it-works-section.tsx          # NEW (P1.1)
├── metrics-section.tsx               # Renamed/id fix (P2.1)
├── sectors-section.tsx               # NEW optional (P2.4)
├── pricing-trust-section.tsx         # NEW optional (P2.3)
├── testimonials-section.tsx          # Carousel a11y, 2-up desktop (P4.2)
├── faq-section.tsx                   # Copy alignment (P1.5)
├── footer.tsx                        # Contact + legal (P2.5)
└── mobile-cta-bar.tsx                # NEW (P1.3)

public/
├── icon.svg + favicon PNGs
├── og-image.png
└── images/…                          # Avatar, etc.
```

---

## Decisions log

Record choices here so implementation stays consistent.

| Topic | Decision | Date | Notes |
|-------|----------|------|-------|
| Product name | **ZorgpuntConnect** (ZPC) | 2026-05-25 | Only **Z** and **C** capitalized; wordmark green `#759940` + blue `#006AA5` |
| Wordmark | `BrandWordmark` component | 2026-05-25 | Zorgpunt + Connect split colors; logo mark `logo-zpc.png` |
| Advisor name | **Lieke** | 2026-05-25 | Avatar file: `public/images/lieke-avatar.jpg` (see P0.2) |
| Primary color | **`#759940`** | 2026-05-25 | `--brand-primary`; kickstart `#6B8E23` superseded |
| Secondary color | **`#006AA5`** | 2026-05-25 | `--brand-secondary`; charts / optional accents |
| Contrast (green) | Documented | 2026-05-25 | Green on `#FAFAFA` ~3.2:1 (large/bold UI text); filled buttons use `#1f2618` on green ~4.7:1; blue on white ~5.8:1 |
| Heading font (secondary) | Deferred to P3 | 2026-05-25 | Geist Sans only for now |
| Tone (u/je) | **u** opdrachtgever / **je** zzp'er | 2026-05-25 | Per-audience in form, how-it-works tabs, hero zzp card |
| Form backend | Mock + `.env.example` | 2026-05-25 | `NEXT_PUBLIC_FORM_ENDPOINT` documented, not wired |
| Tone (u/je) | _TBD_ | | Dual register vs single |
| Dark mode | _TBD_ | | Ship / remove |
| Form backend | _TBD_ | | Mock / Formspree / later API |
| Domain/canonical | _TBD_ | | For SEO phase |

---

## Out of scope (this document)

- Custom API or n8n webhook implementation
- Authentication, dashboards, or multi-page app beyond legal placeholders
- A/B testing infrastructure
- CMS integration for testimonials/FAQ
- Real CRM integration

---

## References

- Original build spec: `IMPLEMENTATION_KICKSTART.md`
- Landing assembly: `app/page.tsx`
- Design tokens: `app/globals.css`
