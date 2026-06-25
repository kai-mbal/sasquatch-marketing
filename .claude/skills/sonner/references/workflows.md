---
description: Documents Toaster setup and custom styling with project brand colors for Sonner in the Sasquatch project.
globs: src/app/App.tsx, src/main.tsx, src/**/*.tsx
---

# Sonner Workflows

## Toaster Setup

Place `<Toaster />` once in the app root — not in every page:

```tsx
// src/app/App.tsx
import { Toaster } from 'sonner';
import { BrowserRouter } from 'react-router';
import { AppRoutes } from './routes';

export function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            borderRadius: '8px',
            border: '1px solid #ECEEED',
            fontFamily: 'var(--font-body)',
          },
          classNames: {
            success: 'border-l-4 border-l-[#4CAF70]',
            error: 'border-l-4 border-l-red-500',
          },
        }}
      />
    </BrowserRouter>
  );
}
```

## Custom Styled Toaster

```tsx
<Toaster
  position="bottom-right"
  richColors
  closeButton
  duration={4000}
  toastOptions={{
    style: {
      background: 'white',
      color: '#1A1F1C',
      border: '1px solid #ECEEED',
      borderRadius: '8px',
      fontSize: '14px',
    },
  }}
/>
```

## In Form Submit Handler

```tsx
const onSubmit = async (data: FormData) => {
  try {
    await sendContactForm(data);
    toast.success('Message sent!', {
      description: "We'll be in touch within 24 hours.",
    });
    reset();
  } catch (error) {
    toast.error('Failed to send', {
      description: 'Please check your connection and try again.',
    });
  }
};
```
