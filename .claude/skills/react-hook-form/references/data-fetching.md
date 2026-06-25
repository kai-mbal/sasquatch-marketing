---
description: Documents async form submission and validation patterns with react-hook-form in the Sasquatch project.
globs: src/**/*.tsx
---

# Form Submit Handlers and Async Validation

## Async Submit Handler

```tsx
const { handleSubmit, setError, formState: { isSubmitting } } = useForm<ContactFormData>();

const onSubmit = async (data: ContactFormData) => {
  try {
    await sendContactRequest(data);
    // Success — use sonner toast
    toast.success('Message sent! We\'ll be in touch soon.');
    reset();
  } catch (error) {
    toast.error('Something went wrong. Please try again.');
    // Or set field-level error
    setError('email', { message: 'This email is already registered' });
  }
};

<form onSubmit={handleSubmit(onSubmit)}>
  {/* fields */}
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? 'Sending...' : 'Send Message'}
  </button>
</form>
```

## Async Field Validation

```tsx
{...register('email', {
  required: 'Email is required',
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: 'Invalid email address',
  },
  validate: async (value) => {
    // Async validation example (not currently used)
    const exists = await checkEmailExists(value);
    return !exists || 'Email already in use';
  },
})}
```

## Loading State on Submit Button

```tsx
const { formState: { isSubmitting } } = useForm();

<button
  type="submit"
  disabled={isSubmitting}
  className="bg-[#1A3D2B] text-white px-6 py-3 rounded-lg disabled:opacity-60 flex items-center gap-2"
>
  {isSubmitting && <CircularProgress size={16} sx={{ color: 'white' }} />}
  {isSubmitting ? 'Sending...' : 'Send'}
</button>
```
