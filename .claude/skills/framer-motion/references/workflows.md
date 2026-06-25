---
description: Documents workflows for implementing page transitions, list animations, and hover effects with framer-motion in the Sasquatch project.
globs: src/**/*.tsx, src/app/routes.tsx
---

# Framer Motion Workflows

## Page Transitions

Wrap route outlet with AnimatePresence and use location key:

```tsx
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router';

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
```

## Animating Lists (Feature Grid)

```tsx
export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      initial="hidden"
      animate="show"
    >
      {features.map(feature => (
        <motion.div
          key={feature.slug}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
          }}
        >
          <FeatureCard feature={feature} />
        </motion.div>
      ))}
    </motion.div>
  );
}
```

## Hover Card Lift

```tsx
<motion.div
  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(26,61,43,0.12)' }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
>
  <Card>...</Card>
</motion.div>
```

## Scroll-Triggered Animation

```tsx
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function Section({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
```
