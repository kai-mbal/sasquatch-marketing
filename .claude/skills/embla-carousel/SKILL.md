---
description: Covers Embla Carousel usage in the Sasquatch project for feature showcases and testimonial carousels.
globs: src/**/*.tsx
---

# Embla Carousel Skill

`embla-carousel-react` provides touch-friendly, performant carousels.

## Reference Files

- [patterns.md](references/patterns.md) - useEmblaCarousel hook, prev/next controls
- [workflows.md](references/workflows.md) - Responsive carousels, autoplay

## Basic Setup

```tsx
import useEmblaCarousel from 'embla-carousel-react';

export function FeatureCarousel({ features }: { features: Feature[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {features.map(f => (
          <div key={f.slug} className="flex-none w-full md:w-1/3 px-3">
            <FeatureCard feature={f} />
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Options

```ts
useEmblaCarousel({
  loop: true,        // Infinite loop
  align: 'start',   // 'start' | 'center' | 'end'
  slidesToScroll: 1, // How many slides per scroll
  dragFree: false,   // Free scrolling vs snapping
})
```
