# Sagitta Wallet

Investor-demo-ready vertical slice for a premium crypto wallet experience built
around guided capital decisions.

## Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- Mocked portfolio, onboarding, research, Selun, and reporting data

## Routes

- `/` landing page
- `/start` onboarding entry
- `/onboarding` guided multi-step profile flow
- `/wallet` main wallet dashboard
- `/wallet/selun` guided allocation experience
- `/wallet/research` token research assistant
- `/wallet/reports` monthly report view

## Structure

- `app/` route groups and pages
- `components/` reusable UI and page slices
- `data/` mocked product data
- `lib/` shared helpers
- `types/` demo data contracts

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run build
```
