---
description: Documents Vitest module mocking patterns for the Sasquatch project.
globs: src/**/*.test.tsx, src/**/*.spec.tsx
---

# Module Mocking in Vitest

## Mocking Static Data

```ts
import { vi } from 'vitest';

vi.mock('@/data/features', () => ({
  allFeatures: [
    {
      slug: 'test-feature',
      title: 'Test Feature',
      description: 'A test feature',
      category: 'permits',
      icon: vi.fn(),
    },
  ],
}));
```

## Mocking React Router Hooks

```ts
import { vi } from 'vitest';

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useParams: () => ({ slug: 'permit-tracking' }),
    useNavigate: () => vi.fn(),
  };
});
```

## Mocking Window APIs

```ts
// Mock scroll events
Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
window.dispatchEvent(new Event('scroll'));

// Mock matchMedia (for useMobile hook)
Object.defineProperty(window, 'matchMedia', {
  value: (query: string) => ({
    matches: false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }),
});
```

## Spy on Functions

```ts
const navigateMock = vi.fn();
vi.mock('react-router', () => ({ useNavigate: () => navigateMock }));

// After action
expect(navigateMock).toHaveBeenCalledWith('/features');
```
