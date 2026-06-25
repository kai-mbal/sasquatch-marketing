---
description: Documents the module system, path aliases, and import ordering conventions used in the Sasquatch project.
globs: src/**/*.tsx, src/**/*.ts, tsconfig.json, vite.config.ts
---

# TypeScript Modules

## Path Alias: @/

The `@/` alias maps to `src/`. Configured in both `tsconfig.json` and `vite.config.ts`:

```ts
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}

// vite.config.ts
resolve: {
  alias: { '@': path.resolve(__dirname, './src') }
}
```

Usage:
```ts
import { Navigation } from '@/components/Navigation';
import { allFeatures } from '@/data/features';
import { Button } from '@/components/ui/button';
```

## Import Order

Follow this order strictly:

```ts
// 1. React and external packages
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { CheckCircle2 } from 'lucide-react';

// 2. Internal absolute imports using @/ alias
import { Navigation } from '@/components/Navigation';
import { allFeatures } from '@/data/features';

// 3. Relative imports
import { Button } from '../ui/button';
import { Card } from './Card';

// 4. Type imports (must use 'type' keyword)
import type { Feature } from '@/types';
import type { FeatureCardProps } from './FeatureCard';

// 5. Styles (if separate CSS files)
import './styles.css';
```

## Module Exports

Use named exports throughout — no default exports for components:

```ts
// Good
export function FeatureCard() { ... }
export const allFeatures = [...];

// Avoid
export default function FeatureCard() { ... }
```
