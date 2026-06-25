---
description: Documents page layout patterns, container conventions, and responsive grid structures used in the Sasquatch project.
globs: src/app/pages/**, src/**/*.tsx
---

# Design Layouts

## Page Shell

Every page is wrapped with Navigation + content + Footer:

```tsx
export function MyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16"> {/* offset for fixed nav */}
        {/* page sections */}
      </main>
      <Footer />
    </>
  );
}
```

## Max-Width Container

```tsx
<div className="max-w-6xl mx-auto px-6 md:px-12">
  {/* content */}
</div>
```

## Section Structure

```tsx
<section className="py-16 md:py-24 px-6">
  <div className="max-w-6xl mx-auto">
    {/* section header */}
    {/* section content */}
  </div>
</section>
```

## Hero Layout

```tsx
<section className="min-h-screen flex items-center py-24 px-6" style={{ backgroundColor: '#E6F4EC' }}>
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl md:text-6xl font-bold" style={{ color: '#1A1F1C' }}>...</h1>
      <p className="text-xl" style={{ color: '#5A6560' }}>...</p>
      <div className="flex gap-4">
        <Button>Get Started</Button>
        <Button variant="outline">See Demo</Button>
      </div>
    </div>
    <div>{/* hero image/illustration */}</div>
  </div>
</section>
```

## Feature Grid

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map(f => <FeatureCard key={f.slug} feature={f} />)}
</div>
```

## Two-Column Content

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
  <div>{/* text content */}</div>
  <div>{/* visual/image */}</div>
</div>
```

## Pricing Cards

```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
  {/* pricing tiers */}
</div>
```
