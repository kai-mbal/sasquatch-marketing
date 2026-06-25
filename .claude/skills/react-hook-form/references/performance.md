---
description: Documents performance optimization patterns for react-hook-form, focusing on avoiding unnecessary re-renders.
globs: src/**/*.tsx
---

# React Hook Form Performance

## Uncontrolled by Default

`react-hook-form` uses uncontrolled inputs — no re-render on each keystroke:

```tsx
// Good — uncontrolled, no re-renders while typing
<input {...register('name')} />

// Avoid for most cases — re-renders on every change
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
```

## Avoid watch() for Everything

`watch()` subscribes to value changes and causes re-renders:

```tsx
// Only watch specific fields you need
const planType = watch('planType');  // Only re-renders when planType changes

// Avoid watching all fields unless necessary
const all = watch();  // Re-renders on any field change
```

## Isolate Error Display

Destructure only needed formState properties:

```tsx
// Good — only subscribes to errors
const { formState: { errors } } = useForm();

// Slightly worse — subscribes to all formState changes
const { formState } = useForm();
// then use formState.errors
```

## Controller for Custom Inputs

Use `Controller` for Radix components to avoid wrapping with state:

```tsx
// Controller connects Radix component to RHF without extra state
<Controller
  name="rating"
  control={control}
  render={({ field }) => (
    <Slider
      value={[field.value]}
      onValueChange={([v]) => field.onChange(v)}
    />
  )}
/>
```

## defaultValues

Always provide `defaultValues` to avoid uncontrolled-to-controlled warnings and enable `isDirty`:

```tsx
useForm<FormData>({
  defaultValues: { name: '', email: '', plan: 'starter' }
});
```
