---
description: Documents common date formatting workflows for permit, inspection, and job dates in the Sasquatch project.
globs: src/**/*.tsx, src/**/*.ts
---

# Date Formatting Workflows

## Permit Date Display

```tsx
import { format, parseISO, differenceInDays, isAfter } from 'date-fns';

interface PermitDateProps {
  issuedAt: string;    // ISO string
  expiresAt: string;   // ISO string
}

export function PermitDateDisplay({ issuedAt, expiresAt }: PermitDateProps) {
  const issued = parseISO(issuedAt);
  const expiry = parseISO(expiresAt);
  const daysLeft = differenceInDays(expiry, new Date());
  const isExpired = isAfter(new Date(), expiry);

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm" style={{ color: '#5A6560' }}>
        Issued: {format(issued, 'MMM d, yyyy')}
      </span>
      <span
        className="text-sm font-medium"
        style={{ color: isExpired ? '#ef4444' : daysLeft < 30 ? '#f59e0b' : '#1A3D2B' }}
      >
        {isExpired
          ? `Expired ${Math.abs(daysLeft)} days ago`
          : `Expires in ${daysLeft} days (${format(expiry, 'MMM d, yyyy')})`}
      </span>
    </div>
  );
}
```

## Inspection Schedule

```tsx
function formatInspectionDate(dateStr: string): string {
  const date = parseISO(dateStr);
  const today = new Date();
  const daysUntil = differenceInDays(date, today);

  if (daysUntil === 0) return 'Today';
  if (daysUntil === 1) return 'Tomorrow';
  if (daysUntil < 7) return `In ${daysUntil} days`;
  return format(date, 'MMM d, yyyy');
}
```

## Utility Helper

```ts
// src/app/utils/dates.ts
import { format, parseISO } from 'date-fns';

export const formatDate = (iso: string) => format(parseISO(iso), 'MMM d, yyyy');
export const formatDateTime = (iso: string) => format(parseISO(iso), 'MMM d, yyyy h:mm a');
export const formatShortDate = (iso: string) => format(parseISO(iso), 'MM/dd/yy');
```
