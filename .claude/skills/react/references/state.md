---
description: Documents local state patterns, lifting state, and boolean naming conventions used in the Sasquatch project.
globs: src/**/*.tsx
---

# State Management

## Local State with useState

```tsx
const [isOpen, setIsOpen] = useState(false);
const [activeTab, setActiveTab] = useState('overview');
const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);
```

## Boolean Naming Conventions

Always prefix boolean state with `is`, `has`, or `should`:

```tsx
const [isLoading, setIsLoading] = useState(false);
const [isExpanded, setIsExpanded] = useState(false);
const [hasError, setHasError] = useState(false);
const [shouldShowBanner, setShouldShowBanner] = useState(true);
```

## Lifting State

When siblings need shared state, lift to their common parent:

```tsx
export function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
      <FeatureGrid category={activeCategory} />
    </>
  );
}
```

## Toggling Boolean State

Use functional updater to avoid stale closure issues:

```tsx
<button onClick={() => setIsOpen(prev => !prev)}>Toggle</button>
```

## Derived State

Avoid redundant state — derive values from existing state:

```tsx
// Derive, don't store
const filteredFeatures = allFeatures.filter(f =>
  activeCategory === 'all' || f.category === activeCategory
);

// Not this:
const [filteredFeatures, setFilteredFeatures] = useState(allFeatures); // avoid
```

## No Global State Library

This project uses no Redux, Zustand, or Context for global state. All state is local or prop-drilled. If global state is needed, consider React Context.
