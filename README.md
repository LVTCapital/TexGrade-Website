# TexGrade Website

Corporate website for TexGrade GmbH & Co. KG, built with Next.js and deployed as a Docker web service on Render.

The site is available in English, German and French. English is the default language at `/`, German starts at `/de` and French at `/fr`. The language switch keeps visitors on the corresponding page.

Production deployments are protected with HTTP Basic Authentication. Set the runtime environment variables `PREVIEW_USERNAME` and `PREVIEW_PASSWORD` in Render. Without both values, production returns a closed `503` response.

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

The project uses Next.js standalone output for a compact Docker container image.

## Before public launch

- Confirm the final contact email address.
- Replace the temporary visual elements with the final company photography.
- Replace the draft legal notice and privacy page with reviewed final text.
- Connect the production domain only after explicit approval.
