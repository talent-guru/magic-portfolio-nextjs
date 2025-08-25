Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features stunning visual effects, smooth animations, and a professional design that showcases expertise as a Full-Stack Developer.

## ✨ Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Interactive Animations**: Smooth scroll animations powered by Framer Motion
- **Particle Effects**: Dynamic background particles for visual appeal
- **Responsive Layout**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🚀 Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, CSS Modules
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── HeroSection.tsx      # Hero section with particle effects
│   ├── AboutSection.tsx     # About section with stats
│   ├── ExperienceSection.tsx # Professional experience
│   ├── SkillsSection.tsx    # Technical skills showcase
│   ├── ContactSection.tsx   # Contact form and information
│   ├── Navigation.tsx       # Navigation bar
│   └── Footer.tsx           # Footer component
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Project dependencies
└── README.md               # Project documentation
```

## 🎨 Design Features

### Visual Effects
- **Particle System**: Animated background particles
- **Glass Morphism**: Modern glass-like UI elements
- **Gradient Text**: Eye-catching gradient text effects
- **Smooth Animations**: Scroll-triggered animations
- **Hover Effects**: Interactive hover states and transitions

### Color Scheme
- **Primary**: Blue tones (#0ea5e9)
- **Accent**: Purple/pink tones (#d946ef)
- **Dark**: Dark theme with various gray shades
- **Gradients**: Beautiful gradient combinations throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:talent-guru/magic-portfolio-nextjs.git
   cd magic-portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Personal Information
Update the following files to customize the portfolio:

- **Personal Details**: Edit `components/HeroSection.tsx`
- **Experience**: Modify `components/ExperienceSection.tsx`
- **Skills**: Update `components/SkillsSection.tsx`
- **Contact Info**: Edit `components/ContactSection.tsx`

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Animations**: Adjust animation timings in component files
- **Layout**: Customize spacing and layout in component files

### Content
- **Text Content**: Update all text content in component files
- **Images**: Replace placeholder images with your own
- **Links**: Update social media and contact links

## 🌟 Key Sections

### Hero Section
- Animated text rotation
- Particle background effects
- Call-to-action buttons
- Smooth scroll indicator

### About Section
- Professional summary
- Key statistics and achievements
- Animated stat cards

### Experience Section
- Professional work history
- Technology tags
- Animated timeline cards

### Skills Section
- Categorized technical skills
- Interactive skill cards
- Color-coded categories

### Contact Section
- Contact form
- Contact information
- Social media links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full-featured experience with all animations
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
- **Netlify**: Build and deploy from Git
- **AWS Amplify**: Full-stack deployment
- **Traditional Hosting**: Build and upload static files

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
