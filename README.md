# Handoff: Академия психотерапии — Redesigned Landing Page

## Overview
A redesign of the "Академия краткосрочной стратегической психотерапии" (АКСП) marketing homepage. The page introduces psychology training programs, builds trust (testimonials, credentials), and drives leads via a contact form. This handoff covers the full page, built and reviewed screen-by-screen with the client.

## About the Design Files
The bundled file (`Страница.html`) is a **design reference built in plain HTML/CSS/JS** — a working prototype showing intended layout, visual style, copy, and interaction behavior. It is **not production code to copy directly into a codebase**. The task is to **recreate this design in the target codebase's existing environment** (React, Vue, whatever framework the real site runs on) using its established components, patterns, and build tooling. If no frontend framework exists yet for this project, choose the most appropriate one and implement the design there — but keep the visual system (colors, type, spacing, components) faithful to what's documented below.

The prototype is a static single page; in production this will likely be a component-driven multi-section page (hero, cards grid, FAQ accordion, testimonial grid, lead form, footer) — split it into components as appropriate for the target stack.

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, and copy are final (as approved by the client through iterative review). Recreate pixel-accurate: exact hex colors, font sizes, border-radius, shadows, and spacing given below. Real client copy (testimonials, FAQ answers, program details, contact info) is already in place — do not invent or alter it.

## Screens / Sections
The page is one continuous scroll with 8 sections, in order:

### 1. Header (sticky nav)
- Sticky top nav, backdrop-blur cream background (`rgba(250,248,244,0.55)`, `blur(20px) saturate(180%)`), condenses padding + gains a bottom border + shadow after 32px of scroll (see `.scrolled` class / scroll listener).
- Left: logo image (60px tall). Right: horizontal nav — plain links ("Психолог с нуля", "О нас", "Новости", "Контакты") plus two **dropdown menus**:
  - "Повышение квалификации" — opens a 2-column mega-panel (640px wide) of 8 program links, each with a title + one-line description.
  - "Вспомогательные материалы" — opens a single-column panel (280px) mixing plain links and title+description items.
- Dropdowns: click toggles `.open` on a `.nav-dd` wrapper (not hover), closing any other open dropdown; click-outside closes. Chevron icon (12×12 SVG) sits after the label.

### 2. Hero
- Full-viewport-width photo background (`images/hero-classroom.png`, cover, positioned right) with a **left-to-right cream gradient fade** (`rgba(250,248,244,0.97)` → transparent, 5 stops from 0%–84%) so text sits on a readable scrim while the photo shows through on the right.
- Content is constrained to the shared 1200px container (see Design Tokens) with 40px side padding, so on wide viewports the text column gets a real left margin instead of hugging the edge; the photo/gradient stays full-bleed behind it.
- Eyebrow pill → H1 (forced to 2 lines via a 330px max-width on the `h1` itself, font-size 54px) → lead paragraph → two CTA buttons (primary filled blue, secondary outline) → two feature bullets with 64px icons → a white "diploma" credential card (72px icon, title + description, floating over the photo with its own shadow).

