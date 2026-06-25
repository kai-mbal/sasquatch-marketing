---
description: Covers date-fns utility library usage in the Sasquatch project for formatting permit dates, inspection schedules, and job timelines.
globs: src/**/*.tsx, src/**/*.ts
---

# date-fns Skill

`date-fns` is the date utility library for formatting and manipulating dates in this project. Always import named functions — do not import the whole library.

## Reference Files

- [patterns.md](references/patterns.md) - format, parseISO, differenceInDays, isAfter
- [workflows.md](references/workflows.md) - Date formatting for permit/inspection dates

## Key Functions

```ts
import { format, parseISO, differenceInDays, isAfter, isBefore, addDays, formatDistanceToNow } from 'date-fns';
```

## Quick Examples

```ts
// Format a date
format(new Date(), 'MMM d, yyyy')          // "Feb 27, 2026"
format(new Date(), 'MM/dd/yyyy')            // "02/27/2026"

// Parse ISO string from API
const date = parseISO('2026-02-27T10:00:00Z');

// Days until permit expires
const daysLeft = differenceInDays(expiryDate, new Date());

// Is permit overdue?
const isOverdue = isAfter(new Date(), permitDueDate);
```

## Important: Tree-shake

Always use named imports — never `import dateFns from 'date-fns'`.
