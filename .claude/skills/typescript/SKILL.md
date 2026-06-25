---
description: Covers TypeScript patterns and conventions used in the Sasquatch marketing site, including type safety, interfaces, and module aliases.
globs: src/**/*.tsx, src/**/*.ts, tsconfig.json
---

# TypeScript Skill

TypeScript is used throughout for type-safe components, data definitions, and utilities.

## Reference Files

- [patterns.md](references/patterns.md) - Props interfaces, type keyword imports, generics
- [types.md](references/types.md) - Feature type, common utility types
- [modules.md](references/modules.md) - `@/` path alias, import ordering
- [errors.md](references/errors.md) - Common TS errors and fixes

## Key Conventions

```ts
// Props interfaces named [ComponentName]Props
interface FeatureCardProps { ... }

// Always use 'type' keyword for type-only imports
import type { Feature } from '@/types';
import type { LucideIcon } from 'lucide-react';

// Use @/ alias for src/ imports
import { allFeatures } from '@/data/features';
import { Button } from '@/components/ui/button';
```

## tsconfig Path Alias

The `@/` alias maps to `src/`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Strict Mode

The project uses TypeScript strict mode. Always type:
- Component props interfaces
- Return types for utility functions
- Generic type parameters when inference fails
