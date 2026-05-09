# Elite Portfolio

A sophisticated minimalist portfolio for a Software Engineer and UI/UX Designer. Built with React, Tailwind CSS, and Framer Motion.

🌐 **[Live Demo](https://rasikaprabath12345.github.io/portfolio/)**

## ✨ Features

- **Modern Design**: Clean and minimalist interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Fast Performance**: Optimized React application with efficient rendering
- **Easy Customization**: Well-structured components for easy modifications

## 🛠️ Technologies Used

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **JavaScript (ES6+)** - Modern JavaScript features
- **GitHub Pages** - Hosting and deployment

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rasikaprabath12345/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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
