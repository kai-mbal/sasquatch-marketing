---
description: Documents MUI component patterns used alongside Radix UI and Tailwind in the Sasquatch project.
globs: src/**/*.tsx
---

# MUI Patterns

## Text Fields

```tsx
import { TextField } from '@mui/material';

<TextField
  label="Company Name"
  variant="outlined"
  fullWidth
  sx={{
    '& .MuiOutlinedInput-root fieldset': { borderColor: '#ECEEED' },
    '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#1A3D2B' },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#1A3D2B' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#1A3D2B' },
  }}
/>
```

## Loading Spinner

```tsx
import { CircularProgress } from '@mui/material';

<CircularProgress size={24} sx={{ color: '#1A3D2B' }} />
```

## MUI Icons

```tsx
import { Search, FilterList, Download } from '@mui/icons-material';

// Use Lucide React icons when possible — MUI icons as fallback
<Search sx={{ color: '#5A6560', fontSize: 20 }} />
```

## Tooltip

```tsx
import { Tooltip } from '@mui/material';

// Prefer Radix Tooltip — use MUI for complex tooltip content
<Tooltip title="View permit details" placement="top">
  <span>
    <IconButton>
      <Info />
    </IconButton>
  </span>
</Tooltip>
```

## Alert

```tsx
import { Alert, AlertTitle } from '@mui/material';

<Alert severity="success" sx={{ borderRadius: '8px' }}>
  <AlertTitle>Success</AlertTitle>
  Your application has been submitted.
</Alert>
```
