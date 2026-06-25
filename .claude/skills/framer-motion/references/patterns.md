---
description: Documents core framer-motion animation patterns including variants and AnimatePresence used in the Sasquatch project.
globs: src/**/*.tsx
---

# Framer Motion Patterns

## Fade In

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4 }}
>
```

## Slide Up Fade In

```tsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

## Variants for Stagger

```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

<motion.ul variants={container} initial="hidden" animate="show" className="grid grid-cols-3 gap-6">
  {features.map(f => (
    <motion.li key={f.slug} variants={item}>
      <FeatureCard feature={f} />
    </motion.li>
  ))}
</motion.ul>
```

## AnimatePresence (Exit Animations)

```tsx
import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      key="modal"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <Modal />
    </motion.div>
  )}
</AnimatePresence>
```

## Gesture Animations

```tsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
>
  Get Started
</motion.button>
```
