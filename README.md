# Akillu Solutions Website

Source code for the Akillu Solutions website - a modern, responsive website built with SvelteKit, showcasing custom software development services for SMEs in India and UAE.

## 🚀 Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) with static adapter
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Code Formatting**: Prettier
- **Deployment**: GitHub Pages

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 20 or higher)
- **npm** (comes with Node.js)

You can check your versions by running:

```bash
node --version
npm --version
```

## 🛠️ Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd akillu-website
```

2. Install dependencies:

```bash
npm install
```

This will install all required packages including SvelteKit, Tailwind CSS, and other development dependencies.

## 🏃 Running the Development Server

To start the development server with hot-reload:

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the next available port).

The development server includes:

- Hot module replacement (HMR) for instant updates
- Source maps for debugging
- Fast refresh on file changes

## 🏗️ Building for Production

To build the website for production:

```bash
npm run build
```

This will:

- Generate optimized static files
- Minify JavaScript and CSS
- Create a production-ready build in the `build/` directory

The build output is optimized for static hosting and includes:

- Pre-rendered HTML pages
- Optimized assets
- Proper routing for GitHub Pages

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This serves the built files from the `build/` directory, allowing you to test the production build before deploying.

## ✅ Testing & Code Quality

### Type Checking

Check for TypeScript errors:

```bash
npm run check
```

For continuous type checking in watch mode:

```bash
npm run check:watch
```

### Code Formatting

Format all files with Prettier:

```bash
npm run format
```

Check if files are properly formatted (useful for CI/CD):

```bash
npm run format:check
```

## 🚢 Deployment

### GitHub Pages (Automatic)

The website is configured for automatic deployment to GitHub Pages:

1. **Enable GitHub Pages**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment**:
   - The website automatically deploys when you push to the `main` branch
   - You can also manually trigger deployment from the "Actions" tab
   - The workflow is defined in `.github/workflows/deploy.yml`

3. **Deployment Process**:
   - Builds the website in a clean environment
   - Generates static files optimized for production
   - Deploys to GitHub Pages
   - The site will be available at `https://<username>.github.io/<repository-name>`

### Manual Deployment

If you need to deploy manually or to a different hosting service:

1. Build the website:

```bash
npm run build
```

2. The `build/` directory contains all static files ready for deployment

3. Upload the contents of the `build/` directory to your hosting service:
   - **Netlify**: Drag and drop the `build/` folder
   - **Vercel**: Connect your repository and set build command to `npm run build`
   - **Other static hosts**: Upload the `build/` directory contents

## 📁 Project Structure

```
akillu-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── src/
│   ├── lib/
│   │   └── components/         # Reusable Svelte components
│   │       ├── Header.svelte
│   │       ├── Footer.svelte
│   │       ├── Hero.svelte
│   │       ├── ServiceCard.svelte
│   │       └── ContactForm.svelte
│   ├── routes/                 # SvelteKit routes (pages)
│   │   ├── +layout.svelte      # Root layout
│   │   ├── +page.svelte        # Homepage
│   │   ├── about/
│   │   ├── services/
│   │   ├── process/
│   │   └── contact/
│   ├── app.css                 # Global styles with Tailwind
│   ├── app.html                # HTML template
│   └── app.d.ts                 # TypeScript definitions
├── static/
│   └── logo/                   # Logo assets
├── .prettierrc                 # Prettier configuration
├── postcss.config.js           # PostCSS configuration
├── svelte.config.js            # SvelteKit configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── package.json                # Dependencies and scripts
```

## 📝 Available Scripts

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start development server         |
| `npm run build`        | Build for production             |
| `npm run preview`      | Preview production build locally |
| `npm run check`        | Run TypeScript type checking     |
| `npm run check:watch`  | Run type checking in watch mode  |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check if files are formatted     |

## 🎨 Styling

The project uses **Tailwind CSS v4** with a custom theme defined in `src/app.css`. The color palette includes:

- **Primary**: Red gradient (brand colors)
- **Secondary**: Navy/charcoal tones
- **Accent**: Warm orange/coral highlights

Custom fonts (Inter and Poppins) are loaded from Google Fonts.

## 🔧 Configuration

### SvelteKit

Configuration is in `svelte.config.js`. The project uses:

- Static adapter for GitHub Pages deployment
- Automatic base path detection for GitHub Pages

### Tailwind CSS

Tailwind v4 uses CSS-based configuration in `src/app.css` with the `@theme` directive. No separate config file is needed.

### Prettier

Code formatting rules are defined in `.prettierrc`:

- Tabs with 2-space width
- Single quotes
- Semicolons enabled
- 100 character line width

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:

1. Clear the build cache:

```bash
rm -rf .svelte-kit build node_modules
npm install
```

2. Rebuild:

```bash
npm run build
```

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port. You can also specify a port:

```bash
npm run dev -- --port 3000
```

### Type Errors

If you see TypeScript errors:

1. Run `npm run check` to see detailed error messages
2. Ensure all imports are correct
3. Check that types are properly defined in `src/app.d.ts`

## 📄 License

This project is private and proprietary to Akillu Solutions.

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run format` to format code
4. Run `npm run check` to verify types
5. Run `npm run build` to ensure build succeeds
6. Submit a pull request

## 📞 Support

For questions or issues, please contact the development team.

---
