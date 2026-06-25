# Sasquatch Marketing Website

A modern marketing website for Sasquatch, a permit intelligence platform that helps contractors manage permits, inspections, and jobs in one place. Built from a Figma design, this site showcases the product's features, pricing, and governance information to potential customers.

## Tech Stack

| Layer | Technology | Version | Purpose |
|-------|-----------|---------|---------|
| Runtime | Node.js | 18+ | JavaScript execution |
| Framework | React | 18.3.1 | UI library and components |
| Router | React Router | 7.13.0 | Client-side routing |
| Build Tool | Vite | 6.3.5 | Fast development and production builds |
| Language | TypeScript | Latest | Type-safe JavaScript |
| Styling | Tailwind CSS | 4.1.12 | Utility-first CSS framework |
| UI Library | Radix UI | Latest | Accessible, unstyled components |
| Icons | Lucide React | 0.487.0 | Icon library |
| UI Components | Material-UI | 7.3.5 | Additional UI components |
| Package Manager | npm | Latest | Dependency management |

## Quick Start

```bash
# Prerequisites
- Node.js 18+ or latest LTS
- npm or compatible package manager

# Installation
git clone [repo]
cd sasquatch-site
npm install

# Development
npm run dev
# Opens at http://localhost:5173

# Build for production
npm run build

# Output
# Production build in dist/
```

## Project Structure

```
sasquatch-site/
├── src/
│   ├── main.tsx                 # Entry point
│   ├── app/
│   │   ├── App.tsx              # Router provider
│   │   ├── routes.tsx           # Route definitions
│   │   ├── components/
│   │   │   ├── ui/              # Radix UI primitive wrappers
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   └── [40+ other primitives]
│   │   │   ├── figma/           # Figma-specific components
│   │   │   ├── Navigation.tsx    # Top navigation
│   │   │   ├── Footer.tsx        # Page footer
│   │   │   ├── FeatureCard.tsx   # Feature display card
│   │   │   └── StatusChip.tsx    # Status indicator
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── FeaturesPage.tsx
│   │   │   ├── PricingPage.tsx
│   │   │   ├── JurisdictionsPage.tsx
│   │   │   ├── AboutPage.tsx
│   │   │   ├── ContactPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   ├── GovernancePage.tsx
│   │   │   ├── NewsletterPage.tsx
│   │   │   ├── TermsOfServicePage.tsx
│   │   │   └── features/
│   │   │       └── FeatureDetailPage.tsx
│   │   └── data/
│   │       └── features.ts       # Feature definitions
│   └── styles/
│       ├── index.css             # Global styles
│       ├── theme.css             # Theme variables
│       ├── tailwind.css          # Tailwind directives
│       └── fonts.css             # Font definitions
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts (if exists)
├── index.html
└── README.md
```

## Architecture Overview

This is a multi-page marketing website built as a Single Page Application (SPA) with React Router. The architecture follows a clear separation of concerns:

- **Pages**: Top-level route components that correspond to URL paths
- **Components**: Reusable UI components, split into two categories:
  - `ui/`: Primitive components (buttons, cards, dropdowns) that wrap Radix UI with styling
  - Custom components (Navigation, Footer, FeatureCard) that compose primitives
- **Data**: Feature definitions and other static content in `data/`
- **Styles**: Centralized CSS custom properties for theming (colors, fonts, spacing)

### Key Modules

| Module | Location | Purpose |
|--------|----------|---------|
| Navigation | `components/Navigation.tsx` | Fixed top nav with menu (responsive) |
| Routes | `app/routes.tsx` | Central route configuration |
| Features Data | `app/data/features.ts` | Array of 30+ feature definitions |
| UI Primitives | `components/ui/` | Radix UI wrapped components with Tailwind styling |
| Pages | `app/pages/` | Page components for each route |

## Development Guidelines

### Code Style

**File Naming:**
- Component files: PascalCase (`Navigation.tsx`, `FeatureCard.tsx`, `HomePage.tsx`)
- UI primitive files: lowercase with hyphens (`button.tsx`, `dropdown-menu.tsx`, `alert-dialog.tsx`)
- Utility/data files: camelCase (`features.ts`, `utils.ts`)
- Test files: co-locate with source using `.test.tsx` or `.spec.tsx` suffix

