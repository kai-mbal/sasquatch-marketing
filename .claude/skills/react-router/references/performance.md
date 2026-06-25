---
description: Documents route-level code splitting and lazy loading patterns for React Router in the Sasquatch project.
globs: src/app/routes.tsx, src/app/App.tsx
---

# React Router Performance

## Lazy Loading Routes

Split page bundles with `React.lazy` to reduce initial load:

```tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

const HomePage = lazy(() => import('@/pages/HomePage'));
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Suspense>
  );
}
```

## Loading Fallback Component

```tsx
export function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: '#1A3D2B', borderTopColor: 'transparent' }}
      />
    </div>
  );
}
```

## Priority

Lazy load heavy pages: FeaturesPage (30+ features), JurisdictionsPage, GovernancePage. Keep HomePage eagerly loaded for fastest initial render.
