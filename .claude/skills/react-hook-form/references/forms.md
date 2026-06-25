---
description: Documents complete form examples with validation using react-hook-form in the Sasquatch project.
globs: src/**/*.tsx, src/app/pages/ContactPage.tsx
---

# Complete Form Examples

## Contact Form

```tsx
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ defaultValues: { name: '', email: '', company: '', message: '' } });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // await apiCall(data)
      toast.success('Message sent! We\'ll be in touch.');
      reset();
    } catch {
      toast.error('Failed to send. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium" style={{ color: '#1A1F1C' }}>Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            className="border border-[#ECEEED] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1A3D2B]"
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium" style={{ color: '#1A1F1C' }}>Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
            })}
            type="email"
            className="border border-[#ECEEED] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1A3D2B]"
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium" style={{ color: '#1A1F1C' }}>Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows={5}
          className="border border-[#ECEEED] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1A3D2B] resize-none"
        />
        {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start px-6 py-3 rounded-lg text-white text-sm font-medium disabled:opacity-60"
        style={{ backgroundColor: '#1A3D2B' }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```