**Code Naming:**
- Component functions: PascalCase (`export function Navigation()`, `export function HomePage()`)
- Regular functions: camelCase (`const handleScroll = () => {}`, `function formatDate()`)
- Variables: camelCase (`const scrolled`, `let mobileMenuOpen`)
- Constants: SCREAMING_SNAKE_CASE (`const MAX_ITEMS = 10`)
- Boolean variables: prefix with `is`, `has`, or `should` (`const isOpen`, `const hasPermission`)
- Hook files: camelCase with `use` prefix (`use-mobile.ts`)
- Hook functions: camelCase with `use` prefix (`export function useMobile()`)

**Type Conventions:**
- Props interfaces: `[ComponentName]Props` (e.g., `FeatureCardProps`)
- Use `type` keyword for type imports: `import type { Feature } from './types'`
- Define interfaces and types near where they're used

### Import Order

```typescript
// 1. React and external packages
import { useState } from 'react';
import { Link } from 'react-router';
import { CheckCircle2 } from 'lucide-react';

// 2. Internal absolute imports using @/ alias
import { Navigation } from '@/components/Navigation';
import { allFeatures } from '@/data/features';

// 3. Relative imports
import { Button } from '../ui/button';
import { Card } from '../ui/card';

// 4. Type imports (must use 'type' keyword)
import type { Feature } from '@/types';
import type { FeatureCardProps } from './FeatureCard';

// 5. Styles (if separate CSS files)
import './styles.css';
```

### Styling Approach

**Primary: Tailwind CSS**
- Use Tailwind utility classes for layout and spacing
- Example: `className="flex items-center gap-3 p-6 rounded-lg"`

**Secondary: CSS Custom Properties**
- Theme colors, fonts, and spacing defined as CSS variables
- Examples: `--font-display`, `--font-body`, `--font-mono`, color hex values
- Applied via inline `style={}` props for semantic coloring

**Radix UI Primitives**
- Use Radix components from `components/ui/` (pre-styled with Tailwind)
- Combine with custom `className` for additional styling
- Example: `<Button variant="ghost" className="border border-[#1A3D2B]">`

**Avoid:**
- Writing raw CSS (use Tailwind utilities instead)
- CSS-in-JS libraries beyond inline styles (project uses CSS custom properties)
- Utility classes outside of Tailwind scope

### Component Patterns

**Functional Components with Hooks:**
```typescript
export function MyComponent() {
  const [state, setState] = useState(false);

  return <div>{/* JSX */}</div>;
}
```

**Props and TypeScript:**
```typescript
interface MyComponentProps {
  icon: LucideIcon;
  title: string;
  onSelect?: () => void;
}

export function MyComponent({ icon: Icon, title, onSelect }: MyComponentProps) {
  // Use Icon as LucideIcon component
  return <Icon className="w-6 h-6" />;
}
```

**Conditional Rendering:**
- Use ternary operators for simple conditions
- Use && for "show if true" patterns
- Keep JSX readable and avoid deeply nested conditions

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload (port 5173) |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |

## Route Structure

All routes defined in `src/app/routes.tsx`:

| Path | Component | Purpose |
|------|-----------|---------|
| `/` | `HomePage` | Hero, features overview, benefits |
| `/features` | `FeaturesPage` | Full feature listing with cards |
| `/features/:slug` | `FeatureDetailPage` | Individual feature detail page |
| `/pricing` | `PricingPage` | Pricing tiers and plans |
| `/jurisdictions` | `JurisdictionsPage` | Supported jurisdictions list |
| `/about` | `AboutPage` | Company information |
| `/governance` | `GovernancePage` | Governance and policies |
| `/newsletter` | `NewsletterPage` | Newsletter signup |
| `/terms` | `TermsOfServicePage` | Terms of service |
| `/contact` | `ContactPage` | Contact form |
| `/login` | `LoginPage` | App login redirect |

## Environment Variables

No environment variables required for development. If deploying:

| Variable | Required | Purpose | Example |
|----------|----------|---------|---------|
| `VITE_API_BASE_URL` | No | Backend API endpoint | `https://api.example.com` |

Note: Environment variables should be prefixed with `VITE_` to be accessible in the frontend.

## Key Dependencies

**Core:**
- `react`: UI library
- `react-router`: Client-side routing
- `typescript`: Type safety

