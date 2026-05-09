# melwongdance.org

Static memorial landing page for the **Mel Wong Dance Foundation Inc** — a 501(c)(3) nonprofit (EIN 13-2879775) honoring the legacy of choreographer, dancer, and visual artist Mel Wong (1938–2003).

## Tech

- Vanilla HTML, semantic + accessible
- Tailwind CSS (CLI build)
- Hosted on GitHub Pages, custom domain `melwongdance.org`

## Develop

```sh
npm install
npm run dev      # watches src/input.css → assets/style.css
```

Open `index.html` directly or serve with `npx serve .`.

## Build

```sh
npm run build    # minified assets/style.css
```

## Deploy

Push to `main`. GitHub Pages serves the repo root. The `CNAME` file binds the apex domain. The `.nojekyll` file disables Jekyll processing.

## Content & attribution

All biographical content is compiled from public sources (UCSC obituaries, Westbeth, Wendy Perron's tribute, the foundation's Form 990). See `assets/images/credits.md` for image attributions.

## License

Site code: MIT. Content: CC BY 4.0 with required attribution to original sources.
