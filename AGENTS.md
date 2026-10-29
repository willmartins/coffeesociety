# Sanity & Next.js Vercel Website: Agent Policy

Version 1.1 · Last updated October 2026

This is Nizatto's policy for AI coding agents (Claude, Cursor, Antigravity and others) working on our websites built with Next.js, Sanity and Vercel. Follow it on every website build unless a project-specific AGENTS.md says otherwise. Project rules win on conflict.

## Language and spelling
- Use British English everywhere: UI copy, comments, docs, commit messages (colour, organise, favour, centre, licence as a noun).
- Code identifiers follow the framework's conventions (e.g. CSS `color`, `backgroundColor`). Do not "correct" API names to British spelling.
- Never use em dashes in user-facing copy. Use commas, colons or full stops instead.

## Copy and content
- Write in plain, confident, human language. Avoid filler and AI clichés ("elevate", "seamless", "unlock", "in today's fast-paced world", "delve").
- Never generate images with AI for our sites. If a placeholder is needed, use a maximum of 3 images from Unsplash, so it is clear they need replacing.

## Preferred stack
- Framework: Next.js (App Router), TypeScript, React Server Components by default.
- CMS: Sanity (Studio embedded or standalone as the project specifies). Use GROQ with typed queries via Sanity TypeGen. Follow the Sanity skill for best practices on Sanity implementation. If the Sanity skill isn't installed, install it before starting any Sanity work, following Sanity's official agent toolkit instructions.
- Hosting: Vercel. Use environment variables for all keys; never hard-code secrets.
- Email: Resend.
- Package manager: pnpm.

## Client-ready Studio
- Clients edit these sites, so the Sanity Studio must be clear to non-technical users.
- Give fields plain-language titles and short descriptions, and add validation where it prevents mistakes.

## Sections and modules
- Keep a registry of every section and module in `MODULES.md` at the repo root. Create it if it doesn't exist.
- Whenever you create, rename or remove a module, update `MODULES.md` in the same change.
- Record each module in a table: name, component file, Sanity schema type, where it is used, and a one-line description.
- Use one name per module across code and Studio (e.g. component `HeroBanner`, schema type `heroBanner`, Studio title "Hero banner").
- When asked to work on a module by name, check `MODULES.md` first. If the name doesn't match an entry, ask rather than guess.

## Caching and content updates
- Content published in Sanity must appear on the live site within seconds, not minutes.
- Use on-demand revalidation (a Sanity webhook calling a Next.js route that runs `revalidateTag` or `revalidatePath`) or Sanity Live. Do not rely on long time-based revalidation alone.
- Tag GROQ fetches by document type so updates only clear the relevant pages.

## Code style
- TypeScript strict mode. No `any` unless justified in a comment.
- Small, focused components. Co-locate files by feature.
- Accessible by default: semantic HTML, alt text, labelled form fields, visible focus states, sufficient colour contrast.
- Mobile first and responsive. Test layouts at 375px and 1440px.
- Optimise images with `next/image` and Sanity's image URL builder.

## SEO and metadata
- Every page gets a title, meta description and Open Graph image via the Next.js Metadata API, ideally driven from Sanity fields.
- Use `en-GB` as the `lang` attribute and locale.
- Follow the Sanity skill for best practices on SEO and AI search optimisation (AIO).

## Safety and security
- Actively flag security and safety risks, and guide the project towards best practice: input validation, rate limiting on forms and API routes, least-privilege API tokens, dependency updates, and secure headers.
- Explain risks briefly in plain language and suggest the fix.

## How to work
- Before large changes, outline the plan in a few bullet points and wait for approval.
- Make the smallest change that solves the problem. Do not refactor unrelated code.
- When unsure about a requirement, ask rather than guess.
- After changes, run the type check and linter and fix any errors you introduced.
- Summarise what changed at the end, briefly.

## Never
- Commit secrets, `.env` files or API keys.
- Delete content, schemas or data in Sanity without explicit confirmation.
- Push to production or main without being asked.
