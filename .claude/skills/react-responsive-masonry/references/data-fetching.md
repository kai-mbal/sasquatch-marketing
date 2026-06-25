---
description: N/A - react-responsive-masonry is a pure layout library with no data fetching in the Sasquatch project.
globs: src/**/*.tsx
---

# React Responsive Masonry and Data

`react-responsive-masonry` is a pure layout component. It renders whatever items you pass as children. Data fetching is handled by the parent component.

## Pattern: Render Static Data in Masonry

```tsx
import { allFeatures } from '@/data/features';
import ResponsiveMasonry, { Masonry } from 'react-responsive-masonry';

export function FeaturesPage() {
  // Data comes from static import — no fetching needed
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
      <Masonry gutter="24px">
        {allFeatures.map(feature => (
          <FeatureCard key={feature.slug} feature={feature} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
```

## Pattern: Filtered Data in Masonry

```tsx
const [activeCategory, setActiveCategory] = useState('all');

const filteredFeatures = allFeatures.filter(f =>
  activeCategory === 'all' || f.category === activeCategory
);

<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
  <Masonry gutter="24px">
    {filteredFeatures.map(f => <FeatureCard key={f.slug} feature={f} />)}
  </Masonry>
</ResponsiveMasonry>
```

Masonry will re-layout automatically when `filteredFeatures` changes.
