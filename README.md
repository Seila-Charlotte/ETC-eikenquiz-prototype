# ことばクエスト

Festival English quiz built with React, TypeScript, and Vite. The 54 remaining original seed questions are in `src/data/questions.ts`; the Grade 5 vocabulary multiple-choice pool is reserved for the finalized replacement questions. Add or disable questions there without changing game logic.

## Run locally

Install dependencies with `pnpm install`, then run `pnpm dev`. Run the focused checks with `pnpm test`, `pnpm validate:seed`, and `pnpm build`.

## Shared daily leaderboard

The game works locally without a backend, using browser storage for preview. Before sharing the festival build across devices:

1. Create a Supabase project.
2. Run `supabase/schema.sql` once in its SQL editor on this new project. The script creates the leaderboard tables and submission function.
3. Copy `.env.example` to `.env.local` and set the project URL and anon key.
4. Deploy the Vite app with `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` configured.

The publishable key is intended for browser apps; database writes go through the score-validating RPC, and direct table writes are disabled. Results are timestamped by the database and filtered using Japan Standard Time.

## Publish with GitHub Pages

The `Deploy to GitHub Pages` workflow builds this Vite app whenever `main` is updated. In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source. In **Settings → Secrets and variables → Actions → Variables**, add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` so the deployed build can use the shared leaderboard. These are browser-facing Supabase settings; do not add a service-role key.

The workflow publishes the site at `https://seila-charlotte.github.io/ETC-eikenquiz-prototype/`. GitHub Pages sites are public. With GitHub Free, the repository must also be public; eligible paid plans can publish a public site from a private repository.

## Question bank checks

`pnpm validate:seed` requires at least two active questions in each level/mode pool, except the intentionally empty Grade 5 vocabulary multiple-choice pool reserved for its finalized replacements. `pnpm validate:full` checks the eventual target of exactly 45 active questions in every pool.
