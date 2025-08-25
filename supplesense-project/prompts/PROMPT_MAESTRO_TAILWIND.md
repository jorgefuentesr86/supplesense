You are a senior full-stack engineer in Cursor.
Refactor this project "SuppleSense" to use Tailwind + shadcn/ui while preserving all current routes and logic.

Tasks:
1) Install Tailwind + postcss + autoprefixer + shadcn/ui.
2) Configure Tailwind for App Router (content paths).
3) Add a basic theme with neutral palette.
4) Replace inline styles with Tailwind in /app/layout.tsx, /app/page.tsx, /app/onboarding/page.tsx, /app/results/page.tsx, /app/plan/page.tsx, /app/checkin/page.tsx.
5) Extract UI elements (cards, stepper, badges, alerts) as components in /components.
6) Keep Spanish copy; do not change flows or routes.
7) Keep all API routes unchanged.
8) Ensure mobile-first responsive.

Acceptance criteria:
- Project builds and runs with `npm run dev`.
- No route broken.
- Visual consistency via Tailwind + shadcn/ui.