**UI & Styling:**
- `tailwindcss`: Utility-first CSS
- `@radix-ui/*`: 40+ accessible unstyled components
- `lucide-react`: Icon library
- `@mui/material`, `@mui/icons-material`: Additional components
- `@emotion/react`, `@emotion/styled`: CSS-in-JS (for MUI)

**Forms & Interactions:**
- `react-hook-form`: Form state management
- `cmdk`: Command palette
- `react-dnd`: Drag and drop
- `react-resizable-panels`: Resizable UI panels

**Utilities:**
- `clsx`, `tailwind-merge`: Class name utilities
- `date-fns`: Date formatting and manipulation
- `recharts`: Charts and visualizations
- `embla-carousel-react`: Carousel component
- `react-responsive-masonry`: Masonry layouts
- `sonner`: Toast notifications
- `next-themes`: Theme management
- `motion`: Animations
- `vaul`: Drawer animations

## CSS Custom Properties

The site uses CSS custom properties (variables) for semantic theming:

```css
--font-display    /* Display/heading font */
--font-body       /* Body/content font */
--font-mono       /* Monospace font */
```

Color values are defined as hex codes and applied inline via `style={}` props. Primary colors:
- `#1A3D2B` - Primary green
- `#1A1F1C` - Dark text
- `#5A6560` - Secondary gray
- `#ECEEED` - Light border
- `#E6F4EC` - Light green background
- `#4CAF70` - Accent green

## Vite Configuration

Configured in `vite.config.ts`:
- **Plugins**: React and Tailwind CSS (both required, do not remove)
- **Path alias**: `@` maps to `src/`
- **Asset support**: SVG and CSV files for raw imports
- **Note**: Tailwind plugin required even if not actively used (per comment in config)

## Testing

No testing framework is currently set up. When adding tests:
- Use Jest or Vitest with React Testing Library
- Co-locate tests with components using `.test.tsx` or `.spec.tsx` suffix
- Test user interactions and component behavior, not implementation

## Deployment

This is a static SPA. Deploy to any static hosting:

**Before deploying:**
```bash
npm run build
```

**Output:** `dist/` directory contains production-ready files

**Common hosts:** Vercel, Netlify, GitHub Pages, AWS S3, Cloudflare Pages

**Important:** Configure your host to serve `index.html` for all routes (SPA routing requirement)

## Additional Resources

- **Figma Design**: https://www.figma.com/design/FmA4M5HN764yWNUWMMDXsK/Sasquatch-Marketing-Website-Design
- **Radix UI Docs**: https://www.radix-ui.com/
- **Tailwind CSS Docs**: https://tailwindcss.com/
- **React Router Docs**: https://reactrouter.com/
- **Vite Docs**: https://vitejs.dev/


## Skill Usage Guide

When working on tasks involving these technologies, invoke the corresponding skill:

| Skill | Invoke When |
|-------|-------------|
| react | Manages React components, hooks, and functional component patterns |
| typescript | Enforces TypeScript type safety and strict mode configurations |
| tailwind | Applies Tailwind CSS utility classes for responsive designs |
| react-router | Handles client-side routing and navigation for SPA applications |
| vite | Configures Vite build tool, bundling, and development server |
| radix-ui | Uses Radix UI accessible primitives with custom Tailwind styling |
| frontend-design | Applies UI design with Tailwind CSS, CSS variables, and Radix UI |
| material-ui | Integrates Material-UI components and Material Design patterns |
| react-hook-form | Manages form state, validation, and submission handlers |
| emotion | Handles CSS-in-JS styling for Material-UI components |
| framer-motion | Implements animations and transitions with Framer Motion |
| recharts | Creates charts and data visualizations with Recharts |
| date-fns | Formats and manipulates dates using date-fns utilities |
| lucide-react | Renders icon components from Lucide React icon library |
| sonner | Displays toast notifications using Sonner notification library |
| react-dnd | Implements drag and drop interactions with React DnD |
| embla-carousel | Creates responsive carousels with Embla Carousel |
| react-resizable-panels | Manages resizable UI panels and flexible layouts |
| next-themes | Handles theme switching and persistence with Next Themes |
| cmdk | Implements command palette functionality with cmdk library |
| vaul | Creates animated drawer components with Vaul library |
| react-responsive-masonry | Builds responsive masonry layouts with React |
