---
description: Documents test fixture and factory patterns for the Sasquatch project.
globs: src/test/**, src/**/*.test.tsx
---

# Test Fixtures and Factories

## Feature Factory

Create reusable test data factories:

```ts
// src/test/factories.ts
import { FileText } from 'lucide-react';
import type { Feature } from '@/types';

export function createFeature(overrides: Partial<Feature> = {}): Feature {
  return {
    slug: 'test-feature',
    title: 'Test Feature',
    description: 'A test feature description',
    category: 'permits',
    icon: FileText,
    benefits: ['Benefit one', 'Benefit two'],
    ...overrides,
  };
}

export function createFeatureList(count: number): Feature[] {
  return Array.from({ length: count }, (_, i) =>
    createFeature({ slug: `feature-${i}`, title: `Feature ${i}` })
  );
}
```

## Usage in Tests

```tsx
import { createFeature, createFeatureList } from '@/test/factories';

it('renders feature card', () => {
  const feature = createFeature({ title: 'Permit Tracking' });
  render(<FeatureCard feature={feature} />);
  expect(screen.getByText('Permit Tracking')).toBeInTheDocument();
});

it('renders feature grid with many items', () => {
  const features = createFeatureList(12);
  render(<FeatureGrid features={features} />);
  expect(screen.getAllByRole('article')).toHaveLength(12);
});
```

## Shared Test Utilities

```tsx
// src/test/utils.tsx
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import type { ReactElement } from 'react';

export function renderWithRouter(ui: ReactElement, route = '/') {
  return render(
    <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
  );
}
```
