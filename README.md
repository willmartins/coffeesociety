# Coffee Society

A Next.js replica of [coffee-society.co.uk](https://coffee-society.co.uk), with Sanity as the CMS and an embedded Studio at `/studio`.

The site builds from the checked-in seed when `SANITY_API_READ_TOKEN` is unset, or when the published dataset has no documents. After the import, published content replaces the seed.

## Run locally

```bash
pnpm install
pnpm dev
```

## Environment

Copy `.env.example` to `.env.local`. Do not commit `.env.local`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `5zo2zgif` |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `SANITY_API_READ_TOKEN` | Server read token for published content. Least privilege: Viewer. |
| `SANITY_API_WRITE_TOKEN` | Used only by `pnpm seed:import`. Editor or a token that can create documents and assets. Not read by the website. |
| `SANITY_REVALIDATE_SECRET` | Shared secret for the Sanity webhook. |

Set the same public variables and the read token and revalidate secret on the Vercel preview. Do not put the write token on the website deployment.

## Import

```bash
SANITY_API_WRITE_TOKEN=... pnpm seed:import
```

The script reads `sanity/seed/seed.ndjson`, uploads any image that already lives under `public/`, and creates or replaces documents. Video files are not included. `beforeVideoUrl` and `afterVideoUrl` are empty.

## Content updates

Create a Sanity webhook that POSTs to `https://<preview-host>/api/revalidate` with the GROQ projection filter left open, and sign it with `SANITY_REVALIDATE_SECRET`. The route checks the signature and calls `revalidateTag` with the document `_type`, so only that type is refreshed.

GROQ queries are tagged by document type: `siteSettings`, `navigation`, `footer`, `homePage`, `page`, `video`, `videoCategory`, `trainingOption`, `courseType`, `teamTrack`.

## Checks

```bash
pnpm typegen
pnpm typecheck
pnpm lint
pnpm build
```
