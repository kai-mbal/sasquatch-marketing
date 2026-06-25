---
description: Covers the motion library (framer-motion) for animations in the Sasquatch project, including variants, transitions, and gesture animations.
globs: src/**/*.tsx
---

# Framer Motion / Motion Skill

The `motion` package (rebranded framer-motion) is used for animations. Import from `motion/react`.

## Reference Files

- [patterns.md](references/patterns.md) - motion.div, variants, animate/initial/exit
- [workflows.md](references/workflows.md) - Page transitions, list animations, hover effects

## Basic Usage

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
  Content
</motion.div>
```

## Key Concepts

| Prop | Purpose |
|------|---------|
| `initial` | Starting state before animation |
| `animate` | Target animated state |
| `exit` | State when component leaves DOM (needs AnimatePresence) |
| `transition` | Duration, easing, delay config |
| `variants` | Named state objects for parent/child coordination |
| `whileHover` | State while hovered |
| `whileTap` | State while pressed |

## Motion Elements

`motion.div`, `motion.section`, `motion.span`, `motion.ul`, `motion.li` — any HTML element can be prefixed with `motion.`.
