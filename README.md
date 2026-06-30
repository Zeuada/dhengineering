# DH Engineering — Website

Production-ready marketing website for **DH Engineering**, an ISO 9001:2015 certified
aluminium die-casting & machining manufacturer in Kagal Five Star MIDC, Kolhapur,
Maharashtra.

Built with **Astro** (static output), real photography extracted from the company profile,
**formly.email** for the quote form, and deployed to **Cloudflare Pages**.

---

## 1. Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server  → http://localhost:4321
npm run build      # production build   → ./dist
npm run preview    # preview the built ./dist locally
```

Requires Node 18.20+ / 20+.

---

## 2. Tech & hosting rationale

| Choice | Why |
|---|---|
| **Astro (static)** | Ships near-zero JavaScript → fast loads & strong Core Web Vitals. Components (`Header`, `Footer`, `SpecTable`, `CTASection`) remove duplication across 8 pages while output stays 100% static HTML/CSS — cheap and reliable to host. |
| **`astro:assets` + sharp** | Build-time responsive **WebP** generation from the source JPEGs in `src/assets/images`. |
| **`@astrojs/sitemap`** | Auto-generates `sitemap-index.xml` / `sitemap-0.xml`. |
| **Self-hosted fonts (`@fontsource`)** | Space Grotesk + Inter bundled locally — no Google CDN (faster, privacy-clean). |
| **formly.email** | Form delivery to email with file uploads, no backend to build/secure. |
| **Cloudflare Pages** | Free global CDN + automatic SSL + custom domains. Static `dist/`, no adapter. |

Content policy: the site states **only verified facts** (ISO certificate, machine specs,
real part photos). It deliberately omits unconfirmed claims (named clients, casting weight
range, "years of experience", export markets, IATF 16949). These slot into existing
sections once confirmed — see §6.

---

## 3. Editing content

Almost everything lives in **`src/data/site.ts`** — the single source of truth: company
contact details (NAP), GST, phone/WhatsApp numbers, stats, the HPDC & machine-shop spec
tables, quality instruments, ISO certificate fields, products, industries and alloy grades.
Edit there and every page updates.

**Swapping / adding photos**
1. Drop optimized JPEGs into `src/assets/images/` (product photos use the `product-*` prefix
   so they're auto-picked up by the gallery and teasers).
2. Reference machine/hero images by importing them in the relevant page, or add product
   entries to `products` / `gallery` in `src/data/site.ts`.
3. Astro converts them to responsive WebP automatically at build.

---

## 4. Before you go live — required setup

These use clearly-marked placeholders in the code:

1. **formly.email access key** — get a free key by entering the company email at
   <https://formly.email>. Paste it into `formAccessKey` in `src/data/site.ts`
   (replace `REPLACE_WITH_YOUR_FORMLY_ACCESS_KEY`). Until then the form shows a
   "not configured" notice instead of submitting.
2. **Production domain** — set the real domain in **`astro.config.mjs`** (`SITE`) and in
   **`public/robots.txt`** (the `Sitemap:` line). Used for canonical tags, sitemap and
   Open Graph URLs. Currently `https://www.dhengineering.in`.
3. **ISO certificate PDF** *(optional)* — drop the scanned certificate into
   `public/downloads/` and flip the second item in `src/pages/downloads.astro` to
   `available: true` with its `href`.
4. **Alloy grades** — confirm the actual aluminium grades you cast and update
   `materials.grades` in `src/data/site.ts` (currently `ADC12`, `LM-series (on request)`).

The Google Map on the Contact page uses a **keyless** embed (no API key needed); it
resolves from the address string in `site.ts`.

---

## 5. Deploy to Cloudflare Pages

**Option A — Git (recommended):** push this repo to GitHub/GitLab, then in the Cloudflare
dashboard → **Workers & Pages → Create → Pages → Connect to Git**:

- **Framework preset:** Astro
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- (Node version) set `NODE_VERSION = 20` in environment variables if needed.

Then **Custom domains → Set up a domain** and point your domain's DNS at Cloudflare.

**Option B — Direct upload (Wrangler):**

```bash
npm run build
npx wrangler pages deploy dist --project-name dh-engineering
```

Any other static host (Netlify, GitHub Pages, S3/CloudFront) also works — just serve `dist/`.

---

## 6. SEO & content rationale

- **Per-page meta** titles + descriptions, canonical URLs, Open Graph + Twitter cards
  (default share image `public/og-default.jpg`).
- **Structured data** (`src/components/JsonLd.astro`): `Organization` + `LocalBusiness` +
  `Manufacturer` on every page (address, geo, phones, GST, ISO certificate as a credential);
  `ItemList`/`Product` on Products; `BreadcrumbList` on inner pages.
- **Semantic HTML**, one `<h1>` per page, descriptive `alt` text on every image,
  skip-link, keyboard-accessible nav and lightbox, WCAG-AA contrast.
- `sitemap-index.xml` + `robots.txt` generated/served.

**Target keywords:** *aluminium die casting Kolhapur*, *HPDC manufacturer Maharashtra*,
*aluminium machined components*, *ISO 9001 die casting company*, *Kagal MIDC manufacturer*.

**Positioning note (from market research):** competitors in the Kolhapur/Maharashtra belt
(Akshay Castings, Bespak Engineers, etc.) are all 17–50 years old and lead with tenure.
DH Engineering (founded 2026) instead leads on what it genuinely has and they rarely
combine: **current-generation equipment, ISO certification from day one, fully integrated
casting→machining under one roof, in-house tool resharpening + calibrated metrology, and
responsive lead times.**

---

## 7. Recommended go-to-market (beyond the website)

In this niche, **B2B directories are the #1 discovery channel** and often outrank company
websites. To capture that demand, also create/optimize:

- **IndiaMART**, **Justdial** and **TradeIndia** seller listings.
- A **Google Business Profile** for the Kagal plant (enables Google Maps + local pack).

Keep the **name, address and phone identical** to this site (and to `site.ts`) across every
listing — consistent NAP is the single biggest local-SEO ranking factor.

---

## 8. Project structure

```
public/                 static assets (icon, og image, robots.txt, downloads/)
src/
  assets/images/        source photos (→ optimized to WebP at build)
  components/            Header, Footer, Hero bits, SpecTable, ContactForm, etc.
  data/site.ts           ← single source of truth for all content
  layouts/BaseLayout.astro  <head>/SEO/schema + Header/Footer shell
  pages/                 index, about, infrastructure, quality, products,
                         contact, downloads, 404
  styles/global.css      design tokens + base styles
astro.config.mjs         site URL, static output, sitemap
```
