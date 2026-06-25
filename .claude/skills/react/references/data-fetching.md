---
description: Documents data patterns in the Sasquatch project. Currently all data is static; no async fetching is used.
globs: src/app/data/*.ts, src/**/*.tsx
---

# Data Fetching

## Current Pattern: Static Data

All data in this project is static and imported directly from `src/app/data/`:

```ts
// src/app/data/features.ts
export const allFeatures: Feature[] = [
  {
    slug: 'permit-tracking',
    title: 'Permit Tracking',
    description: 'Track permits across all your jobs in one place.',
    category: 'permits',
    icon: FileText,
  },
  // ...30+ features
];
```

## Consuming Static Data

```tsx
import { allFeatures } from '@/data/features';

export function FeaturesPage() {
  const permitFeatures = allFeatures.filter(f => f.category === 'permits');
  return <FeatureList features={permitFeatures} />;
}
```

## Future Async Pattern (When Needed)

If async fetching is added, use React Router loaders (see `react-router/references/data-fetching.md`) or standard `useEffect`:

```tsx
const [features, setFeatures] = useState<Feature[]>([]);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  async function load() {
    const data = await fetchFeatures();
    setFeatures(data);
    setIsLoading(false);
  }
  load();
}, []);
```

No external API calls, SWR, React Query, or data libraries are currently in use.
