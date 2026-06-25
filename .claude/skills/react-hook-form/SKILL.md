---
description: Covers react-hook-form usage for form management in the Sasquatch project, including validation, error states, and submission patterns.
globs: src/**/*.tsx
---

# React Hook Form Skill

`react-hook-form` is the form management library for all forms in this project. It uses uncontrolled inputs by default for optimal performance.

## Reference Files

- [hooks.md](references/hooks.md) - useForm, Controller hook
- [components.md](references/components.md) - Form field components
- [data-fetching.md](references/data-fetching.md) - Submit handlers, async validation
- [state.md](references/state.md) - Form state, errors, dirty/touched
- [forms.md](references/forms.md) - Full form examples
- [performance.md](references/performance.md) - Avoiding re-renders

## Quick Start

```tsx
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
}

export function MyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: 'Required' })} />
      {errors.name && <span>{errors.name.message}</span>}
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Key Benefits

- No re-renders on each keystroke (uncontrolled)
- Built-in validation with `register` options
- TypeScript generics for type-safe form values
- Works with Radix UI via `Controller`
