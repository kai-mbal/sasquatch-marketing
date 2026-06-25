---
description: Documents form handling patterns using react-hook-form in the Sasquatch project.
globs: src/**/*.tsx
---

# Forms

Forms use `react-hook-form`. See also [react-hook-form/SKILL.md](../../react-hook-form/SKILL.md).

## Basic Pattern

```tsx
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        {...register('name', { required: 'Name is required' })}
        className="border border-[#ECEEED] rounded-lg px-4 py-2"
        placeholder="Your name"
      />
      {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

      <input
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        className="border border-[#ECEEED] rounded-lg px-4 py-2"
        placeholder="your@email.com"
      />

      <textarea
        {...register('message')}
        className="border border-[#ECEEED] rounded-lg px-4 py-2"
        rows={4}
      />

      <button
        type="submit"
        className="bg-[#1A3D2B] text-white rounded-lg px-6 py-3"
      >
        Send
      </button>
    </form>
  );
}
```
