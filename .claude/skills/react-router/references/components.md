---
description: Documents React Router Link and NavLink components used for navigation in the Sasquatch project.
globs: src/**/*.tsx
---

# React Router Components

## Link

Use `Link` for all internal navigation — never `<a href>` for internal routes:

```tsx
import { Link } from 'react-router';

// Basic link
<Link to="/features">See All Features</Link>

// With styling
<Link
  to="/pricing"
  className="text-sm font-medium hover:opacity-80 transition-opacity"
  style={{ color: '#1A3D2B' }}
>
  View Pricing
</Link>

// Feature card link
<Link to={`/features/${feature.slug}`}>
  <FeatureCard feature={feature} />
</Link>
```

## NavLink

Use `NavLink` in navigation menus for active state styling:

```tsx
import { NavLink } from 'react-router';

<NavLink
  to="/features"
  className={({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? 'text-[#1A3D2B] font-semibold'
        : 'text-[#5A6560] hover:text-[#1A1F1C]'
    }`
  }
>
  Features
</NavLink>
```

`NavLink` receives `{ isActive, isPending }` in the `className` and `style` functions.

## Navigate (Redirect)

Redirect declaratively:

```tsx
import { Navigate } from 'react-router';

if (!feature) return <Navigate to="/features" replace />;
```
