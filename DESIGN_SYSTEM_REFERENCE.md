# V2 Design System - Quick Reference

## Color Palette

### Primary Colors
```
Warm White   #FAFAF8   bg-warmWhite, text-warmWhite
Warm Black   #1A1A18   text-warmBlack
Warm Red     #E63946   text-warmRed, bg-warmRed (accent)
Warm Yellow  #F4D35E   text-warmYellow (subtle highlight)
```

### Warm Gray Scale
```
50   #F9F7F5   bg-warmGray-50, text-warmGray-50 (very light)
100  #F3F0ED   bg-warmGray-100
150  #EDEBE8   bg-warmGray-150
200  #E8E3DE   bg-warmGray-200, border-warmGray-200
300  #D9D0C6   
400  #C9BCB0   
500  #B8A89C   text-warmGray-500
600  #8F7F78   text-warmGray-600
700  #6B5B54   text-warmGray-700 (main text alt)
800  #524138   
900  #3A2B23   text-warmGray-900 (dark text)
```

---

## Typography

### Font Families
```css
Font Heading  Poppins (600-800)   font-heading
Font Body     Inter (300-700)     font-body
```

### Sizes
```
h1   5xl md:text-6xl lg:text-7xl   font-heading font-bold
h2   3xl md:text-4xl lg:text-5xl   font-heading font-bold
h3   2xl md:text-3xl                font-heading font-bold
h4   xl md:text-2xl                 font-heading font-semibold
h5   lg md:text-xl                  font-heading font-semibold
h6   base md:text-lg                font-heading font-semibold
p    base md:text-lg                font-body leading-relaxed
```

---

## Utilities

### Button Classes
```html
<!-- Primary Button -->
<button class="btn-primary">Action</button>
<!-- Red solid, white text, hover shadow -->

<!-- Secondary Button -->
<button class="btn-secondary">Action</button>
<!-- Outline style -->

<!-- Outline Button -->
<button class="btn-outline">Action</button>
<!-- Text only variant -->
```

### Card Classes
```html
<!-- Light Card -->
<div class="card-light">Content</div>
<!-- bg-white, rounded-2xl, border, hover shadow -->

<!-- Minimal Card -->
<div class="card-minimal">Content</div>
<!-- Minimal styling, hover effects -->
```

### Section Spacing
```html
<!-- Full Section Container -->
<section class="section-container">Content</section>
<!-- max-w-7xl mx-auto px-4 -->

<!-- Section Padding -->
<section class="section-padding">Content</section>
<!-- py-16 md:py-24 lg:py-32 -->

<!-- Hero Section -->
<section class="hero-section">Content</section>
<!-- pt-32 pb-24 md:pt-40 md:pb-32 -->

<!-- Section Title -->
<div class="section-title">
  <h2>Title</h2>
  <p>Subtitle</p>
</div>
```

### Grid Layouts
```html
<!-- Service Grid -->
<div class="grid-services">Cards</div>
<!-- grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -->

<!-- Cards Grid -->
<div class="grid-cards">Cards</div>
<!-- grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 -->
```

### Effects
```html
<!-- Warm Glow Effect -->
<span class="warm-glow">Text</span>
<!-- text-warmRed filter-drop-shadow -->

<!-- Warm Hover Effect -->
<div class="warm-hover">Content</div>
<!-- transition hover:text-warmRed -->

<!-- Divider Warm -->
<div class="divider-warm"></div>
<!-- border-top border-warmGray-200 -->
```

### Shadows
```
shadow-soft         0 4px 20px rgba(0,0,0,0.05)
shadow-softHover    0 12px 40px rgba(0,0,0,0.08)
shadow-warmGlow     0 20px 40px rgba(230,57,70,0.08)
```

### Border Radius
```
rounded-xl          20px
rounded-2xl         24px
rounded-3xl         32px
```

### Gradients
```html
<!-- Warm Fade -->
<div class="bg-warmFade">Content</div>
<!-- white to warm gray gradient -->

<!-- Warm Accent -->
<div class="bg-warmAccent">Content</div>
<!-- red gradient -->
```

