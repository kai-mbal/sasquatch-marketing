---
description: Covers React Router 7 usage in the Sasquatch project, including route configuration, navigation hooks, and Link components.
globs: src/app/routes.tsx, src/app/App.tsx, src/**/*.tsx
---

# React Router Skill

React Router 7.13.0 is used for client-side routing. Routes are defined centrally in `src/app/routes.tsx`.

## Reference Files

- [hooks.md](references/hooks.md) - useNavigate, useParams, useLocation
- [components.md](references/components.md) - Link, NavLink
- [data-fetching.md](references/data-fetching.md) - Loader patterns
- [state.md](references/state.md) - URL state, search params
- [forms.md](references/forms.md) - Form actions
- [performance.md](references/performance.md) - Lazy loading routes

## Route Structure

```tsx
// src/app/routes.tsx
import { Route, Routes } from 'react-router';
import { HomePage } from '@/pages/HomePage';
import { FeaturesPage } from '@/pages/FeaturesPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/features/:slug" element={<FeatureDetailPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
```

## All Routes

| Path | Component |
|------|-----------|
| `/` | HomePage |
| `/features` | FeaturesPage |
| `/features/:slug` | FeatureDetailPage |
| `/pricing` | PricingPage |
| `/jurisdictions` | JurisdictionsPage |
| `/about` | AboutPage |
| `/governance` | GovernancePage |
| `/newsletter` | NewsletterPage |
| `/terms` | TermsOfServicePage |
| `/contact` | ContactPage |
| `/login` | LoginPage |
