---
description: Documents date-fns function patterns for formatting, parsing, and comparing dates in the Sasquatch project.
globs: src/**/*.tsx, src/**/*.ts
---

# date-fns Patterns

## format

```ts
import { format } from 'date-fns';

format(new Date(), 'MMM d, yyyy')          // "Feb 27, 2026"
format(new Date(), 'MMMM d, yyyy')         // "February 27, 2026"
format(new Date(), 'MM/dd/yyyy')            // "02/27/2026"
format(new Date(), 'yyyy-MM-dd')            // "2026-02-27" (ISO date)
format(new Date(), 'h:mm a')               // "10:30 AM"
format(new Date(), 'MMM d, yyyy h:mm a')   // "Feb 27, 2026 10:30 AM"
```

## parseISO

```ts
import { parseISO } from 'date-fns';

// Convert ISO string (from API/data) to Date object
const permitDate = parseISO('2026-02-27T10:00:00Z');
const displayDate = format(permitDate, 'MMM d, yyyy');
```

## differenceInDays

```ts
import { differenceInDays } from 'date-fns';

const daysUntilExpiry = differenceInDays(expiryDate, new Date());
// daysUntilExpiry > 0 means future, < 0 means past

const label = daysUntilExpiry > 0
  ? `Expires in ${daysUntilExpiry} days`
  : `Expired ${Math.abs(daysUntilExpiry)} days ago`;
```

## isAfter / isBefore

```ts
import { isAfter, isBefore } from 'date-fns';

const isOverdue = isAfter(new Date(), permitDueDate);
const isUpcoming = isBefore(new Date(), inspectionDate);
```

## addDays / subDays

```ts
import { addDays, subDays } from 'date-fns';

const reminderDate = subDays(permitExpiryDate, 7);  // 7 days before expiry
const followUpDate = addDays(inspectionDate, 3);    // 3 days after inspection
```

## formatDistanceToNow

```ts
import { formatDistanceToNow } from 'date-fns';

formatDistanceToNow(permitSubmitDate, { addSuffix: true })
// "3 days ago" or "in 5 days"
```
