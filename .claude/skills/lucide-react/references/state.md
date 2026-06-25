---
description: Documents conditional icon rendering patterns based on state in the Sasquatch project.
globs: src/**/*.tsx
---

# Conditional Icon Rendering

## Toggle Icons

```tsx
import { Menu, X } from 'lucide-react';

const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(prev => !prev)}>
  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
</button>
```

## Status-Based Icons

```tsx
import { CheckCircle2, Clock, XCircle } from 'lucide-react';

type PermitStatus = 'approved' | 'pending' | 'rejected';

function PermitStatusIcon({ status }: { status: PermitStatus }) {
  if (status === 'approved') return <CheckCircle2 className="w-5 h-5" style={{ color: '#4CAF70' }} />;
  if (status === 'rejected') return <XCircle className="w-5 h-5" style={{ color: '#ef4444' }} />;
  return <Clock className="w-5 h-5" style={{ color: '#f59e0b' }} />;
}
```

## Animated Icon State (with motion)

```tsx
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

<motion.div
  animate={{ rotate: isExpanded ? 180 : 0 }}
  transition={{ duration: 0.2 }}
>
  <ChevronDown className="w-4 h-4" style={{ color: '#5A6560' }} />
</motion.div>
```

## Loading State Icon

```tsx
import { Loader2 } from 'lucide-react';

{isLoading
  ? <Loader2 className="w-5 h-5 animate-spin" style={{ color: '#1A3D2B' }} />
  : <CheckCircle2 className="w-5 h-5" style={{ color: '#4CAF70' }} />
}
```
