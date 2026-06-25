---
description: Documents TypeScript patterns including props interfaces, type imports, and generics used in the Sasquatch project.
globs: src/**/*.tsx, src/**/*.ts
---

# TypeScript Patterns

## Props Interfaces

Always name props interfaces `[ComponentName]Props`:

```ts
interface NavigationProps {
  transparent?: boolean;
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
  isHighlighted?: boolean;
}
```

## Type Imports

Always use `type` keyword for type-only imports:

```ts
import type { Feature } from '@/types';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
```

## Generics

Use generics for reusable utilities and hooks:

```ts
function groupBy<T, K extends string>(items: T[], key: (item: T) => K): Record<K, T[]> {
  return items.reduce((acc, item) => {
    const group = key(item);
    return { ...acc, [group]: [...(acc[group] ?? []), item] };
  }, {} as Record<K, T[]>);
}

// Usage
const byCategory = groupBy(allFeatures, f => f.category);
```

## Optional Props with Defaults

```ts
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({ variant = 'primary', size = 'md', children }: ButtonProps) { ... }
```

## Union Types for Variants

```ts
type FeatureCategory = 'permits' | 'inspections' | 'jobs' | 'reporting';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
```

## Discriminated Unions

```ts
type AlertState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Feature[] }
  | { status: 'error'; message: string };
```
