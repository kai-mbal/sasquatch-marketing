---
description: Covers Material-UI (MUI) 7 usage in the Sasquatch project, used alongside Radix UI and Tailwind CSS.
globs: src/**/*.tsx
---

# Material-UI Skill

MUI 7.3.5 (`@mui/material`, `@mui/icons-material`) is available in this project alongside Radix UI. Use MUI for components not covered by Radix.

## Reference Files

- [patterns.md](references/patterns.md) - MUI component usage patterns
- [workflows.md](references/workflows.md) - Theme setup, sx prop vs Tailwind

## When to Use MUI vs Radix

| Use MUI | Use Radix UI |
|---------|-------------|
| Data tables, data grids | Dialog, Sheet, Popover |
| Date pickers | Dropdown, Select, Combobox |
| Complex form components | Checkbox, Radio, Switch |
| Charts (prefer recharts) | Accordion, Tabs, Navigation |

## Basic Import

```tsx
import { TextField, CircularProgress } from '@mui/material';
import { Search, CheckCircle } from '@mui/icons-material';
```

## Styling Approach

Prefer Tailwind over MUI's `sx` prop when possible. Use `sx` only for MUI-specific overrides:

```tsx
<TextField
  label="Search"
  variant="outlined"
  sx={{
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      '& fieldset': { borderColor: '#ECEEED' },
      '&:hover fieldset': { borderColor: '#1A3D2B' },
    },
  }}
/>
```
