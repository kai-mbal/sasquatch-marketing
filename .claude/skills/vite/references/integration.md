---
description: Documents integration testing patterns for the Sasquatch project using Vitest and React Testing Library.
globs: src/**/*.test.tsx, src/**/*.spec.tsx
---

# Integration Testing

## Page-Level Tests

Test full pages with routing context:

```tsx
// src/app/pages/FeaturesPage.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { FeaturesPage } from './FeaturesPage';

function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
  );
}

describe('FeaturesPage', () => {
  it('renders all feature cards', () => {
    renderWithRouter(<FeaturesPage />);
    expect(screen.getAllByRole('article').length).toBeGreaterThan(0);
  });

  it('filters features by category', async () => {
    const user = userEvent.setup();
    renderWithRouter(<FeaturesPage />);

    await user.click(screen.getByText('Permits'));
    const cards = screen.getAllByRole('article');
    cards.forEach(card => {
      expect(card).toHaveAttribute('data-category', 'permits');
    });
  });
});
```

## Navigation Tests

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Navigation } from '@/components/Navigation';

it('renders nav links', () => {
  render(<MemoryRouter><Navigation /></MemoryRouter>);
  expect(screen.getByRole('link', { name: /features/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument();
});
```
