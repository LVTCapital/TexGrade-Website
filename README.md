# TexGrade Website

Corporate website for TexGrade GmbH & Co. KG, built with Next.js and prepared for deployment on Fly.io.

The site is available in German and English. German is served from the main routes, while the English version starts at `/en`. The language switch keeps visitors on the corresponding page.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

The project uses Next.js standalone output for a compact Fly.io container image.

## Before public launch

- Confirm the final contact email address.
- Replace the draft legal notice and privacy page with reviewed final text.
- Connect the production domain only after explicit approval.
