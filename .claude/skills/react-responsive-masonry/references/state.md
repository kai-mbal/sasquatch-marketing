---
description: Documents dynamic item addition and state-driven masonry updates in the Sasquatch project.
globs: src/**/*.tsx
---

# Masonry State Patterns

## Dynamic Item Addition

Masonry re-renders automatically when the items array changes:

```tsx
const [items, setItems] = useState<Feature[]>(allFeatures.slice(0, 6));
const [hasMore, setHasMore] = useState(true);

const loadMore = () => {
  const nextBatch = allFeatures.slice(items.length, items.length + 6);
  setItems(prev => [...prev, ...nextBatch]);
  if (items.length + 6 >= allFeatures.length) setHasMore(false);
};

<>
  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
    <Masonry gutter="24px">
      {items.map(f => <FeatureCard key={f.slug} feature={f} />)}
    </Masonry>
  </ResponsiveMasonry>

  {hasMore && (
    <button onClick={loadMore} className="mt-8 mx-auto block">
      Load More
    </button>
  )}
</>
```

## Filter State

```tsx
const [category, setCategory] = useState<string>('all');

const filtered = useMemo(
  () => allFeatures.filter(f => category === 'all' || f.category === category),
  [category]
);

<>
  <CategoryFilter active={category} onChange={setCategory} />
  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
    <Masonry gutter="24px">
      {filtered.map(f => <FeatureCard key={f.slug} feature={f} />)}
    </Masonry>
  </ResponsiveMasonry>
</>
```
