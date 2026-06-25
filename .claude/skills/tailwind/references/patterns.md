---
description: Documents common Tailwind CSS utility patterns for layout, spacing, colors, and responsive design in the Sasquatch project.
globs: src/**/*.tsx
---

# Tailwind Patterns

## Flexbox

```tsx
// Row layout
<div className="flex items-center gap-3">

// Column layout
<div className="flex flex-col gap-4">

// Space between
<div className="flex items-center justify-between">

// Centered
<div className="flex items-center justify-center">
```

## Grid

```tsx
// Feature grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Two-column layout
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
```

## Spacing and Sizing

```tsx
// Section padding
<section className="py-16 px-6 md:px-12 lg:px-24">

// Max-width container
<div className="max-w-6xl mx-auto px-6">

// Card padding
<div className="p-6 md:p-8">
```

## Responsive Prefixes

```tsx
<div className="text-base md:text-lg lg:text-xl">
<div className="hidden md:block">       {/* Hide on mobile */}
<div className="block md:hidden">       {/* Show only on mobile */}
<div className="grid-cols-1 md:grid-cols-3">
```

## Typography

```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
<h2 className="text-2xl md:text-3xl font-semibold">
<p className="text-base leading-relaxed">
<span className="text-sm font-medium uppercase tracking-wider">
```

## Borders and Radius

```tsx
<div className="border border-[#ECEEED] rounded-lg">
<div className="rounded-full">
<div className="border-b border-[#ECEEED]">
```

## Project Color Usage

Brand colors go via inline styles, not Tailwind:

```tsx
// Primary green for CTAs, icons
style={{ color: '#1A3D2B' }}
style={{ backgroundColor: '#1A3D2B' }}

// Light green backgrounds
style={{ backgroundColor: '#E6F4EC' }}

// Accent green for highlights
style={{ color: '#4CAF70' }}

// Text colors
style={{ color: '#1A1F1C' }}   // dark text
style={{ color: '#5A6560' }}   // secondary text
```
