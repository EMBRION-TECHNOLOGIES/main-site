# EMBRION Brand Color Scheme

## Primary Brand Colors

### Core Colors
- **EMBRION Blue**: `#031273` - Primary brand color (dark blue hexagon)
- **EMBRION Black**: `#000000` - Secondary brand color (text)
- **EMBRION White**: `#ffffff` - Accent color (E letter inside hexagon)

### CSS Variables
```css
:root {
  --embrion-blue: #031273;
  --embrion-black: #000000;
  --embrion-white: #ffffff;
}
```

## Color Usage

### Primary Elements
- **Primary**: EMBRION Blue (`#031273`)
  - Buttons, links, focus states
  - Primary actions and highlights
  - Logo and brand elements

### Button Variants
- **Default**: EMBRION Blue background with white text
- **Secondary**: EMBRION Black background with white text
- **Outline**: EMBRION Blue border with blue text, hover to blue background
- **Ghost**: Transparent with EMBRION Blue text on hover
- **Link**: EMBRION Blue text with underline

### Secondary Elements
- **Secondary**: EMBRION Black (`#000000`)
  - Text content
  - Secondary buttons
  - Borders and dividers

### Accent Elements
- **Accent**: EMBRION White (`#ffffff`)
  - Text on dark backgrounds
  - Icons and symbols
  - Contrast elements

## Tailwind Utility Classes

### Text Colors
```css
.text-embrion-blue    /* #031273 */
.text-embrion-black   /* #000000 */
.text-embrion-white   /* #ffffff */
```

### Background Colors
```css
.bg-embrion-blue      /* #031273 */
.bg-embrion-black     /* #000000 */
.bg-embrion-white     /* #ffffff */
```

### Border Colors
```css
.border-embrion-blue  /* #031273 */
.border-embrion-black /* #000000 */
.border-embrion-white /* #ffffff */
```

### Background Colors with Opacity
```css
.bg-embrion-blue/10   /* #031273 with 10% opacity - for active tab backgrounds */
.bg-embrion-blue/20   /* #031273 with 20% opacity - for hover states */
```

### Ring Colors (Focus States)
```css
.ring-embrion-blue    /* #031273 */
.ring-embrion-black   /* #000000 */
.ring-embrion-white   /* #ffffff */
```

## Theme Integration

### Light Theme
- Primary: EMBRION Blue
- Secondary: EMBRION Black
- Accent: EMBRION White
- Background: White
- Text: Dark

### Dark Theme
- Primary: EMBRION Blue
- Secondary: EMBRION White
- Accent: EMBRION White
- Background: Dark
- Text: Light

## Implementation Examples

### Important Note on Color Usage
Due to potential CSS utility class conflicts, we now use **explicit hex colors** in components:
- **EMBRION Blue**: `#031273` (instead of `bg-embrion-blue`)
- **EMBRION Black**: `#000000` (instead of `bg-embrion-black`)
- **EMBRION White**: `#ffffff` (instead of `text-embrion-white`)

This ensures consistent rendering across all browsers and build systems.

### Button with Brand Colors
```tsx
// Default button (EMBRION Blue)
<Button>
  Get Started
</Button>

// Secondary button (EMBRION Black)
<Button variant="secondary">
  Learn More
</Button>

// Outline button (EMBRION Blue border)
<Button variant="outline">
  View Details
</Button>

// Ghost button (EMBRION Blue text)
<Button variant="ghost">
  Read More
</Button>

// Link button (EMBRION Blue text)
<Button variant="link">
  Contact Us
</Button>
```

**Note**: All button variants now use explicit hex colors (`#031273` for EMBRION Blue) to ensure proper rendering across all browsers and build systems.

### Text with Brand Colors
```tsx
<h1 className="text-embrion-blue font-bold">
  EMBRION Technologies
</h1>
```

### Border with Brand Colors
```tsx
<div className="border-2 border-embrion-blue rounded-lg p-4">
  Content with brand border
</div>
```

### Active Tab Styling
```tsx
// Active tab with brand blue color
<Link 
  href="/about" 
  className={`${
    isActive('/about') 
      ? 'text-embrion-blue' 
      : 'text-muted-foreground hover:text-foreground'
  }`}
>
  About
</Link>

// Active tab with background highlight
<div className={`${
  isActive('/about') 
    ? 'text-embrion-blue bg-embrion-blue/10' 
    : 'text-muted-foreground'
}`}>
  Tab Content
</div>
```

## Accessibility

### Contrast Ratios
- EMBRION Blue on White: **Excellent** (15.6:1)
- EMBRION Black on White: **Excellent** (21:1)
- EMBRION White on Blue: **Excellent** (15.6:1)

### Color Blindness
- All brand colors maintain good distinction for color-blind users
- Blue and black provide sufficient contrast
- White provides excellent contrast on dark backgrounds

## File Locations

- **CSS Variables**: `src/app/globals.css`
- **Logo Components**: `src/components/ui/logo.tsx`
- **Brand Documentation**: `BRAND_COLORS.md`

## Usage Guidelines

1. **Primary Actions**: Use EMBRION Blue
2. **Text Content**: Use EMBRION Black on light backgrounds
3. **Accents**: Use EMBRION White for contrast
4. **Consistency**: Always use the defined CSS variables
5. **Accessibility**: Ensure sufficient contrast ratios
6. **Branding**: Apply consistently across all components
