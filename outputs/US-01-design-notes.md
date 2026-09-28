# US-01 Home and navigation — design review

## Recommended direction

Keep the existing midnight navy `#202940`, deep panel `#171f33`, vivid pink `#E91E8C`, all-caps editorial name, pulsing availability marker, and Karem’s circular portrait. Recompose the first screen into a legible identity-first layout: compact header, a two-line name, clear frontend-to-full-stack positioning, then a portrait/profile card and two usable actions. Current Home already provides the right personality; the layout needs responsive rules and clearer content hierarchy.

## View the mockups

Open each file separately in a browser; the 375 px and 320 px mockups fit phone widths, while the desktop mockup is 1280 px wide.

- English mobile: `us01-home-mobile-en.html`
- Spanish mobile: `us01-home-mobile-es.html`
- English desktop: `us01-home-desktop-en.html`
- Spanish desktop: `us01-home-desktop-es.html`

## Annotations and implementation notes

- **Navigation:** KA mark on left, About / Projects / Contact on right. Mobile keeps the three text links inline with 9–13 px gaps and >= 32 px vertical touch area; section links point to existing IDs. Desktop uses 30 px gaps and 12 px uppercase labels. Use visible hover and `:focus-visible` underline/pink treatment; keyboard order follows visual order.
- **Language:** compact ENG / ESP pill, 28–32 px per segment plus padding. Treat each segment as a real button; `aria-pressed` or radio semantics expose the active language. Pink fill marks the selected language. Native focus ring must remain visible. Both localized mockups show translated status, labels, and CTAs.
- **Name:** 375 px uses 60–65 px heavy type, tight leading (.85), pink “Aranda” offset by about 18–20 px; 320 px caps at 56 px and reduces offset to about 18 px. Desktop scales to roughly 96 px. Remove fixed `ml-70`; use a relative/em offset. Name stays within viewport at 320 px.
- **Photo:** reuse `src/assets/photos/foto-perfil.jpeg`; 146 px circle mobile / 188 px desktop, cover crop centered slightly above midline, 3–4 px pink border and subtle halo. Center with normal layout; remove `overflow-x-scroll`. Keep descriptive alt text.
- **Profile text:** use the concise accurate copy shown in both language variants. “React, JavaScript, and TypeScript” are core strengths; backend, networking, and cybersecurity are described as growing/current study. 13 px / 1.55 mobile, 15 px / 1.62 desktop; left aligned for scanning. No justified text.
- **Buttons:** actions share available width with a 9–12 px gap; equal flex columns, 48–50 px high. At 375 px each is about 160 px; at 320 px each is about 135 px. Allow labels to wrap only if needed; keep 9 px minimum or abbreviate only with approval. First CTA anchors to Projects; CV stays a real download link. Hover lifts/fills subtly; focus gets a 2 px high-contrast outline; active state removes lift.
- **Spacing:** 20–22 px mobile side inset (18 px at 320), 14–16 px between card elements, 28 px from status to name. Desktop 44–52 px gutters and roughly 48 px card gaps. Use `min-height: 100svh` but allow vertical growth; do not force children into a fixed viewport.
- **Responsive composition:** desktop at >= 1024 px uses a 7/5 split, name on left and portrait/copy/actions on right; metadata appears as one low-contrast horizontal band. Below 640 px stack name/status first and portrait/profile/actions below, hide secondary availability metadata if space is constrained, and retain a compact pink skills ribbon with only three core skills. At 320 px tighten gutters/type and buttons; no horizontal scrolling, clipped name, or side-by-side metadata overflow.
- **Motion/accessibility:** preserve a restrained availability pulse but honor `prefers-reduced-motion`; interactive transitions should be short and never communicate selection by color alone. Use semantic header/nav/main/section, a single `h1`, button labels that state purpose, and strong text contrast.

## Decisions for Karem

1. **Language control:** keep the compact ENG / ESP pill in the top header (recommended), or move it beside the profile below navigation if she wants the nav to have more breathing room on 320 px.
2. **CV action:** keep “Download CV” as the second hero CTA (as shown) or prioritize “Contact” there. Confirm which CV file is current and available in both languages before implementation.
3. **Availability metadata:** show “Full-time · Freelance” in the mobile identity strip (recommended) or omit it on small screens and keep the “Open to work” badge only.

No application code was changed. These are visual proposals for review before Developer implementation.
