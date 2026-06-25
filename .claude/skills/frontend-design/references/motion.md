---
description: Documents animation patterns using the motion library (framer-motion) in the Sasquatch project.
globs: src/**/*.tsx
---

# Motion / Framer Motion

The project uses the `motion` package (rebranded framer-motion). See also [framer-motion/SKILL.md](../../framer-motion/SKILL.md).

## Fade In on Mount

```tsx
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
  <FeatureCard feature={feature} />
</motion.div>
```

## Staggered List Animation

```tsx
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

<motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
  variants={containerVariants}
  initial="hidden"
  animate="show"
>
  {features.map(f => (
    <motion.div key={f.slug} variants={itemVariants}>
      <FeatureCard feature={f} />
    </motion.div>
  ))}
</motion.div>
```

## Hover Effects

```tsx
<motion.div
  whileHover={{ scale: 1.02, y: -2 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="cursor-pointer"
>
  <Card>...</Card>
</motion.div>
```

## Page Transition

```tsx
<motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.25 }}
>
  {children}
</motion.main>
```
