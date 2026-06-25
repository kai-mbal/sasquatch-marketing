---
description: Documents visual component patterns including card styles and button variants used across the Sasquatch site.
globs: src/**/*.tsx, src/app/components/**
---

# Design Component Patterns

## Feature Card

```tsx
<div className="flex flex-col gap-4 p-6 rounded-xl border border-[#ECEEED] bg-white hover:shadow-md transition-shadow">
  <div
    className="w-12 h-12 rounded-lg flex items-center justify-center"
    style={{ backgroundColor: '#E6F4EC' }}
  >
    <Icon className="w-6 h-6" style={{ color: '#1A3D2B' }} />
  </div>
  <div className="flex flex-col gap-2">
    <h3 className="text-lg font-semibold" style={{ color: '#1A1F1C' }}>
      {title}
    </h3>
    <p className="text-sm leading-relaxed" style={{ color: '#5A6560' }}>
      {description}
    </p>
  </div>
</div>
```

## Button Variants

```tsx
// Primary CTA
<Button className="bg-[#1A3D2B] text-white px-6 py-3 rounded-lg hover:opacity-90">
  Get Started
</Button>

// Secondary/outline
<Button variant="outline" className="border-[#1A3D2B] text-[#1A3D2B] hover:bg-[#E6F4EC]">
  Learn More
</Button>

// Ghost
<Button variant="ghost" className="text-[#5A6560] hover:text-[#1A1F1C]">
  Cancel
</Button>
```

## Badge/Tag

```tsx
<span
  className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
  style={{ backgroundColor: '#E6F4EC', color: '#1A3D2B' }}
>
  <CheckCircle2 className="w-3 h-3" />
  Active
</span>
```

## Section Header

```tsx
<div className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
  <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#4CAF70' }}>
    Features
  </span>
  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#1A1F1C', fontFamily: 'var(--font-display)' }}>
    Everything you need to manage permits
  </h2>
  <p className="text-lg" style={{ color: '#5A6560' }}>
    One platform for permits, inspections, and jobs.
  </p>
</div>
```
