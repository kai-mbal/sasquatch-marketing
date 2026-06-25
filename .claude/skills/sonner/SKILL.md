---
description: Covers Sonner toast notification usage in the Sasquatch project for success, error, and informational feedback.
globs: src/**/*.tsx, src/main.tsx, src/app/App.tsx
---

# Sonner Skill

Sonner is the toast notification library for user feedback messages in this project.

## Reference Files

- [patterns.md](references/patterns.md) - toast(), toast.success(), toast.error()
- [workflows.md](references/workflows.md) - Toaster setup, custom styling

## Setup

Add `<Toaster />` once at the app root:

```tsx
// src/app/App.tsx or src/main.tsx
import { Toaster } from 'sonner';

export function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </>
  );
}
```

## Usage

```tsx
import { toast } from 'sonner';

// Success
toast.success('Permit submitted successfully!');

// Error
toast.error('Failed to submit. Please try again.');

// Info
toast('Your session will expire in 5 minutes.');

// With description
toast.success('Message sent!', {
  description: "We'll get back to you within 24 hours.",
});
```

## When to Use

- Form submission success/failure
- Copy-to-clipboard confirmation
- Action confirmations (delete, archive)
- Network error feedback
