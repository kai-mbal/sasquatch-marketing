---
description: Documents toast notification patterns using Sonner in the Sasquatch project.
globs: src/**/*.tsx
---

# Sonner Toast Patterns

## Basic Toasts

```tsx
import { toast } from 'sonner';

// Default (neutral)
toast('Copied to clipboard');

// Success
toast.success('Permit submitted successfully!');

// Error
toast.error('Something went wrong. Please try again.');

// Warning (use toast with icon)
toast('License expiring soon', { icon: '⚠️' });

// Info
toast.info('Your session will expire in 10 minutes.');
```

## Toast with Description

```tsx
toast.success('Message sent!', {
  description: "We'll get back to you within 24 hours.",
  duration: 5000,
});

toast.error('Submission failed', {
  description: 'Check your connection and try again.',
});
```

## Promise Toast (Async Actions)

```tsx
toast.promise(submitPermitForm(data), {
  loading: 'Submitting permit...',
  success: 'Permit submitted successfully!',
  error: 'Failed to submit permit.',
});
```

## Toast with Action

```tsx
toast('Permit deleted', {
  action: {
    label: 'Undo',
    onClick: () => restorePermit(permitId),
  },
  duration: 5000,
});
```

## Dismissing Toasts

```tsx
const toastId = toast.loading('Processing...');
// Later:
toast.dismiss(toastId);
toast.success('Done!');
```
