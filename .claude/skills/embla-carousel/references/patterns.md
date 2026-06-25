---
description: Documents useEmblaCarousel hook setup with prev/next navigation controls for the Sasquatch project.
globs: src/**/*.tsx
---

# Embla Carousel Patterns

## Basic Carousel with Controls

```tsx
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Carousel({ items }: { items: Feature[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {items.map(item => (
            <div key={item.slug} className="flex-none w-full sm:w-1/2 lg:w-1/3">
              <FeatureCard feature={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full border border-[#ECEEED] bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
      >
        <ChevronLeft className="w-5 h-5" style={{ color: '#1A3D2B' }} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full border border-[#ECEEED] bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
      >
        <ChevronRight className="w-5 h-5" style={{ color: '#1A3D2B' }} />
      </button>
    </div>
  );
}
```

## Dot Indicators

```tsx
const [selectedIndex, setSelectedIndex] = useState(0);
const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

useEffect(() => {
  if (!emblaApi) return;
  setScrollSnaps(emblaApi.scrollSnapList());
  emblaApi.on('select', () => setSelectedIndex(emblaApi.selectedScrollSnap()));
}, [emblaApi]);

<div className="flex justify-center gap-2 mt-4">
  {scrollSnaps.map((_, i) => (
    <button
      key={i}
      onClick={() => emblaApi?.scrollTo(i)}
      className="w-2 h-2 rounded-full transition-colors"
      style={{ backgroundColor: i === selectedIndex ? '#1A3D2B' : '#ECEEED' }}
    />
  ))}
</div>
```
