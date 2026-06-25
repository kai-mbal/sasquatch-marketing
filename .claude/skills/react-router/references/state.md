---
description: Documents URL state and search params patterns available in React Router 7 for the Sasquatch project.
globs: src/**/*.tsx
---

# React Router URL State

## useSearchParams

Manage query string state — useful for filters and pagination:

```tsx
import { useSearchParams } from 'react-router';

export function FeaturesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';

  const handleCategoryChange = (category: string) => {
    setSearchParams({ category });
  };

  const filteredFeatures = allFeatures.filter(f =>
    activeCategory === 'all' || f.category === activeCategory
  );

  return (
    <>
      <CategoryFilter active={activeCategory} onChange={handleCategoryChange} />
      <FeatureGrid features={filteredFeatures} />
    </>
  );
}
```

URL becomes: `/features?category=permits`

## Navigation State

Pass state through navigation (not in URL):

```tsx
navigate('/contact', { state: { from: '/pricing' } });

// In ContactPage
const location = useLocation();
const fromPricing = location.state?.from === '/pricing';
```

## Reading Multiple Params

```tsx
const page = Number(searchParams.get('page') ?? '1');
const query = searchParams.get('q') ?? '';

// Update multiple params
setSearchParams({ page: String(page + 1), q: query });
```
