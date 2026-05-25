# ZorgMatch Frontend Improvements — Implementation Plan

Frontend-only improvements for the landing page. No backend implementation in this plan (form submission wiring via third-party services is noted where relevant as optional frontend configuration).

**How to use this doc:** Work top-to-bottom by priority phase. Check boxes (`- [ ]` → `- [x]`) as items are completed. Add dates or PR links inline if helpful.

**Primary files touched:** `app/`, `components/landing/`, `app/globals.css`, `app/layout.tsx`, `public/`

---

## Progress overview

| Phase | Focus | Status |
|-------|--------|--------|
| [P0](#phase-p0--foundation--blockers) | Foundation & blockers | Not started |
| [P1](#phase-p1--conversion--core-ux) | Conversion & core UX | Not started |
| [P2](#phase-p2--content--trust) | Content & trust | Not started |
| [P3](#phase-p3--visual-identity--polish) | Visual identity & polish | Not started |
| [P4](#phase-p4--accessibility--motion) | Accessibility & motion | Not started |
| [P5](#phase-p5--seo--metadata) | SEO & metadata | Not started |
| [P6](#phase-p6--performance--housekeeping) | Performance & housekeeping | Not started |

---

## Phase P0 — Foundation & blockers

Must be resolved before polish; broken or inconsistent basics undermine trust.

### P0.1 Brand & naming alignment

- [ ] Decide canonical product name: **ZorgMatch** vs **ZorgPunt** (repo vs UI)
- [ ] Decide canonical advisor persona name: **Lieke** vs **Sanne** (copy, alt text, filenames)
- [ ] Update all user-facing strings to match decision (`hero-section`, `faq-section`, `footer`, `contact-form`, `testimonials-section`)
- [ ] Update `app/layout.tsx` metadata (`title`, `description`, `authors`, `openGraph`) to match
- [ ] Update `package.json` `name` if aligning with brand (optional)
- [ ] Update `README.md` / `IMPLEMENTATION_KICKSTART.md` references or add note that kickstart is historical

**Files:** `components/landing/*.tsx`, `app/layout.tsx`, `README.md`

### P0.2 Missing & mismatched assets

- [ ] Add advisor avatar image to `public/images/` (consistent filename, e.g. `lieke-avatar.jpg`)
- [ ] Fix `hero-section.tsx` `Image` `src` and `alt` to match actual file and persona name
- [ ] Add favicon set referenced in `layout.tsx`: `icon-light-32x32.png`, `icon-dark-32x32.png`, `apple-icon.png` (or simplify `icons` config to existing `icon.svg` only)
- [ ] Verify all `public/` assets load in dev and production build (no 404s in network tab)

**Files:** `public/`, `components/landing/hero-section.tsx`, `app/layout.tsx`

### P0.3 Design tokens — single source of truth

- [ ] Choose primary brand color: kickstart sage `#6B8E23` **or** current `#759940` (document choice in this file)
- [ ] Update `app/globals.css` `:root` tokens to match chosen palette
- [ ] Fix misleading CSS comments (e.g. “Brand Blue” → accurate name)
- [ ] Align `--sidebar-*` and chart tokens if unused, or leave documented as “reserved”
- [ ] Confirm cream/off-white/charcoal/slate tokens match kickstart table
- [ ] Run contrast check on primary green vs background and on primary button text (WCAG 4.5:1 for body-sized text)

**Files:** `app/globals.css`

### P0.4 Typography — wire Geist

- [ ] Apply Geist Sans to `body` via `next/font` `className` (use `variable` on `html` if preferred)
- [ ] Remove or use unused `_geist` / `_geistMono` imports in `layout.tsx`
- [ ] Verify font loads (no FOUT flash of system font on first paint)
- [ ] Optional: document decision on secondary heading font (defer to P3 if not doing now)

**Files:** `app/layout.tsx`

### P0.5 CSS duplication

- [ ] Confirm only `app/globals.css` is imported (not `styles/globals.css`)
- [ ] Delete or archive `styles/globals.css` if unused, to avoid future token drift

**Files:** `app/layout.tsx`, `styles/globals.css`

---

## Phase P1 — Conversion & core UX

Highest impact on lead capture and navigation clarity.

### P1.1 “Hoe het werkt” — real process section

- [ ] Add new section component (e.g. `how-it-works-section.tsx`) with 3–4 numbered steps
- [ ] Provide **two paths**: Opdrachtgever flow and ZZP’er flow (tabs, side-by-side columns, or stacked blocks)
- [ ] Move or duplicate `#hoe-het-werkt` anchor to this section (not metrics)
- [ ] Rename metrics section id if needed (e.g. `#vertrouwen` or keep metrics without misleading nav label)
- [ ] Update header/footer nav label if section title changes
- [ ] Add section to `app/page.tsx` between hero and metrics (or after metrics — decide IA)

**Files:** `components/landing/how-it-works-section.tsx` (new), `app/page.tsx`, `header.tsx`, `footer.tsx`

### P1.2 Hero ↔ form redundancy

- [ ] Decide pattern: hero cards **scroll + pre-fill** form vs remove form step 0 when coming from card
- [ ] Ensure hero card links use `#contact-form?role=...` and scroll into view
- [ ] Add `scroll-margin-top` on `#contact-form` for sticky header offset
- [ ] On hash arrival: scroll to form and optionally focus first focusable control
- [ ] Test mobile: card tap → form visible without confusion

**Files:** `hero-section.tsx`, `contact-form.tsx`, `globals.css` or component styles

### P1.3 Mobile sticky CTA

- [ ] Add bottom sticky bar component (mobile only, `md:hidden`)
- [ ] Copy: e.g. “Gratis gesprek aanvragen” → links to `#contact-form`
- [ ] Hide when form is in viewport (optional `IntersectionObserver`) to avoid duplicate CTAs
- [ ] Ensure bar does not cover form submit button (safe-area padding, `pb-*` on `main` or form)

**Files:** new `components/landing/mobile-cta-bar.tsx`, `app/page.tsx`

### P1.4 Form UX enhancements

- [ ] Success state: add “What happens next” 3-step list (static copy)
- [ ] Role-specific microcopy on step 2 (headlines, placeholder for `bericht`)
- [ ] Niche step: improve mobile layout (select vs grid — pick one approach)
- [ ] Trust row under submit: extend with “AVG-conform”, “Geen spam” (static)
- [ ] Sync URL hash when user selects role in-form (shareable state; optional query `?role=`)
- [ ] Optional (no custom backend): wire submit to Formspree / Basin / similar — document endpoint in env example only

**Files:** `contact-form.tsx`, `.env.example` (optional)

### P1.5 Tone of voice (u vs je)

- [ ] Document rule: **u** for opdrachtgevers, **je** for zzp’ers (or single register — decide)
- [ ] Audit and align `faq-section`, `contact-form`, `hero-section`, `footer`, success messages
- [ ] Align testimonial section intro if it addresses both audiences

**Files:** `components/landing/*.tsx`

---

## Phase P2 — Content & trust

Static content and layout; builds credibility without backend.

### P2.1 Metrics section

- [ ] Add section heading (e.g. “Waarom ZorgMatch”) so metrics are not mistaken for “how it works”
- [ ] Consider subtle animation on scroll (defer animation details to P4)
- [ ] Verify metric copy matches brand decisions (150+ professionals, 9.5/10, 24u)

**Files:** `metrics-section.tsx`

### P2.2 Spoed / acute staffing callout

- [ ] Add compact callout block for opdrachtgevers (urgent staffing)
- [ ] Place near hero or top of how-it-works / metrics
- [ ] Optional: `tel:` link for phone (frontend only)

**Files:** new snippet or `hero-section.tsx` / `how-it-works-section.tsx`

### P2.3 Pricing / fee transparency (static)

- [ ] Add short “Geen verrassingen” block: when opdrachtgever pays, zzp free to join
- [ ] Optional: simple comparison table — ZorgMatch vs traditional bureau (2–3 rows)

**Files:** new `pricing-trust-section.tsx` or expand `faq-section`

### P2.4 Sector coverage grid

- [ ] Visual grid of sectors (Thuiszorg, VVT, GGZ, etc.) with icons
- [ ] Align labels with form niche options in `contact-form.tsx`
- [ ] Place after metrics or within how-it-works

**Files:** new `sectors-section.tsx` or part of `how-it-works-section.tsx`

### P2.5 Footer & legal trust

- [ ] Add contact block: phone, email, city/region (as available)
- [ ] Add links: Privacybeleid, Algemene voorwaarden, Cookiebeleid (pages or placeholder routes)
- [ ] Optional: KvK number, LinkedIn
- [ ] Keep “AVG/GDPR conform” only with linked policy page

**Files:** `footer.tsx`, optional `app/privacy/page.tsx`, `app/voorwaarden/page.tsx`

### P2.6 Header navigation

- [ ] Update nav items to match final section ids and labels
- [ ] Optional: active section highlight on scroll (intersection observer)

**Files:** `header.tsx`

---

## Phase P3 — Visual identity & polish

Differentiation and premium feel.

### P3.1 Logo & wordmark

- [ ] Design or add SVG logo mark + wordmark
- [ ] Replace text-only logo in `header.tsx` and `footer.tsx`
- [ ] Export favicon from logo (`public/icon.svg` and PNG sizes)

**Files:** `public/`, `header.tsx`, `footer.tsx`

### P3.2 Hero visual polish

- [ ] Professional photo for advisor (or approved stock with care context)
- [ ] Refine persona cards: hover states, optional persona accent colors
- [ ] Balance left column density on large screens

**Files:** `hero-section.tsx`, `public/images/`

### P3.3 Section visual depth

- [ ] Subtle gradients or dividers between major sections
- [ ] Consistent card shadow/border language across hero cards, form, testimonials
- [ ] Avoid over-animation; keep calm healthcare aesthetic

**Files:** section components, `globals.css`

### P3.4 Optional heading font

- [ ] If adopted: load second font for `h1`/`h2` only
- [ ] Document pairing in this file

**Files:** `app/layout.tsx`, `globals.css`

### P3.5 Dark mode decision

- [ ] **Option A:** Remove unused `.dark` overrides and `ThemeProvider` if not shipping dark mode
- [ ] **Option B:** Implement `ThemeProvider` + toggle and audit all landing components in dark mode

**Files:** `app/layout.tsx`, `theme-provider.tsx`, `globals.css`, UI components as needed

---

## Phase P4 — Accessibility & motion

WCAG-oriented pass; required for carousel and scroll UX.

### P4.1 Skip links & landmarks

- [ ] Add `<main id="main">` wrapper in `page.tsx`
- [ ] Skip link: “Naar hoofdinhoud” → `#main`; keep or add second skip to `#contact-form`
- [ ] Verify heading hierarchy: single `h1`, logical `h2` per section

**Files:** `app/page.tsx`

### P4.2 Testimonials carousel

- [ ] Make dot indicators clickable with `aria-label` per slide
- [ ] Add prev/next buttons (keyboard operable)
- [ ] `aria-live="polite"` on quote container
- [ ] Pause auto-advance on hover and focus
- [ ] Respect `prefers-reduced-motion`: disable auto-rotate and progress bar animation
- [ ] Desktop: optional 2-up layout per kickstart

**Files:** `testimonials-section.tsx`

### P4.3 Form accessibility

- [ ] Step indicator: `aria-current="step"` on active step
- [ ] Announce step changes for screen readers (optional `aria-live` region)
- [ ] Confirm all step buttons are `type="button"` except submit
- [ ] Error summary or focus first invalid field on submit fail

**Files:** `contact-form.tsx`

### P4.4 Focus & contrast

- [ ] Keyboard-test full page tab order (header → main → footer)
- [ ] Verify focus rings visible on all interactive elements
- [ ] Re-check contrast after final primary color (P0.3)

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
| Product name | _TBD_ | | ZorgMatch vs ZorgPunt |
| Advisor name | _TBD_ | | Lieke vs Sanne |
| Primary color | _TBD_ | | `#6B8E23` vs `#759940` |
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
