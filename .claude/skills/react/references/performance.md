---
description: Documents performance optimization patterns including memoization and lazy loading used in the Sasquatch project.
globs: src/**/*.tsx, src/app/routes.tsx
---

# React Performance

## useMemo for Expensive Computations

```tsx
import { useMemo } from 'react';
import { allFeatures } from '@/data/features';

const filteredFeatures = useMemo(
  () => allFeatures.filter(f => f.category === activeCategory),
  [activeCategory]
);
```

## useCallback for Stable Function References

```tsx
import { useCallback } from 'react';

const handleFeatureSelect = useCallback((slug: string) => {
  navigate(`/features/${slug}`);
}, [navigate]);
```

Pass to memoized children to avoid re-renders.

## React.memo for Pure Components

```tsx
import { memo } from 'react';

export const FeatureCard = memo(function FeatureCard({ feature }: FeatureCardProps) {
  return <div>...</div>;
});
```

## Lazy Loading Routes

Use `React.lazy` and `Suspense` for code splitting routes:

```tsx
import { lazy, Suspense } from 'react';

const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));

// In router:
<Route
  path="/features"
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <FeaturesPage />
    </Suspense>
  }
/>
```

## When to Optimize

Only add `useMemo`/`useCallback`/`memo` when:
- Measured performance issue exists
- List has 50+ items being filtered/sorted
- Component renders frequently due to parent updates
