---
description: Documents form field component patterns using react-hook-form in the Sasquatch project.
globs: src/**/*.tsx
---

# Form Field Components

## Reusable Field Component

```tsx
interface FieldProps {
  label: string;
  error?: string;
  children: ReactNode;
}

export function Field({ label, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium" style={{ color: '#1A1F1C' }}>
        {label}
      </label>
      {children}
      {error && (
        <span className="text-xs" style={{ color: '#ef4444' }}>
          {error}
        </span>
      )}
    </div>
  );
}
```

## Text Input Field

```tsx
<Field label="Full Name" error={errors.name?.message}>
  <input
    {...register('name', { required: 'Name is required' })}
    className="border border-[#ECEEED] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1A3D2B] transition-colors"
    style={{ color: '#1A1F1C' }}
    placeholder="John Smith"
  />
</Field>
```

## Textarea Field

```tsx
<Field label="Message" error={errors.message?.message}>
  <textarea
    {...register('message', { required: 'Message is required', minLength: 10 })}
    className="border border-[#ECEEED] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#1A3D2B] resize-none"
    rows={5}
    placeholder="Tell us about your project..."
  />
</Field>
```

## Checkbox Field

```tsx
import { Controller } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';

<Controller
  name="agreeToTerms"
  control={control}
  rules={{ required: 'You must agree to the terms' }}
  render={({ field }) => (
    <div className="flex items-center gap-2">
      <Checkbox
        checked={field.value}
        onCheckedChange={field.onChange}
        id="terms"
      />
      <label htmlFor="terms" className="text-sm" style={{ color: '#5A6560' }}>
        I agree to the Terms of Service
      </label>
    </div>
  )}
/>
```
