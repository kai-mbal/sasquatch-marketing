---
description: Documents column count optimization and performance considerations for react-responsive-masonry in the Sasquatch project.
globs: src/**/*.tsx
---

# Masonry Performance

## Column Count Optimization

Choose breakpoints based on your card's minimum readable width:

```tsx
// Feature cards (min ~280px) → 3 columns max on desktop
<ResponsiveMasonry columnsCountBreakPoints={{
  350: 1,   // Very small mobile
  640: 2,   // Mobile landscape / tablet
  1024: 3,  // Desktop
}}>

// Jurisdiction chips (min ~140px) → 4 columns on wide screens
<ResponsiveMasonry columnsCountBreakPoints={{
  350: 2,
  640: 3,
  1024: 4,
}}>
```

## Memoize Items

If items are derived from state, memoize to avoid unnecessary masonry re-layouts:

```tsx
const filteredFeatures = useMemo(
  () => allFeatures.filter(f => f.category === activeCategory),
  [activeCategory]
);
```

## Stable Keys

Always use stable, unique keys to help React minimize DOM changes:

```tsx
// Good — slug is stable and unique
<FeatureCard key={feature.slug} feature={feature} />

// Bad — index shifts on filter, causing full re-render
<FeatureCard key={i} feature={feature} />
```

## Avoid Masonry for Uniform Height Cards

If all cards are the same height, use CSS grid — it's simpler and more performant:

```tsx
// Uniform height → CSS grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map(f => <FeatureCard key={f.slug} feature={f} />)}
</div>

// Variable height → Masonry
<ResponsiveMasonry ...>
  <Masonry gutter="24px">
    {features.map(f => <FeatureCard key={f.slug} feature={f} />)}
  </Masonry>
</ResponsiveMasonry>
```
