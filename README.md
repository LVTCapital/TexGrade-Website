# TexGrade Website

Corporate website for TexGrade GmbH & Co. KG, built with Next.js and deployed as a Docker app on Fly.io (see `fly.toml`).

The site is available in English, German and French. English is the default language at `/`, German starts at `/de` and French at `/fr`. The language switch keeps visitors on the corresponding page. Legacy URLs (`/en/...`, `/impressum`, `/kontakt`, …) redirect permanently to the current ones (see `next.config.ts`).

Production deployments are protected with HTTP Basic Authentication. Set `PREVIEW_USERNAME` and `PREVIEW_PASSWORD` as Fly.io secrets (`fly secrets set PREVIEW_USERNAME=… PREVIEW_PASSWORD=…`). Without both values, production returns a closed `503` response.

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
- Replace the draft legal notice and privacy page with reviewed final text.
- Add a business email address and VAT ID to the legal notice.
- Remove the basic-auth preview protection in `proxy.ts`.
- Connect the production domain only after explicit approval.
