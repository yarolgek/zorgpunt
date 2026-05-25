# ZorgMatch Landing Page - Implementation Kickstart

> **Historical document.** Original build spec. Current product: **ZorgPuntConnect** (ZPC). Advisor persona: **Lieke**. See [`IMPLEMENTATION_IMPROVEMENTS.md`](./IMPLEMENTATION_IMPROVEMENTS.md).

## Project Overview

A highly accessible, premium, single-page landing website in **Dutch** for a care provider platform operating in the Netherlands. The primary goal is a single CTA: getting users to fill out a contact form.

---

## Design Token System

### Color Palette (5 Colors Total)

| Token | Hex | OKLCH | Usage |
|-------|-----|-------|-------|
| **Sage Green (Primary)** | `#6B8E23` | `oklch(0.58 0.12 125)` | CTA buttons, accent elements, trust badges |
| **Off-White (Background)** | `#FAFAFA` | `oklch(0.98 0 0)` | Page background, clean sections |
| **Charcoal (Foreground)** | `#2D3748` | `oklch(0.35 0.02 260)` | Primary text, headings |
| **Slate (Muted)** | `#64748B` | `oklch(0.55 0.02 260)` | Secondary text, captions |
| **Cream (Card)** | `#F7F5F0` | `oklch(0.97 0.01 90)` | Card backgrounds, subtle contrast |

### Typography

- **Font Family:** Geist Sans (already configured)
- **Headings:** `text-3xl` to `text-5xl`, `font-semibold`, `leading-tight`
- **Body:** `text-base` to `text-lg`, `leading-relaxed`
- **Captions/Micro-copy:** `text-sm`, `text-muted-foreground`

### Spacing & Layout

- **Section padding:** `py-16 lg:py-24`
- **Container:** `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`
- **Component gaps:** `gap-6` to `gap-8`
- **Border radius:** `rounded-lg` to `rounded-xl`

---

## CSS Variables to Update

```css
:root {
  /* Core palette */
  --background: oklch(0.98 0 0);           /* #FAFAFA - Off-white */
  --foreground: oklch(0.35 0.02 260);      /* #2D3748 - Charcoal */
  
  /* Primary (Sage Green) */
  --primary: oklch(0.58 0.12 125);         /* #6B8E23 */
  --primary-foreground: oklch(1 0 0);      /* White text on green */
  
  /* Cards */
  --card: oklch(0.97 0.01 90);             /* #F7F5F0 - Cream */
  --card-foreground: oklch(0.35 0.02 260); /* Charcoal */
  
  /* Muted/Secondary */
  --muted: oklch(0.95 0.01 90);
  --muted-foreground: oklch(0.55 0.02 260); /* #64748B - Slate */
  
  /* Accents */
  --accent: oklch(0.58 0.12 125);          /* Sage green accent */
  --accent-foreground: oklch(1 0 0);
  
  /* Borders & Inputs */
  --border: oklch(0.90 0.01 90);
  --input: oklch(0.92 0.01 90);
  --ring: oklch(0.58 0.12 125);            /* Sage green focus ring */
}
```

---

## Component Architecture

```
app/
├── page.tsx                    # Main landing page (assembles all sections)
├── globals.css                 # Updated design tokens
└── layout.tsx                  # Root layout with metadata

components/
├── landing/
│   ├── hero-section.tsx        # Split layout: persona + contact form
│   ├── contact-form.tsx        # Form with validation & loading state
│   ├── metrics-section.tsx     # 3-column trust metrics
│   ├── testimonials-section.tsx # Rotating testimonial cards
│   ├── faq-section.tsx         # Accordion FAQ
│   └── footer.tsx              # Minimalist footer
├── ui/
│   ├── (existing shadcn)       # Button, Card, Input, Select, Accordion
│   └── star-rating.tsx         # 5-star visual component (new)
└── avatar/
    └── sanne-avatar.tsx        # Sanne's avatar with caption
```

---

## Section Breakdown

### 1. Hero Section (Split Layout)

**Left Column - The Persona:**
- Warm header: "Vind snel de juiste zorgverlener bij u in de buurt"
- Calming subtext introducing Sanne
- Circular avatar with caption: "Ik help u persoonlijk om de perfecte match te vinden. — Sanne"

