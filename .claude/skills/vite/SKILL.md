---
description: Covers Vite 6 configuration and build tooling for the Sasquatch project, including plugins, path aliases, and asset handling.
globs: vite.config.ts, index.html, tsconfig.json
---

# Vite Skill

Vite 6.3.5 is the build tool and development server for this project.

## Reference Files

- [unit.md](references/unit.md) - Vitest unit testing setup
- [integration.md](references/integration.md) - Integration testing patterns
- [mocking.md](references/mocking.md) - Module mocking in Vitest
- [fixtures.md](references/fixtures.md) - Test fixtures and factories

## Current Config (vite.config.ts)

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Required — do not remove
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

## Key Points

- `@vitejs/plugin-react` — enables React JSX transform and HMR
- `@tailwindcss/vite` — required Tailwind v4 integration (do not remove)
- `@` alias — maps to `src/` directory
- SVG and CSV files supported as raw imports via `?raw` query
- Dev server runs on `http://localhost:5173`
- Production build outputs to `dist/`

## Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |
