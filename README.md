# Arabo Learning - Islamic Arabic Learning Platform

A modern, responsive landing page for an Islamic Arabic learning platform targeting American Muslims who want to learn Arabic for religious studies.

## Features

- 🎯 **Targeted Content**: Specifically designed for American Muslims learning Arabic for Islamic studies
- 📱 **Responsive Design**: Beautiful on all devices with modern glassmorphism UI
- 📊 **Google Sheets Integration**: Form submissions automatically saved to Google Sheets
- 🎨 **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- ⚡ **Fast Performance**: Optimized with Vite for lightning-fast development and builds

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd arabo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Google Sheets Integration

The contact form automatically sends submissions to Google Sheets. To set this up:

1. Follow the detailed instructions in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md)
2. Update your `.env.local` file with your Google Apps Script URL

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with main value proposition
│   ├── Features.tsx        # Three pillars of learning
│   ├── Testimonials.tsx    # Student success stories
│   ├── Packages.tsx        # Pricing and packages
│   ├── CallToAction.tsx    # Contact form with Google Sheets integration
│   ├── Footer.tsx          # Footer with contact info
│   └── ScrollProgress.tsx  # Scroll progress indicator
├── App.tsx                 # Main app component
├── main.tsx               # App entry point
└── index.css              # Global styles and Tailwind config
```

## Form Data Collection

When users submit the "Get My Free Consultation" form, the following data is collected:

- **Name**: Full name
- **Email**: Contact email
- **Phone**: Phone number
- **Experience Level**: Arabic learning experience (beginner to advanced)
- **Learning Goals**: What they hope to achieve
- **Timestamp**: When the form was submitted
- **Source**: "Landing Page Form" for tracking

## Customization

### Colors and Branding

The color scheme uses Islamic-inspired colors defined in `tailwind.config.js`:

- **Primary**: Purple tones (`primary-*`)
- **Islamic**: Teal/green tones (`islamic-*`)
- **Accent**: Gold/amber tones (`accent-*`)

### Content Updates

- Update testimonials in `Testimonials.tsx`
- Modify packages and pricing in `Packages.tsx`
- Change hero messaging in `Hero.tsx`
- Update features in `Features.tsx`

## Building for Production

1. Build the project:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory, ready for deployment.

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect your repo
- **GitHub Pages**: Use GitHub Actions to deploy from the `dist/` folder
- **AWS S3**: Upload the `dist/` folder to an S3 bucket with static hosting

### Deploying to Vercel (Recommended)

1. Push this project to GitHub:
   ```bash
   git remote add origin https://github.com/mstfa13/arabo.git
   git branch -M main
   git push -u origin main
   ```
2. Go to https://vercel.com and log in
3. Click "New Project" → Import your `arabo` repository
4. Framework preset: Vite
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add Environment Variable:
   - Key: `VITE_GOOGLE_SHEETS_URL`
   - Value: (Your Apps Script Web App URL)
8. Deploy

After deployment, test form submission in production and confirm rows appear in Google Sheet.

### Updating Environment Variables on Vercel

If you change the Apps Script URL:
1. Go to Project Settings → Environment Variables
2. Update `VITE_GOOGLE_SHEETS_URL`
3. Redeploy (or trigger a rebuild)

### Local vs Production Behavior
- The `mode: 'no-cors'` fetch prevents reading the response body; success inferred by lack of network error
- Use Chrome DevTools → Network to verify the POST call status (should be 200 / opaque)

## GitHub Setup

Set your Git identity (if not already):
```bash
git config user.name "mstfa13"
git config user.email "www.mostfaakram@gmail.com"
```

## Contributing
Private project for now. Future contributions can follow a feature-branch workflow:
```
git checkout -b feature/short-description
# commit changes
git push origin feature/short-description
```

## Environment Files
- `.env.local` (ignored) for local development
- `.env.example` provided for reference

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type safety and better development experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Google Apps Script**: For form submissions to Google Sheets

## License

This project is proprietary. All rights reserved.

## Support

For questions or support, please contact [your-email@example.com]
