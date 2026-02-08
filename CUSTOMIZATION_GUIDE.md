# Portfolio Customization Guide

This guide will help you replace all placeholder content with your actual information.

## 🔧 Quick Setup Checklist

### 1. Personal Information
**File to edit: `src/components/Hero.js`**
- Line 89: Replace `"Hi, I'm Rasika Prabath"` with your name
- Line 105: Update the description paragraph with your own bio

### 2. Contact Information  
**Files to edit:**
- `src/components/Footer.js` - Line 17: Replace email address
- `src/components/Hero.js` - Social media URLs (Lines 143-148)

### 3. Resume/CV Data
**File to edit: `src/data/resumeData.js`**
- **Education**: Replace university names, degrees, and dates
- **Experience**: Update company names, positions, and descriptions  
- **Certificates**: Add your actual certificate links

### 4. Profile Image
- Replace `public/profile.jpg` with your profile photo
- Ensure the image is square (recommended: 400x400px)

### 5. CV/Resume File
- Add your CV as `public/resume.pdf`
- The download link is already configured in `src/components/Hero.js`

### 6. Social Media Links
**File to edit: `src/components/Hero.js` (Lines 143-148)**
Update these URLs with your actual profiles:
- Facebook: `https://facebook.com/your-username`
- GitHub: `https://github.com/your-username` 
- LinkedIn: `https://linkedin.com/in/your-username`
- Instagram: `https://instagram.com/your-username`
- Telegram: `https://t.me/your-username`

### 7. Projects Data
**File to edit: `src/data/projectsData.js`**
- Add your actual projects with descriptions and links
- Replace placeholder project images

### 8. Contact Form
**File to edit: `src/components/Contact.js`**
- Currently configured for demo - integrate with EmailJS, Formspree, or Netlify Forms
- Update placeholder phone number format

### 9. Meta Information
**File to edit: `public/index.html`**
- Update page title, description, and meta tags
- Add your own favicon

## 🚀 After Customization

1. Test your changes locally:
   ```bash
   npm start
   ```

2. Deploy your updates:
   ```bash
   npm run deploy
   ```

## 📝 Notes

- **Images**: All images should be optimized for web (use WebP format if possible)
- **Links**: Test all external links to ensure they work
- **Responsive**: Check your content looks good on mobile devices
- **Performance**: Keep image file sizes under 500KB for better loading

Remember to replace ALL placeholder content with your actual information before deploying!