---

## Common Patterns

### Header Navigation
```tsx
<button className="text-warmBlack hover:text-warmRed transition-colors font-medium">
  Link
</button>
```

### Service Card
```tsx
<div className="card-light hover:shadow-softHover transition">
  <h3 className="text-2xl font-bold text-warmBlack font-heading">Title</h3>
  <p className="text-warmGray-600 font-body">Description</p>
</div>
```

### Primary CTA
```tsx
<button className="btn-primary">
  Call to Action
</button>
```

### Section Header
```tsx
<div className="text-center mb-16">
  <h2 className="text-4xl md:text-5xl font-heading font-bold text-warmBlack mb-4">
    Section Title
  </h2>
  <p className="text-lg text-warmGray-700 font-body max-w-2xl mx-auto">
    Subtitle or description
  </p>
</div>
```

### Hero Section
```tsx
<section className="hero-section pt-20 bg-gradient-to-br from-warmWhite to-warmGray-50">
  <div className="section-container text-center">
    <h1 className="text-5xl md:text-7xl font-bold text-warmBlack mb-6 font-heading">
      Headline
    </h1>
    <p className="text-xl md:text-2xl text-warmGray-700 mb-8 font-body">
      Description
    </p>
  </div>
</section>
```

---

## Responsive Breakpoints
```
sm  640px   md  768px   lg  1024px   xl  1280px   2xl  1536px
```

## Animation & Transitions
```
transition-colors     color changes smoothly
transition-all        all properties change smoothly
hover:shadow-lg       shadow on hover
hover:text-warmRed    color change on hover
hover:scale-110       slight zoom on hover
```

---

## DO's and DON'Ts

### ✅ DO
- Use `warmBlack` for main text
- Use `warmRed` for accents and CTAs
- Use `warmGray-*` for secondary text
- Use `font-heading` for titles
- Use `font-body` for body text
- Use soft shadows for cards
- Use rounded-2xl for modern feel
- Use generous spacing (py-16+, gap-8+)
- Apply hover states to interactive elements

### ❌ DON'T
- Mix gray-* colors with warm colors
- Use harsh shadows
- Use small border-radius (rounded-lg)
- Crowd content (tight spacing)
- Use red-600 instead of warmRed
- Mix different heading fonts
- Forget font-heading on titles

---

## Component Color Reference

| Component | Text | Background | Border | Hover |
|-----------|------|-----------|--------|-------|
| Header | warmBlack | white | warmGray-200 | warmRed |
| Nav Links | warmBlack | - | - | warmRed |
| Buttons | warmRed | warmWhite | - | warmGray-50 |
| Cards | warmBlack | warmGray-50 | warmGray-200 | warmRed |
| Footer | warmGray-600 | warmWhite | warmGray-200 | warmRed |
| Text Primary | warmBlack | - | - | - |
| Text Secondary | warmGray-600 | - | - | - |
| Accent | warmRed | - | - | - |

---

## CSS Variable Usage

```css
/* In Tailwind config or globals.css */
--font-poppins: 'Poppins', system-ui, sans-serif;
--font-inter: 'Inter', system-ui, sans-serif;

/* Color variables (defined in globals.css) */
--color-warm-white: #FAFAF8;
--color-warm-black: #1A1A18;
--color-warm-red: #E63946;
/* ... and others */
```

Usage:
```html
<h1 style="font-family: var(--font-poppins)">Heading</h1>
<p style="color: var(--color-warm-black)">Text</p>
```

---

## Icons & Emojis
```
Tour             ✈️   (plane)
Dokumen          📄   (document)
Study            📚   (books)
Medical          ⚕️   (medical cross)
Chat             💬   (speech bubble)
```

---

## Build & Performance

- **Build Status**: ✅ 42/42 pages compiled
- **First Load**: 87.3 kB shared JS
- **Optimizations**: Static generation, CSS minification
- **Browser Support**: Modern browsers with CSS Grid, Flexbox

---

**V2 Design System v1.0** - Last Updated: [Current Date]
Perfect for warm, modern, travel-focused websites with professional yet friendly aesthetic.
