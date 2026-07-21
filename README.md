# Miller Construction & Consulting Group — Site

Single-page landing site with anchor-nav sections, built with React + Vite +
Tailwind, deployed to GitHub Pages under the custom domain `millerccg.com`.

## Local development

```bash
npm install
npm run dev
```

## Adding the real logo

Drop the logo file into `public/` (e.g. `public/logo.png`) and swap the text
wordmark in `src/components/Header.jsx` and `src/components/Footer.jsx` for
an `<img>` tag pointing at `/logo.png`.

## Contact form

The form in `src/components/Contact.jsx` posts to Formspree by default:

1. Create a free form at https://formspree.io
2. Copy your form's endpoint URL
3. Paste it into the `FORM_ENDPOINT` constant at the top of `Contact.jsx`

Any other form-endpoint service (Basin, Getform, etc.) works the same way —
just swap the URL.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings → **Pages**, set the source to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys
   automatically on every push to `main`.

## Connecting the custom domain (millerccg.com)

The `public/CNAME` file already contains `millerccg.com` — it gets copied into
the build output automatically, which is what tells GitHub Pages which
domain to serve.

At your domain registrar, add these DNS records:

**Apex domain (millerccg.com) — A records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**www subdomain — CNAME record:**
```
www → <your-github-username>.github.io
```

Then in the repo's **Settings → Pages**, enter `millerccg.com` as the custom
domain and check **Enforce HTTPS** once GitHub provisions the certificate
(can take up to 24 hours).

## Project structure

```
src/
├── components/
│   ├── Header.jsx      light nav bar, scroll shadow, mobile menu
│   ├── Hero.jsx         full-height crossfade image slides
│   ├── Services.jsx     3-up image cards (Construction / Consulting / Fire Restoration)
│   ├── Projects.jsx     case-study grid with hover spec overlay
│   ├── About.jsx        photo + animated stat counters
│   ├── FAQ.jsx          accordion
│   ├── Contact.jsx      info column + form (Formspree)
│   ├── Footer.jsx
│   └── FloatingCTA.jsx  floating "Request Consultation" button
├── App.jsx
├── main.jsx
└── index.css
```

## Photography

All hero, service, project, and about-section images are self-hosted in
`public/images/` (no dependency on Base44's CDN). The logo lives at
`public/logo.png`.
