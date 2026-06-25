---
description: Documents React Router hooks including useNavigate, useParams, and useLocation used in the Sasquatch project.
globs: src/**/*.tsx
---

# React Router Hooks

## useNavigate

Programmatic navigation:

```tsx
import { useNavigate } from 'react-router';

export function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // redirect after login
    navigate('/');
  };

  return <button onClick={handleLogin}>Login</button>;
}
```

Navigate with options:
```tsx
navigate('/features', { replace: true });  // replace history entry
navigate(-1);                               // go back
```

## useParams

Access URL parameters:

```tsx
import { useParams } from 'react-router';
import { allFeatures } from '@/data/features';

export function FeatureDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const feature = allFeatures.find(f => f.slug === slug);
  if (!feature) return <div>Feature not found</div>;

  return <div>{feature.title}</div>;
}
```

Always handle the undefined case — `useParams` returns `string | undefined`.

## useLocation

Access current URL location:

```tsx
import { useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={isHome ? 'transparent' : 'solid'}>
      ...
    </nav>
  );
}
```

`location` has: `pathname`, `search`, `hash`, `state`, `key`.
