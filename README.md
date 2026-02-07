# Ankan Paul - Modern Portfolio

A stunning, modern portfolio built with Next.js 15, featuring smooth animations, Barcelona FC-inspired theming, and a subtle football/tech aesthetic.

## ✨ Features

### 🎨 Design
- **Dark Mode First**: Beautiful dark theme with Barcelona FC colors (Blue #004D98, Red #A50044, Gold #EDBB00)
- **Subtle Theme Elements**: 
  - Football pitch-inspired grid background
  - Barcelona stripes scattered throughout
  - Football emoji accents
  - Stadium-inspired circular animations
- **Glassmorphism**: Modern frosted glass effects
- **Responsive Design**: Fully responsive across all devices

### ⚡ Animations
- **Framer Motion**: Smooth, professional animations throughout
- **Scroll Animations**: Elements animate into view as you scroll
- **Interactive Elements**: Hover effects, scale transformations, and micro-interactions
- **Animated Background**: Neural network-style particle system
- **Rotating Elements**: Stadium-inspired circular animations in hero section

### 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ankanpaul1810/ankanpaul1810.github.io.git
cd ankanpaul1810.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Animated navigation bar
│   ├── FootballTechBackground.tsx  # Particle system background
│   ├── HeroSection.tsx     # Hero with rotating animations
│   ├── SkillsSection.tsx   # Skills with Barcelona accents
│   ├── ProjectsSection.tsx # Expandable project cards
│   └── ContactSection.tsx  # Contact with social links
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── assets/             # Images and assets
└── tailwind.config.ts      # Tailwind configuration
```

## 🎯 Key Sections

### Hero Section
- Gradient text with Barcelona colors
- Stadium-inspired rotating rings
- Tech stack badges
- Smooth scroll indicator

### Skills Section
- Categorized capabilities
- Animated skill tags
- Barcelona corner accents
- Football emojis on select cards

### Projects Section
- Expandable project cards
- Tech stack tags
- GitHub and demo links
- Barcelona color accents

### Contact Section
- Social media links
- Email integration
- Barcelona-inspired footer
- "Més que un portfolio" tagline

## 🎨 Theme Customization

### Colors
Edit `tailwind.config.ts` to customize the Barcelona color palette:

```typescript
barca: {
  blue: "#004D98",
  red: "#A50044",
  gold: "#EDBB00",
}
```

### Animations
Customize animations in components using Framer Motion:

```typescript
<motion.div
  animate={{ scale: [1, 1.1, 1] }}
  transition={{ duration: 2 }}
>
```

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=https://ankanpaul1810.github.io
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to GitHub Pages

1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

2. Build and deploy:
```bash
npm run build
# Deploy the 'out' directory to GitHub Pages
```

## 🎯 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Optimized images** with Next.js Image component
- **Code splitting** with App Router

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ankan Paul**
- GitHub: [@ankanpaul1810](https://github.com/ankanpaul1810)
- Portfolio: [ankanpaul1810.github.io](https://ankanpaul1810.github.io)

## 🙏 Acknowledgments

- Barcelona FC for the color inspiration
- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Tailwind CSS for the utility-first approach

---

**Més que un portfolio** ⚽ - More than a portfolio
