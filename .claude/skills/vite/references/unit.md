---
description: Documents Vitest unit testing setup for the Sasquatch Vite project. Testing is not yet configured but this covers how to set it up.
globs: vite.config.ts, src/**/*.test.tsx, src/**/*.spec.tsx
---

# Unit Testing with Vitest

## Setup (Not Yet Configured)

Install dependencies:

```bash
npm install -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
});
```

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom';
```

Add to `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

## Writing Tests

Co-locate test files with source:

```tsx
// src/app/components/FeatureCard.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { FeatureCard } from './FeatureCard';
import { FileText } from 'lucide-react';

const mockFeature = {
  slug: 'permit-tracking',
  title: 'Permit Tracking',
  description: 'Track permits across all your jobs.',
  icon: FileText,
  category: 'permits' as const,
};

it('renders feature title', () => {
  render(<MemoryRouter><FeatureCard feature={mockFeature} /></MemoryRouter>);
  expect(screen.getByText('Permit Tracking')).toBeInTheDocument();
});
```
