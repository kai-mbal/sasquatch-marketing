---
description: Documents React Router loader patterns available in v7, though not currently used in the Sasquatch project.
globs: src/app/routes.tsx, src/**/*.tsx
---

# React Router Data Fetching

## Current State

The Sasquatch project does not currently use React Router loaders. All data comes from static imports (`src/app/data/features.ts`).

## Loader Pattern (Available in RR7)

If async data fetching is added, React Router 7 supports loaders:

```tsx
// In route definition
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/features/:slug',
    element: <FeatureDetailPage />,
    loader: async ({ params }) => {
      const feature = await fetchFeature(params.slug);
      if (!feature) throw new Response('Not Found', { status: 404 });
      return feature;
    },
  },
]);
```

```tsx
// In component
import { useLoaderData } from 'react-router';
import type { Feature } from '@/types';

export function FeatureDetailPage() {
  const feature = useLoaderData() as Feature;
  return <div>{feature.title}</div>;
}
```

## Current Alternative

Instead of loaders, data is derived from static arrays:

```tsx
const { slug } = useParams<{ slug: string }>();
const feature = allFeatures.find(f => f.slug === slug);
if (!feature) return <Navigate to="/features" />;
```
