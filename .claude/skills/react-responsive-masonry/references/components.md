---
description: Documents ResponsiveMasonry and Masonry component usage for masonry grid layouts in the Sasquatch project.
globs: src/**/*.tsx
---

# Masonry Components

## ResponsiveMasonry + Masonry

```tsx
import ResponsiveMasonry, { Masonry } from 'react-responsive-masonry';

export function JurisdictionMasonry({ jurisdictions }: { jurisdictions: Jurisdiction[] }) {
  return (
    <ResponsiveMasonry
      columnsCountBreakPoints={{
        350: 1,   // 1 column below 350px
        640: 2,   // 2 columns at sm
        1024: 3,  // 3 columns at lg
        1280: 4,  // 4 columns at xl
      }}
    >
      <Masonry gutter="16px">
        {jurisdictions.map(j => (
          <div
            key={j.id}
            className="rounded-xl border border-[#ECEEED] p-4 bg-white"
          >
            <h3 className="font-semibold text-sm" style={{ color: '#1A1F1C' }}>{j.name}</h3>
            <p className="text-xs mt-1" style={{ color: '#5A6560' }}>{j.state}</p>
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
```

## Feature Card Masonry (Variable Heights)

```tsx
<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
  <Masonry gutter="24px">
    {allFeatures.map(feature => (
      <div
        key={feature.slug}
        className="rounded-xl border border-[#ECEEED] p-6 bg-white"
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#E6F4EC' }}>
          <feature.icon className="w-5 h-5" style={{ color: '#1A3D2B' }} />
        </div>
        <h3 className="text-base font-semibold mb-2" style={{ color: '#1A1F1C' }}>{feature.title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: '#5A6560' }}>{feature.description}</p>
        {feature.benefits && (
          <ul className="mt-3 flex flex-col gap-1">
            {feature.benefits.map(b => (
              <li key={b} className="text-xs flex items-center gap-1.5" style={{ color: '#5A6560' }}>
                <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: '#4CAF70' }} />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </Masonry>
</ResponsiveMasonry>
```
