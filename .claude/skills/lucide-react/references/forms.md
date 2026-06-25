---
description: Documents icon usage patterns within form inputs and UI elements in the Sasquatch project.
globs: src/**/*.tsx
---

# Icons in Form Inputs

## Input with Leading Icon

```tsx
import { Search, Mail, User } from 'lucide-react';

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#5A6560' }} />
  <input
    type="text"
    placeholder="Search features..."
    className="w-full pl-10 pr-4 py-2 border border-[#ECEEED] rounded-lg text-sm focus:outline-none focus:border-[#1A3D2B]"
  />
</div>
```

## Input with Trailing Icon (Clear Button)

```tsx
import { X } from 'lucide-react';

<div className="relative">
  <input
    value={query}
    onChange={e => setQuery(e.target.value)}
    className="w-full px-4 py-2 pr-9 border border-[#ECEEED] rounded-lg text-sm"
  />
  {query && (
    <button
      onClick={() => setQuery('')}
      className="absolute right-3 top-1/2 -translate-y-1/2"
    >
      <X className="w-4 h-4" style={{ color: '#5A6560' }} />
    </button>
  )}
</div>
```

## Submit Button with Icon

```tsx
import { Send, Loader2 } from 'lucide-react';

<button
  type="submit"
  disabled={isSubmitting}
  className="flex items-center gap-2 px-6 py-3 rounded-lg text-white text-sm font-medium"
  style={{ backgroundColor: '#1A3D2B' }}
>
  {isSubmitting
    ? <Loader2 className="w-4 h-4 animate-spin" />
    : <Send className="w-4 h-4" />
  }
  {isSubmitting ? 'Sending...' : 'Send Message'}
</button>
```

## Select with Icon Label

```tsx
import { MapPin } from 'lucide-react';

<label className="flex items-center gap-2 text-sm font-medium" style={{ color: '#1A1F1C' }}>
  <MapPin className="w-4 h-4" style={{ color: '#1A3D2B' }} />
  Jurisdiction
</label>
```
