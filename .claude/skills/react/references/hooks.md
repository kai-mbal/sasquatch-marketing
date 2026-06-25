---
description: Documents React hook patterns used in the Sasquatch project, including useState, useEffect, useCallback, useMemo, and custom hooks.
globs: src/**/*.tsx, src/**/*.ts, src/**/use-*.ts
---

# React Hooks

## useState

```tsx
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
```

Boolean state uses `is`, `has`, or `should` prefix conventions.

## useEffect

```tsx
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 10);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

Always return cleanup functions for event listeners and subscriptions.

## useCallback

```tsx
const handleSelect = useCallback((id: string) => {
  setSelectedId(id);
}, []);
```

Use when passing callbacks to memoized child components.

## useMemo

```tsx
const filteredFeatures = useMemo(
  () => allFeatures.filter(f => f.category === activeCategory),
  [activeCategory]
);
```

Use for expensive array transformations on feature lists.

## Custom Hook: use-mobile

Located at `src/app/components/use-mobile.ts`:

```ts
import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    mql.addEventListener('change', onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return isMobile;
}
```

Usage:
```tsx
const isMobile = useMobile();
```
