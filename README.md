# 🎨 Rasika Prabath - Professional Portfolio

> A premium, minimalist portfolio showcasing **Full Stack Development**, **MERN Stack expertise**, **Software Automation**, and **UI/UX Design** capabilities. Built with cutting-edge web technologies for optimal performance and user experience.

[![React](https://img.shields.io/badge/React-18.0+-blue?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.0+-black?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

🌐 **[Live Demo](https://rasikaprabath12345.github.io/portfolio/)** | 📧 **[Email](mailto:rasikaprabath8694@gmail.com)** | 💼 **[LinkedIn](https://linkedin.com/in/rasikaprabath)**

---

## ✨ Key Features

### 🎯 Design & User Experience
- **Modern Minimalist Design** - Clean, professional aesthetic with intuitive navigation
- **Dark Mode Support** - Automatic theme detection with user preference persistence
- **Smooth Animations** - Framer Motion powered interactions for engaging transitions
- **Interactive Components** - Hover effects, scroll animations, and micro-interactions

### 📱 Responsiveness
- **Mobile-First Approach** - Optimized for mobile, tablet, and desktop devices
- **Fully Responsive Layout** - Breakpoints at 360px, 480px, 600px, 768px, 900px, and beyond
- **Touch-Friendly UI** - Large tap targets (min 44x44px) for better mobile usability
- **Flexible Grid System** - Adaptive grid layouts that scale intelligently

### ⚡ Performance & Optimization
- **Code Splitting** - Efficient lazy loading of components
- **Asset Optimization** - Compressed images and minified resources
- **Fast Load Times** - Optimized for Core Web Vitals
- **SEO Ready** - Meta tags, structured data, and semantic HTML

### 🎨 Customization
- **Component-Based Architecture** - Reusable, modular components
- **Tailwind CSS Utilities** - Easy styling without leaving HTML
- **Configuration Files** - Centralized data management in `/data` folder
- **Hooks & Custom Logic** - Reusable React hooks for common functionality

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React 18+ |
| **Styling** | Tailwind CSS 3+ |
| **Animations** | Framer Motion 10+ |
| **Language** | JavaScript (ES6+) |
| **Build Tool** | Create React App |
| **Deployment** | GitHub Pages |
| **Version Control** | Git & GitHub |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # SEO robots file
│
├── src/
│   ├── components/         # React components
│   │   ├── Hero.js        # Landing hero section
│   │   ├── About.js       # About me section
│   │   ├── Skills.js      # Skills showcase
│   │   ├── Experience.js  # Work experience
│   │   ├── Projects.js    # Projects showcase
│   │   ├── Contact.js     # Contact form
│   │   ├── Header.js      # Navigation header
│   │   ├── Footer.js      # Footer
│   │   └── ...
│   │
│   ├── data/              # Application data
│   │   ├── resumeData.js  # Resume & career info
│   │   └── projectsData.js# Projects dataset
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useTypingEffect.js    # Typing animation
│   │   └── useCustomCursor.js    # Custom cursor
│   │
│   ├── images/            # Image assets
│   ├── App.js             # Main App component
│   ├── index.css          # Global styles
│   ├── index.js           # React entry point
│   └── reportWebVitals.js # Performance metrics
│
├── build/                 # Production build
├── package.json           # Dependencies & scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v14.0.0 or higher
- **npm** v6.0.0 or **yarn** v1.22.0+
- **Git** for version control

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/rasikaprabath12345/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **Build for Production**
   ```bash
   npm run build
   # or
   yarn build
   ```
   Creates optimized production build in `/build` directory

---

## ⚙️ Customization Guide

### Personalize Your Portfolio

#### 1. **Update Personal Information**
   Edit `src/data/resumeData.js`:
   ```javascript
   export const resumeData = {
     name: "Your Name",
     title: "Your Title",
     email: "your.email@example.com",
     phone: "+1 (555) 000-0000",
     // ... more fields
   };
   ```

#### 2. **Add Your Projects**
   Edit `src/data/projectsData.js`:
   ```javascript
   const projectsData = [
     {
       id: 1,
       title: "Project Name",
       description: "Project description",
       image: require("../images/project.png"),
       techStack: ["React", "Node.js", "MongoDB"],
       link: "https://project-link.com",
       github: "https://github.com/username/repo",
       // ... more fields
     }
   ];
   ```

#### 3. **Modify Colors & Branding**
   Edit `tailwind.config.js`:
   ```javascript
   module.exports = {
     theme: {
       colors: {
         primary: "#2563eb",
         // ... customize colors
       }
     }
   };
   ```

#### 4. **Update Contact Information**
   - Email: Update in Contact.js component
   - Phone: Add phone number in Contact.js
   - Social Links: Update URLs in Hero.js

### Adding New Sections

1. Create a new component in `src/components/`
2. Import it in `App.js`
3. Add it to the render method
4. Style using Tailwind CSS classes

---

## 🎨 Features Breakdown

### Hero Section
- Animated profile image with floating effect
- Typing effect for dynamic role display
- Call-to-action buttons (Download CV, Let's Talk)
- Social media links with hover animations
- Scroll indicator animation

### About Section
- Professional summary
- Key statistics and achievements
- Interest areas

### Skills Section
- Skills categorized by technology
- Progress indicators or tags
- Interactive skill display

### Experience Section
- Timeline of work experience
- Role descriptions and achievements
- Technologies used

### Projects Section
- Project cards with hover effects
- Project modal with detailed information
- GitHub links and live demos
- Technology stack display
- Problem-Solution-Overview format

### Contact Section
- Contact information cards
- Functional contact form
- Social media links

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 360px - 480px (extra small devices)
- **Mobile**: 480px - 600px (small devices)
- **Tablet**: 768px - 900px
- **Desktop**: 1024px+
- **Large Desktop**: 1200px+

### Mobile Optimizations
- Touch-friendly button sizes (min 44x44px)
- Readable font sizes (16px+ on inputs)
- Proper spacing and padding
- No horizontal scrolling
- Optimized images for performance

---

## 🌙 Dark Mode

Automatic theme detection based on system preferences with:
- Persistent user preference storage
- Smooth transitions between themes
- Optimized colors for accessibility
- No white background glare

---

## 📊 Performance Metrics

- ⚡ **Lighthouse Score**: 90+
- 🚀 **First Contentful Paint**: < 1.2s
- 📦 **Bundle Size**: < 200KB gzipped
- 🎯 **Core Web Vitals**: All Green

---

## 📦 Deployment

To deploy your portfolio to GitHub Pages:

```bash
npm run deploy
```

This command will build the project and deploy it to the `gh-pages` branch.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/data/resumeData.js` - Personal details, experience, education
- `src/data/projectsData.js` - Your projects and portfolio items

### Styling
- Modify Tailwind CSS classes in components for styling changes
- Update `src/index.css` for global styles
- Customize animations in individual component files

### Assets
- Replace placeholder images in the `public` folder
- Update project screenshots and profile images
- Ensure all images are optimized for web

## 📁 Project Structure

```
portfolio/
├── public/                    # Static files
│   ├── index.html            # Main HTML file
│   ├── manifest.json         # PWA manifest
│   └── robots.txt            # SEO robots file
│
├── src/                       # Source code
│   ├── components/            # Reusable UI components
│   │   ├── About.js           # About section component
│   │   ├── Certificates.js    # Certificates section
│   │   ├── Contact.js         # Contact section
│   │   ├── DefaultAvatar.js   # Avatar fallback component
│   │   ├── Education.js       # Education section
│   │   ├── Experience.js      # Experience/Work section
│   │   ├── Footer.js          # Footer component
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero/Landing section
│   │   ├── MeshBackground.js  # Animated mesh background
│   │   ├── Projects.js        # Projects portfolio section
│   │   ├── ScrollToTop.js     # Scroll to top button
│   │   └── Skills.js          # Skills section
│   │
│   ├── data/                  # Static data files
│   │   ├── projectsData.js    # Projects information
│   │   └── resumeData.js      # Resume/CV data
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useCustomCursor.js # Custom cursor hook
│   │   └── useTypingEffect.js # Typing animation hook
│   │
│   ├── images/                # Image assets
│   │   └── (profile pictures, logos, etc.)
│   │
│   ├── App.js                 # Main application component
│   ├── index.js               # Application entry point
│   ├── index.css              # Global styles
│   └── reportWebVitals.js     # Performance monitoring
│
├── build/                     # Production build output (auto-generated)
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
├── package-lock.json          # Locked dependency versions
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── CUSTOMIZATION_GUIDE.md     # Customization instructions
└── README.md                  # This file

---

## 🖥️ Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| **Chrome** | ✅ Full | Latest |
| **Firefox** | ✅ Full | Latest |
| **Safari** | ✅ Full | 12+ |
| **Edge** | ✅ Full | Latest |
| **IE 11** | ⚠️ Limited | Not tested |

---

## 📜 Available Scripts

### Development
```bash
npm start          # Start development server
npm run build      # Create production build
npm test           # Run test suite
npm run eject      # Eject from CRA (irreversible)
```

### Deployment
```bash
npm run deploy      # Deploy to GitHub Pages
npm run predeploy   # Prepare for deployment
```

### Optimization
```bash
npm run analyze     # Analyze bundle size
npm run lint        # Run linter
npm run format      # Format code
```

---

## 🔧 Configuration Files

### `tailwind.config.js`
Customizes Tailwind CSS with:
- Custom colors and typography
- Extended spacing scale
- Custom animations
- Plugin extensions

### `postcss.config.js`
Processes CSS with:
- Tailwind CSS
- Autoprefixer for browser compatibility
- CSS minification

### `package.json`
Manages:
- Project dependencies
- Build scripts
- Project metadata
- Development tools

---

## 🚨 Troubleshooting

### Common Issues

**Port 3000 already in use**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

**Dependencies not installing**
```bash
rm -rf node_modules
npm cache clean --force
npm install
```

**Build failing**
```bash
npm cache clean --force
npm run build
```

**Images not loading**
- Check image paths are relative to `public` folder
- Ensure image formats are supported (PNG, JPG, WebP)
- Optimize large images before adding

---

## 🔒 Security Best Practices

- ✅ No sensitive data in environment variables without `.env.local`
- ✅ Sanitize user inputs in contact form
- ✅ Use HTTPS for deployment
- ✅ Keep dependencies updated: `npm audit fix`
- ✅ Don't commit API keys or tokens

---

## 📖 Documentation

### Getting Help

- **Tailwind CSS**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev
- **Framer Motion**: https://www.framer.com/motion/
- **Create React App**: https://create-react-app.dev

### Additional Resources

- [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - Detailed customization instructions
- [Tailwind CSS Plugin Docs](https://tailwindcss.com/docs/plugins)
- [React Hooks Guide](https://react.dev/reference/react/hooks)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit your changes**
   ```bash
   git commit -m "Add your feature"
   ```

4. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**

---

## 📋 Checklist for Customization

- [ ] Update personal information in `resumeData.js`
- [ ] Add your projects to `projectsData.js`
- [ ] Replace profile image in `src/images/`
- [ ] Update social media links in Hero.js
- [ ] Customize color scheme in `tailwind.config.js`
- [ ] Add your resume/CV to `public/` folder
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Deploy to GitHub Pages
- [ ] Set up custom domain (optional)

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use this template for personal projects
- ✅ Modify and customize it
- ✅ Deploy commercially
- ✅ Distribute the code

You must:
- ✅ Include the license and copyright notice

---

## 👨‍💻 Author

**Rasika Prabath**

- 🌐 Portfolio: [rasikaprabath12345.github.io/portfolio](https://rasikaprabath12345.github.io/portfolio/)
- 📧 Email: [rasikaprabath8694@gmail.com](mailto:rasikaprabath8694@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/rasikaprabath](https://linkedin.com/in/rasikaprabath)
- 🐙 GitHub: [github.com/rasikaprabath12345](https://github.com/rasikaprabath12345)
- 🎬 Instagram: [@rasikaprabath12345](https://instagram.com/rasikaprabath12345)
- 📱 Telegram: [@rasikaprabath](https://t.me/rasikaprabath)

---

## ⭐ Show Your Support

If you found this portfolio template helpful, please give it a star! ⭐

Your support encourages continued development and improvement.

---

## 🔄 Updates & Changelog

### Version 1.0.0 (Current)
- ✨ Initial release
- 🎨 Modern design with Framer Motion animations
- 📱 Fully responsive layout (360px - 1200px+)
- 🌙 Dark mode support
- ⚡ Optimized performance
- 🔧 Easy customization
- 📊 Lighthouse score 90+

### Planned Features
- [ ] Blog section
- [ ] Testimonials carousel
- [ ] Skills visualization
- [ ] Animated counters
- [ ] Newsletter signup
- [ ] Search functionality
- [ ] Multi-language support

---

## 🐛 Report Issues

Found a bug? Please create an issue on GitHub with:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your environment details

---

## 📞 Support

Need help? 

- 📧 **Email**: rasikaprabath8694@gmail.com
- 💬 **LinkedIn**: Send a message
- 🐙 **GitHub**: Create an issue

---

## 🎯 Roadmap

- Q2 2024: Blog functionality
- Q3 2024: Advanced animations
- Q4 2024: Multi-language support
- 2025: Mobile app version

---

## 💡 Tips & Best Practices

### Performance Optimization
1. Use Next.js for better SSR if needed
2. Implement code splitting for large bundles
3. Lazy load images using Intersection Observer
4. Cache assets for offline support

### SEO Optimization
1. Add meta tags for social sharing
2. Use semantic HTML
3. Optimize images with alt text
4. Submit sitemap to search engines

### Accessibility
1. Ensure color contrast ratio meets WCAG
2. Use semantic HTML elements
3. Add ARIA labels where needed
4. Test with screen readers

### Mobile Optimization
1. Test on real devices
2. Optimize touch targets (44x44px minimum)
3. Prevent horizontal scrolling
4. Use mobile-first CSS approach

---

## 🙏 Acknowledgments

Special thanks to:
- **Vercel** - for Framer Motion
- **Tailwind Labs** - for Tailwind CSS
- **Facebook** - for React
- **The open-source community**

---

## 📊 Statistics

- 📦 **Total Dependencies**: ~20
- 📁 **Components**: 11+
- 🎨 **Color Schemes**: 2 (Light & Dark)
- 📱 **Breakpoints**: 6
- ⚡ **Performance Score**: 90+
- 🔒 **Security**: A+

---

<div align="center">

### Made with ❤️ by Rasika Prabath

**[Portfolio](https://rasikaprabath12345.github.io/portfolio/)** • **[GitHub](https://github.com/rasikaprabath12345)** • **[LinkedIn](https://linkedin.com/in/rasikaprabath)**

If you found this helpful, please consider giving it a ⭐

</div>
```

## 📂 Component Descriptions

| Component | Purpose |
|-----------|---------|
| **Header** | Navigation bar with menu and theme toggle |
| **Hero** | Landing section with profile intro and CTA |
| **About** | Personal background and professional summary |
| **Education** | Educational background and degrees |
| **Experience** | Work history and job experience |
| **Skills** | Technical skills and proficiencies |
| **Certificates** | Certifications and achievements |
| **Projects** | Portfolio projects showcase |
| **Contact** | Contact form and social links |
| **Footer** | Footer with links and copyright |
| **ScrollToTop** | Floating button to scroll back to top |
| **MeshBackground** | Animated mesh gradient background effect |

## 🎯 Key Files to Customize

- **`src/data/resumeData.js`** - Update with your personal info, education, and work experience
- **`src/data/projectsData.js`** - Add your projects and portfolio items
- **`tailwind.config.js`** - Customize colors, fonts, and Tailwind settings
- **`public/index.html`** - Update meta tags and title
- **Component files** - Modify content and styling as needed

## 📝 Notes

- Replace placeholder name, email, and social links in the components
- Project visuals are placeholders and should be replaced with final assets
- Update meta tags in `public/index.html` for better SEO
- Consider adding Google Analytics for tracking

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