**Right Column - Contact Form (CTA #1):**
- High-contrast Card container
- Fields: Naam, E-mailadres, Telefoonnummer, Type zorg (Select)
- Primary CTA button: "Gratis Adviesgesprek Aanvragen"
- Micro-copy: "✓ Binnen 24 uur een reactie • Geheel vrijblijvend"

### 2. Metrics Section (Trust Building)

Three-column grid with large typography:
| Metric | Label |
|--------|-------|
| Binnen 24 uur | Persoonlijk en telefonisch contact |
| 150+ Helpers | Geverifieerde zorgverleners actief in uw regio |
| 9.4 / 10 | Gemiddelde waardering door Nederlandse mantelzorgers |

### 3. Testimonials Section (Social Proof)

- Title: "Wat andere mantelzorgers over ons zeggen"
- Two rotating cards with 5-star icons
- Auto-rotation with pause on hover
- Testimonials from Annelies (Utrecht) and Henk (Eindhoven)

### 4. FAQ Section (Objection Removal)

- Title: "Veelgestelde vragen"
- Subtitle: "Alles wat u moet weten over onze ondersteuning"
- 4 accordion items addressing key concerns
- Scroll-to-top link (CTA #2): "Staat uw vraag er niet tussen? Scroll naar boven en stuur Sanne een bericht."

### 5. Footer

- Minimalist design
- GDPR/AVG compliance text
- Optional: Repeat CTA button (CTA #3)

---

## CTA Placement Strategy (Minimum 3)

| Location | CTA Type | Text |
|----------|----------|------|
| Hero (Right Column) | Primary Button | "Gratis Adviesgesprek Aanvragen" |
| After FAQ | Text Link | "Scroll naar boven en stuur Sanne een bericht" |
| Footer | Secondary Button | "Start uw gratis gesprek" |
| Floating (Mobile) | Sticky Button | "Contact opnemen" (optional enhancement) |

---

## Technical Specifications

### Form Validation (Client-Side)

```typescript
// Validation rules
const schema = {
  naam: { required: true, minLength: 2 },
  email: { required: true, pattern: email },
  telefoon: { required: true, pattern: dutch-phone },
  zorgType: { required: true }
}

// Error messages (Dutch)
const errors = {
  naam: "Vul uw naam in",
  email: "Vul een geldig e-mailadres in",
  telefoon: "Vul een geldig telefoonnummer in",
  zorgType: "Selecteer een type zorg"
}
```

### Loading States

- Button shows spinner + "Versturen..."
- Form fields disabled during submission
- Success: Toast/message + form reset
- Error: Inline error message

### Accessibility (WCAG 2.1 AA)

- All form fields have visible labels
- Focus states use `--ring` color (sage green)
- Skip-to-content link
- Proper heading hierarchy (h1 > h2 > h3)
- Color contrast ratio: minimum 4.5:1
- Keyboard navigation: full support
- Screen reader: ARIA labels on interactive elements

### Responsive Breakpoints

| Breakpoint | Layout Changes |
|------------|----------------|
| Mobile (`<640px`) | Single column, stacked hero, full-width buttons |
| Tablet (`640-1024px`) | Two-column metrics, testimonials side-by-side |
| Desktop (`>1024px`) | Full split hero, 3-column metrics |

---

## Implementation Order

### Phase 1: Foundation
1. [ ] Update `globals.css` with new design tokens
2. [ ] Update `layout.tsx` with metadata (Dutch SEO)
3. [ ] Generate Sanne's avatar image

### Phase 2: Core Components
4. [ ] Build `hero-section.tsx` with split layout
5. [ ] Build `contact-form.tsx` with validation
6. [ ] Build `metrics-section.tsx`

### Phase 3: Social Proof & Trust
7. [ ] Build `star-rating.tsx` component
8. [ ] Build `testimonials-section.tsx` with rotation
9. [ ] Build `faq-section.tsx` with accordion

### Phase 4: Final Assembly
10. [ ] Build `footer.tsx`
11. [ ] Assemble all sections in `page.tsx`
12. [ ] Add smooth scroll behavior
13. [ ] Mobile responsiveness testing

---

## Assets Needed

| Asset | Type | Status |
|-------|------|--------|
| Sanne avatar | AI-generated image | To generate |
| Star icons | Lucide React | Available |
| Check icon | Lucide React | Available |

---

## Dependencies

All dependencies are already available in the project:
- `shadcn/ui` components (Button, Card, Input, Select, Accordion)
- `lucide-react` for icons
- Tailwind CSS for styling

No additional packages required.

---

## Notes

- **Webhook Integration:** Form submission currently logs to console; webhook endpoint to be connected later via n8n
- **Analytics:** Consider adding event tracking for CTA clicks (future enhancement)
- **A/B Testing:** Hero headline variants could be tested (future enhancement)
