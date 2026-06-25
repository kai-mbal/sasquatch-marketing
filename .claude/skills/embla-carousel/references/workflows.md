---
description: Documents responsive carousel setup and autoplay configuration for Embla Carousel in the Sasquatch project.
globs: src/**/*.tsx
---

# Embla Carousel Workflows

## Responsive Slides per View

Use CSS to control visible slides per breakpoint:

```tsx
<div className="flex gap-6">
  {items.map(item => (
    // Full width mobile, half on md, third on lg
    <div key={item.slug} className="flex-none w-[calc(100%-24px)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
      <FeatureCard feature={item} />
    </div>
  ))}
</div>
```

## Autoplay

```tsx
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const [emblaRef] = useEmblaCarousel(
  { loop: true },
  [Autoplay({ delay: 4000, stopOnInteraction: true })]
);
```

Install: `npm install embla-carousel-autoplay`

## Testimonial Carousel

```tsx
export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, i) => (
            <div key={i} className="flex-none w-full px-4">
              <div className="p-8 rounded-xl border border-[#ECEEED] text-center">
                <p className="text-lg italic mb-6" style={{ color: '#5A6560' }}>"{t.quote}"</p>
                <p className="font-semibold" style={{ color: '#1A1F1C' }}>{t.name}</p>
                <p className="text-sm" style={{ color: '#5A6560' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-6">
        <button onClick={scrollPrev} className="p-2 rounded-full border border-[#ECEEED] hover:bg-[#E6F4EC]">
          <ChevronLeft className="w-5 h-5" style={{ color: '#1A3D2B' }} />
        </button>
        <button onClick={scrollNext} className="p-2 rounded-full border border-[#ECEEED] hover:bg-[#E6F4EC]">
          <ChevronRight className="w-5 h-5" style={{ color: '#1A3D2B' }} />
        </button>
      </div>
    </div>
  );
}
```
