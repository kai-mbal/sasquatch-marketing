---
description: Documents form state management including errors, dirty/touched state, and validation in the Sasquatch project.
globs: src/**/*.tsx
---

# Form State

## formState Properties

```tsx
const {
  formState: {
    errors,         // Validation error objects by field name
    isSubmitting,   // True while handleSubmit is awaiting
    isSubmitted,    // True after first submit attempt
    isDirty,        // True if any field differs from defaultValues
    isValid,        // True if no errors (use with mode: 'onChange')
    dirtyFields,    // Object of fields that changed
    touchedFields,  // Object of fields that have been focused
  }
} = useForm<FormData>({ mode: 'onBlur' });
```

## Accessing Errors

```tsx
// Single error
{errors.email && (
  <span className="text-xs text-red-500">{errors.email.message}</span>
)}

// Error type check
{errors.email?.type === 'required' && <span>Email is required</span>}
{errors.email?.type === 'pattern' && <span>Invalid email</span>}
```

## Disabling Submit Until Valid

```tsx
const { formState: { isValid, isSubmitting } } = useForm({ mode: 'onChange' });

<button type="submit" disabled={!isValid || isSubmitting}>
  Submit
</button>
```

## Resetting Form

```tsx
const { reset } = useForm<FormData>({ defaultValues: { name: '', email: '' } });

// Reset to defaults after submit
const onSubmit = async (data: FormData) => {
  await submitForm(data);
  reset();
};

// Reset to specific values
reset({ name: 'Prefilled Name', email: '' });
```

## Setting Server Errors

```tsx
const { setError } = useForm();

// After API error
setError('email', {
  type: 'server',
  message: 'This email is already registered',
});
```
