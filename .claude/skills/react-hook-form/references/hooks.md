---
description: Documents useForm and Controller hooks from react-hook-form used in the Sasquatch project.
globs: src/**/*.tsx
---

# React Hook Form Hooks

## useForm

```tsx
import { useForm } from 'react-hook-form';

const {
  register,           // Register native inputs
  handleSubmit,       // Submit handler wrapper
  formState,          // { errors, isSubmitting, isDirty, isValid }
  reset,              // Reset form to defaults
  watch,              // Watch field values
  setValue,           // Programmatically set value
  getValues,          // Get current values
  setError,           // Set manual errors
  clearErrors,        // Clear errors
} = useForm<FormData>({
  defaultValues: {
    name: '',
    email: '',
    message: '',
  },
  mode: 'onBlur',  // or 'onChange', 'onSubmit' (default)
});
```

## Controller

Use `Controller` for Radix UI or MUI components that don't use native inputs:

```tsx
import { Controller } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';

<Controller
  name="category"
  control={control}
  rules={{ required: 'Please select a category' }}
  render={({ field }) => (
    <Select onValueChange={field.onChange} value={field.value}>
      <SelectTrigger className="border-[#ECEEED]">
        {field.value || 'Select category'}
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="permits">Permits</SelectItem>
        <SelectItem value="inspections">Inspections</SelectItem>
      </SelectContent>
    </Select>
  )}
/>
```

## watch

```tsx
const email = watch('email');
const allValues = watch();

// Conditional field based on watched value
const planType = watch('plan');
{planType === 'enterprise' && <EnterpriseFields />}
```
