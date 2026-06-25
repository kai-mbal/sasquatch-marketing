---
description: Documents reusable design patterns and visual conventions applied consistently across the Sasquatch marketing pages.
globs: src/app/pages/**, src/**/*.tsx
---

# Design Patterns

## Icon + Text Row

```tsx
<div className="flex items-start gap-3">
  <div className="mt-1 w-5 h-5 shrink-0" style={{ color: '#4CAF70' }}>
    <CheckCircle2 className="w-5 h-5" />
  </div>
  <p className="text-base" style={{ color: '#1A1F1C' }}>
    Automatically track permit status changes
  </p>
</div>
```

## Numbered Steps

```tsx
{steps.map((step, i) => (
  <div key={i} className="flex gap-4">
    <div
      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
      style={{ backgroundColor: '#1A3D2B' }}
    >
      {i + 1}
    </div>
    <div>
      <h4 className="font-semibold" style={{ color: '#1A1F1C' }}>{step.title}</h4>
      <p className="text-sm mt-1" style={{ color: '#5A6560' }}>{step.description}</p>
    </div>
  </div>
))}
```

## CTA Section

```tsx
<section className="py-20 px-6" style={{ backgroundColor: '#1A3D2B' }}>
  <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
    <h2 className="text-3xl md:text-4xl font-bold text-white">
      Ready to streamline your permits?
    </h2>
    <p className="text-lg" style={{ color: '#E6F4EC' }}>
      Join thousands of contractors using Sasquatch.
    </p>
    <div className="flex gap-4 justify-center">
      <Button className="bg-white text-[#1A3D2B] hover:opacity-90">
        Start Free Trial
      </Button>
      <Button variant="outline" className="border-white text-white hover:bg-white/10">
        Contact Sales
      </Button>
    </div>
  </div>
</section>
```

## Divider

```tsx
<hr className="border-t border-[#ECEEED] my-12" />
```

## Testimonial Card

```tsx
<div className="p-6 rounded-xl border border-[#ECEEED] flex flex-col gap-4">
  <p className="text-base italic" style={{ color: '#5A6560' }}>"{quote}"</p>
  <div className="flex items-center gap-3">
    <Avatar><AvatarFallback>{initials}</AvatarFallback></Avatar>
    <div>
      <p className="text-sm font-semibold" style={{ color: '#1A1F1C' }}>{name}</p>
      <p className="text-xs" style={{ color: '#5A6560' }}>{role}</p>
    </div>
  </div>
</div>
```
