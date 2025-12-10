# Quad SoftTech - Elite Website

> **"Complexity Resolves to Simplicity"**

A world-class, Fortune-500 grade website for Quad SoftTech built with premium design standards and cinematic animations.

## 🎯 Features

- **Cinematic Hero Animation** - 4-phase GSAP animation sequence
- **Premium Design System** - Black & Gold luxury theme
- **Fully Responsive** - Mobile-first design approach
- **Smooth Animations** - Framer Motion & GSAP powered
- **7 Complete Pages** - Home, Services, Products, About, Portfolio, Career, Contact
- **Reusable Components** - Button, Card, Input, Navbar, Footer
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessibility** - WCAG 2.1 AA compliant

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh) installed on your system

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## 📁 Project Structure

```
quadsoft/
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   ├── HeroAnimation.jsx    # Cinematic hero animation
│   │   │   └── ScrollReveal.jsx     # Scroll-triggered reveals
│   │   ├── layout/
│   │   │   ├── Layout.jsx           # Main layout wrapper
│   │   │   ├── Navbar.jsx           # Navigation component
│   │   │   └── Footer.jsx           # Footer component
│   │   └── ui/
│   │       ├── Button.jsx           # Button component
│   │       ├── Card.jsx             # Card component
│   │       └── Input.jsx            # Input component
│   ├── pages/
│   │   ├── Home.jsx                 # Homepage
│   │   ├── Services.jsx             # Services page
│   │   ├── Products.jsx             # Products page
│   │   ├── About.jsx                # About page
│   │   ├── Portfolio.jsx            # Portfolio page
│   │   ├── Career.jsx               # Career page
│   │   └── Contact.jsx              # Contact page
│   ├── styles/
│   │   └── globals.css              # Global styles
│   ├── utils/
│   │   └── animations.js            # Animation utilities
│   ├── App.jsx                      # Main app component
│   └── main.jsx                     # Entry point
├── public/                          # Static assets
├── index.html                       # HTML template
├── tailwind.config.js               # Tailwind configuration
├── vite.config.js                   # Vite configuration
└── package.json                     # Dependencies
```

## 🎨 Design System

### Color Palette

- **Primary**: Black (#000000) & White (#FFFFFF)
- **Gold Gradient**: #C8A951 → #F1D08A
- **Supporting**: Platinum (#E5E5E5), Charcoal (#1A1A1A), Dark Grey (#2D2D2D)

### Typography

- **Font**: Inter (Google Fonts)
- **Scale**: Hero (72px) → Caption (12px)
- **Weights**: 200, 400, 500, 600

### Spacing

- 8pt grid system
- Tokens: xs (4px) → 6xl (160px)

### Animations

- **Easing**: luxury, smooth, bounce
- **Duration**: 0.3s - 0.8s
- **60fps** performance target

## 🎬 Hero Animation

The cinematic hero animation features a 4-phase sequence:

1. **Formation (0-2s)** - Particles converge to form figures
2. **Interaction (2-4s)** - Figures pulse and connect
3. **Partnership Ring (4-6s)** - Golden ring expands
4. **Reveal (6-8s)** - Transition to main content

## 📱 Pages

1. **Home** - Hero, Services, Products, Testimonials
2. **Services** - All 13 services with detailed descriptions
3. **Products** - 4 flagship products with features
4. **About** - Company story, vision, mission, philosophy
5. **Portfolio** - Project showcase with filtering
6. **Career** - Job openings and benefits
7. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion + GSAP
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Package Manager**: Bun

## 🌟 Key Components

### Button
```jsx
<Button variant="primary" size="lg">Click Me</Button>
```
Variants: primary, secondary, outline, ghost

### Card
```jsx
<Card variant="bordered" hover>Content</Card>
```
Variants: default, elevated, bordered, glass

### Input
```jsx
<Input label="Name" type="text" />
```
Types: text, email, tel, textarea

## 📊 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Animation FPS**: 60fps

## 🔧 Configuration

### Tailwind Config
Custom design tokens, colors, typography, and animations configured in `tailwind.config.js`

### Vite Config
Optimized build settings in `vite.config.js`

## 📞 Contact Information

- **Sales**: +91 9377997794
- **Support**: +91 9377997793
- **Email**: info@quadsofttech.com
- **Website**: www.quadsofttech.com

## 📄 License

© 2024 Quad SoftTech. All rights reserved.

---

**Built with ❤️ by Quad SoftTech**  
*Smarter. Better. Faster.*
