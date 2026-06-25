---
description: Covers React 18 patterns used in the Sasquatch marketing site, including functional components, hooks, and state management conventions.
globs: src/**/*.tsx, src/**/*.ts
---

# React Skill

React 18.3.1 is used as the UI library for all components and pages in this project.

## Key Concepts in This Project

- All components are **functional components** with hooks
- No class components are used
- State is managed locally with `useState` or lifted to parent components
- Side effects use `useEffect`
- Performance optimizations use `useMemo` and `useCallback`

## Reference Files

- [hooks.md](references/hooks.md) - useState, useEffect, useCallback, useMemo, custom hooks
- [components.md](references/components.md) - Functional component patterns, props interfaces
- [data-fetching.md](references/data-fetching.md) - Static data patterns (no async fetching)
- [state.md](references/state.md) - Local state, lifting state, boolean naming
- [forms.md](references/forms.md) - Form handling with react-hook-form
- [performance.md](references/performance.md) - Memoization, lazy loading

## Quick Example

```tsx
import { useState } from 'react';
import type { Feature } from '@/types';

interface FeatureCardProps {
  feature: Feature;
  isHighlighted?: boolean;
}

export function FeatureCard({ feature, isHighlighted = false }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`rounded-lg p-6 ${isHighlighted ? 'bg-[#E6F4EC]' : 'bg-white'}`}>
      <h3 style={{ fontFamily: 'var(--font-display)' }}>{feature.title}</h3>
      <button onClick={() => setIsExpanded(prev => !prev)}>
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
      {isExpanded && <p>{feature.description}</p>}
    </div>
  );
}
```

## Conventions

- Component files: PascalCase (`FeatureCard.tsx`)
- Hooks files: camelCase with `use` prefix (`use-mobile.ts`)
- Props interfaces: `[ComponentName]Props`
- Boolean state: prefix with `is`, `has`, `should`
