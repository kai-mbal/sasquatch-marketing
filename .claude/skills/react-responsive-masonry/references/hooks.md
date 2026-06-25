---
description: N/A - react-responsive-masonry is a component-only library with no custom hooks in the Sasquatch project.
globs: src/**/*.tsx
---

# React Responsive Masonry Hooks

`react-responsive-masonry` does not expose any hooks. Layout is handled entirely through the `ResponsiveMasonry` and `Masonry` components.

For column count logic, the `columnsCountBreakPoints` prop handles responsiveness internally based on container/window width.

If you need to programmatically determine column count for other purposes:

```tsx
import { useMobile } from '@/components/use-mobile';

export function AdaptiveGrid({ items }: { items: Feature[] }) {
  const isMobile = useMobile();

  if (isMobile) {
    // Simple single column on mobile — no masonry needed
    return (
      <div className="flex flex-col gap-4">
        {items.map(item => <FeatureCard key={item.slug} feature={item} />)}
      </div>
    );
  }

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 750: 2, 1200: 3 }}>
      <Masonry gutter="24px">
        {items.map(item => <FeatureCard key={item.slug} feature={item} />)}
      </Masonry>
    </ResponsiveMasonry>
  );
}
```