### 3. Программы (course cards)
- Section header: eyebrow + H2 ("Направления подготовки психологов") + subtitle, all inside the shared container.
- 3-column grid (responsive to 2 then 1 column) of 6 program cards. Each card: photo (image, scale(1.08)→scale(1) crop-in on card `:hover`, 190px tall), a row of pill tags (one "cert"-styled tag in blue-tint for diploma/certificate hours, plain grey tags for format/duration), bold title, a start-date or "Идёт набор" (green) line, full-width primary button "Подробнее".
- **Row alignment is done at runtime with JS** (`alignCardRows()`), not fixed CSS heights: on load/resize it measures each card's `.tags` and `.card-title` height per visual row and sets `min-height` so buttons/dates line up even when copy wraps differently. Recreate this behavior (equal-height rows) using your framework's layout primitives (CSS Grid `align-items: stretch` + flex column with `margin-top:auto` on the button is usually enough in a real grid — the JS was a workaround for this prototype's constraints).
- Below the grid: a **featured founder panel** — light-blue-tinted, photo left (320px), title + 2×2 grid of "course name + small pill button" on the right.

### 4. Почему учатся у нас (why-us)
- Whole section sits on a **light-blue rounded panel** (`#EEF5FC`, 32px radius) — the one deliberate background break from the cream elsewhere, used sparingly (only here and on the testimonials section) for rhythm.
- 3×2 grid of cards: 96px rounded-square icon tile (client-supplied 3D icon PNGs, 78px inside), bold title, 4-item bullet list (custom small blue-dot markers, not native `<ul>` bullets).
- Single centered CTA button below the grid (not full-width — sized to content).

### 5. Практикумы преподавателей
- 4-column grid of practicum cards: small blue "author name" label, bold title, primary button. Same row-alignment JS pattern as the programs grid.
- Featured panel below (light-blue, same visual language as #3's founder panel): photo + heading + 4-column list of practicum names each with a small "Перейти" button.

### 6. FAQ ("Ответы на вопросы")
- Simple accordion: hairline-divided rows, question in bold blue, a 32px circular blue "+" button on the right that **rotates 45° to become a "×"** when open (pure CSS rotate, no icon swap).
- Only one item open at a time (opening one closes any other). Height animates via measured `scrollHeight` → `max-height` transition (250ms ease) — a common lightweight accordion pattern, framework-agnostic.
- One answer includes a bullet list of required documents (Что нужно для зачисления) instead of a paragraph.

### 7. Отзывы (testimonials)
- Same light-blue rounded-panel treatment as section 4.
- 2-column grid of 6 testimonial cards: full quote text, author avatar (44px circle, real client photos) + name + a **linked** review-source label ("Яндекс Карты" / "2ГИС", real hrefs to real review pages).
- The 3 longest quotes are **clamped to 4 lines** (`-webkit-line-clamp`) with a "читать ещё" text-button that expands to full height and flips its own label to "скрыть". Shorter quotes show in full with no toggle.

### 8. Lead form ("Остались вопросы?")
- Solid brand-blue rounded panel (not light-blue — this is the one section using the strong `#0D74D0` fill, for CTA emphasis), white H2 + subtitle.
- Single-row form (wraps on mobile): name text input, email input, a phone input with a country-code affordance (flag emoji + "+7" in a native `<select>`, feeding into a plain tel input), and a white pill submit button.
- Consent checkbox + "Политика обработки персональных данных" link below the form row.

### 9. Footer
- Two-column outer layout: narrow left column (280px: logo card on light-blue tint, then a live embedded **Yandex Maps widget** iframe below it with a pin at the office coordinates), wide right column (solid blue rounded panel).
- Inside the blue panel: 2 columns ("Контактная информация", "Мы в соцсетях" — the original 3rd "Навигация" column was deliberately removed per client request), then a 3-column legal/bottom row (company + license info, legal links, education-disclosure links) separated by a translucent white hairline.
- Metro-station line uses a small circular "M" badge + station names.

## Interactions & Behavior
- **Header dropdowns**: click-to-toggle (not hover), single-open-at-a-time, click-outside-to-close, chevron rotates on open — implemented once and reused conceptually for all dropdown/flyout UI on the page.
- **Sticky header shrink**: `scroll` listener toggles a `.scrolled` class past 32px scrollY, shrinking vertical padding and adding a border+shadow.
- **Card hover**: program/practicum cards lift (`translateY(-4px)`) and gain a stronger blue-tinted shadow on hover; card photos crop in slightly (scale 1.08 → 1) on hover.
- **FAQ accordion**: click toggles one open item at a time; icon rotates 45°; height animates via measured scrollHeight.
- **Testimonial "читать ещё"**: click toggles a `data-expanded` attribute on the card, switching the clamp CSS off and flipping the button label.
- **Row-height sync JS**: on `load`/`resize`/webfont-ready, measures grid cards by their visual row (grouped by `getBoundingClientRect().top`) and sets equal `min-height` on `.tags`, `.card-title`, `.why-card h3`, `.prac-title`, and `.prac-link p` so buttons and dates align — reimplement with proper CSS Grid row-stretching in the target framework rather than porting the JS verbatim.
- No client-side form validation/submission wiring exists yet in the prototype — the lead form and its submit button are visual only; wire up real submission handling in the target codebase.

## State Management
The prototype is stateless beyond simple UI toggles (dropdown open/closed, accordion open item, testimonial expanded/collapsed, sticky-header class). In a real app these map to:
- `openDropdown: string | null` (header + any future flyouts)
- `openFaqIndex: number | null`
- `expandedTestimonialIds: Set<string>`
- `isHeaderScrolled: boolean`
- Lead form fields (`name`, `email`, `phone`) + submission/loading/error state — not yet designed, needs to be defined with the client/backend.

## Design Tokens

### Colors
- Background (page): `#FAF8F4` (warm cream)
- Alternate section background: `#EEF5FC` (light blue — used only on "Почему учатся у нас" and "Отзывы" for rhythm)
- Primary brand blue: `#0D74D0` — headings, links, primary buttons, icon-tile backgrounds' foreground, lead-form panel fill
- Primary blue hover: `#0B63B4`
- Light blue tint (pills/eyebrow/icon-tile bg): `#E4F0FB`
- Body text: `#1C1B19` (near-black) for headings/emphasis, `#4C463E` for body copy, `#6E655C` for secondary/muted text, `#A79E8F` for tertiary/footer-note text
- Success/enrollment-open text: `#1F8A5B`
- Borders/hairlines: `#E7E0D3` (on cream), `rgba(255,255,255,0.18)` (on blue panels)
- White: `#FFFFFF` (cards, buttons on blue)

### Typography
- Font family: **Inter** (variable font, local file `fonts/Inter-VariableFont_opsz_wght.ttf`, `opsz` axis set to 16)
- H1 (hero): 54px / line-height 1.1 / weight 700, color `#0D74D0`, letter-spacing -0.01em, max-width 330px (forces 2-line wrap)
- H2 (section titles): 38px / 1.14 / 700, color `#0D74D0`, letter-spacing -0.015em
- Card titles: 16–18.5px / 700, color `#1C1B19`
- Body/lead: 15–17px / 1.5–1.55, color `#4C463E`
- Eyebrow labels: 12px / 600, color `#0D74D0`, in a pill

### Spacing / Layout
- Shared content container: **max-width 1200px, centered, 40px side padding** (20px on mobile ≤620px) — every section's content aligns to this, even though the hero photo and footer's blue panel bleed full-width behind/around it.
- Section vertical padding: ~72px top / 96px bottom (48/64 on mobile)
- Grid gaps: 20–24px between cards

### Radii
- Buttons/inputs: 10px
- Cards: 16px
- Large panels (featured/why-us/testimonials/lead-form/footer-panel): 20–28px
- Pills/tags/eyebrow: 100px (fully rounded)

### Shadows
- Card resting: `0 6px 22px rgba(28,27,25,0.05–0.06)`
- Card hover: `0 18px 44px rgba(13,116,208,0.14)` (blue-tinted lift)
- Dropdown panels: `0 24px 60px rgba(28,27,25,0.16–0.25)`

## Assets
All under `images/` in this bundle:
- `logo.png` — АКСП logo (header + footer)
- `hero-classroom.png` — hero background photo
- `ic-online.png`, `ic-practice.png`, `ic-diploma.png` — hero feature/credential icons
- `ic-why-*.png` (6 files) — client-supplied 3D icon illustrations for the "Почему учатся у нас" cards
- `profession-img-1.png`, `practice-img-2.png`, `psychomotor-img-3.jpg`, `group-therapy-img-4.png`, `sexology-img-5.png`, `mak-img-6.jpg` — the 6 program-card photos, all client-supplied
- `founder-maslovsky-2.jpg` — founder photo (practicums section; an earlier `founder-maslovsky.webp` also exists but was superseded)
- `rev-*.webp` (6 files) — real testimonial-author avatar photos
- Yandex Maps: embedded live via `<iframe src="https://yandex.ru/map-widget/v1/...">` in the footer — not a static asset; no custom marker label is supported by this simple embed (client accepted this limitation; a custom pin label would require a Yandex Constructor map created in their account).

## Files
- `Страница.html` — the full page, all 9 sections, inline `<style>` in `<head>`, vanilla JS at the bottom (`<script>` before `</body>`) for dropdowns, accordion, row-alignment, and testimonial expand/collapse.
- `image-slot.js` — a prototyping-only drag-and-drop image placeholder component used during design iteration; **not needed in production** — all slots have already been filled with real images referenced by plain `src` attributes, so this script can be dropped when recreating the page.
- `images/` — all image assets listed above.
