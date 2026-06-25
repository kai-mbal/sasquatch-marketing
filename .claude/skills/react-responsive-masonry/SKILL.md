---
description: Covers react-responsive-masonry usage in the Sasquatch project for Pinterest-style grid layouts.
globs: src/**/*.tsx
---

# React Responsive Masonry Skill

`react-responsive-masonry` provides responsive masonry (Pinterest-style) grid layouts.

## Reference Files

- [hooks.md](references/hooks.md) - N/A
- [components.md](references/components.md) - ResponsiveMasonry, Masonry components
- [data-fetching.md](references/data-fetching.md) - N/A
- [state.md](references/state.md) - Dynamic item addition
- [forms.md](references/forms.md) - N/A
- [performance.md](references/performance.md) - Column count optimization

## Basic Usage

```tsx
import ResponsiveMasonry, { Masonry } from 'react-responsive-masonry';

<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1200: 3 }}>
  <Masonry gutter="24px">
    {features.map(f => (
      <FeatureCard key={f.slug} feature={f} />
    ))}
  </Masonry>
</ResponsiveMasonry>
```

## When to Use

Use masonry layout when cards have variable heights (different description lengths, images). Use regular CSS grid when cards have uniform height.
