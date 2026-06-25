---
description: N/A - react-responsive-masonry is not used in form contexts in the Sasquatch project.
globs: src/**/*.tsx
---

# React Responsive Masonry and Forms

`react-responsive-masonry` is not used in form contexts. It is a layout-only component for displaying card grids.

If a filter form needs to control what appears in a masonry grid, connect them via state in a parent component:

```tsx
export function FeaturesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFeatures = allFeatures.filter(f => {
    const matchesQuery = f.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || f.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-8">
      {/* Filter form */}
      <div className="flex gap-4">
        <input
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search features..."
          className="border border-[#ECEEED] rounded-lg px-4 py-2 text-sm"
        />
        <CategoryFilter active={selectedCategory} onChange={setSelectedCategory} />
      </div>

      {/* Masonry grid updates automatically */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1200: 3 }}>
        <Masonry gutter="24px">
          {filteredFeatures.map(f => <FeatureCard key={f.slug} feature={f} />)}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
```
