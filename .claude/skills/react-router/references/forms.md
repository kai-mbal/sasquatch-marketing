---
description: Documents React Router Form actions available in v7, though not currently used in the Sasquatch project.
globs: src/**/*.tsx
---

# React Router Forms

## Current State

The Sasquatch project does not use React Router Form actions. Forms use `react-hook-form` with standard `onSubmit` handlers.

## Form Action Pattern (Available in RR7)

React Router 7 supports progressive-enhancement form submissions via actions:

```tsx
// Route with action
{
  path: '/contact',
  element: <ContactPage />,
  action: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    // process form...
    return redirect('/contact/success');
  },
}
```

```tsx
// Component using Form (RR built-in)
import { Form, useActionData } from 'react-router';

export function ContactPage() {
  const actionData = useActionData();

  return (
    <Form method="post">
      <input name="name" />
      <input name="email" type="email" />
      <button type="submit">Send</button>
    </Form>
  );
}
```

## Current Approach (react-hook-form)

See [react-hook-form/SKILL.md](../../react-hook-form/SKILL.md) for the actual form implementation used in this project.
