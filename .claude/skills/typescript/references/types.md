---
description: Documents core TypeScript types used in the Sasquatch project, including Feature and common utility types.
globs: src/app/data/features.ts, src/**/*.ts
---

# TypeScript Types

## Feature Type

The primary data type in this project, defined in `src/app/data/features.ts`:

```ts
import type { LucideIcon } from 'lucide-react';

interface Feature {
  slug: string;
  title: string;
  description: string;
  category: FeatureCategory;
  icon: LucideIcon;
  details?: string;
  benefits?: string[];
}

type FeatureCategory = 'permits' | 'inspections' | 'jobs' | 'reporting' | 'integrations';
```

## Common Utility Types

```ts
// Make all props optional
type PartialFeature = Partial<Feature>;

// Pick specific keys
type FeatureSummary = Pick<Feature, 'slug' | 'title' | 'description'>;

// Omit keys
type FeatureWithoutIcon = Omit<Feature, 'icon'>;

// Record for lookups
type FeatureMap = Record<string, Feature>;

// Array of specific type
type FeatureList = Feature[];
```

## ReactNode for Children

```ts
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}
```

## Event Handler Types

```ts
import type { MouseEvent, ChangeEvent } from 'react';

const handleClick = (e: MouseEvent<HTMLButtonElement>) => { ... };
const handleChange = (e: ChangeEvent<HTMLInputElement>) => { ... };
```

## Lucide Icon Type

```ts
import type { LucideIcon } from 'lucide-react';

// Use as prop type — then render as component
interface Props { icon: LucideIcon }
function Comp({ icon: Icon }: Props) {
  return <Icon className="w-5 h-5" />;
}
```
