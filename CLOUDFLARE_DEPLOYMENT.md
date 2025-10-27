# Cloudflare Pages Deployment Guide

## Quick Start

This project is configured for Cloudflare Pages deployment with Next.js static export.

## Build Configuration

### Next.js Config
- **Output**: Static HTML export (`output: 'export'`)
- **Images**: Unoptimized (no Next.js Image Optimization)
- **Build directory**: `.next`

### Package Scripts
- `npm run build` - Builds the project for production
- `npm run pages:build` - Same as build (for Cloudflare Pages)

## Deployment Steps

### Method 1: Cloudflare Dashboard (Recommended)

1. **Prepare your repository**
   ```bash
   git add .
   git commit -m "Prepare for Cloudflare deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Click **Pages** → **Create a project**
   - Choose **Connect to Git**
   - Select your repository

3. **Configure Build Settings**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (leave empty)

4. **Deploy**
   - Click **Save and Deploy**
   - Wait for build to complete
   - Your site will be live!

### Method 2: Wrangler CLI

1. **Install Wrangler** (if not already installed)
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy .next
   ```

## Custom Domain

1. Go to your Pages project settings
2. Click **Custom domains**
3. Add your domain
4. Follow DNS configuration instructions

## Environment Variables

If you need environment variables:

1. Go to **Settings** → **Environment Variables**
2. Add variables for:
   - **Production**
   - **Preview**
   - **Browser** (for client-side access)

## Build Settings Summary

```
Framework: Next.js (Static HTML Export)
Build command: npm run build
Output directory: .next
Node version: 18.x or 20.x
```

## Troubleshooting

### Build fails with Image optimization error
- The project uses `unoptimized: true` in `next.config.ts`
- Make sure all images are in `/public` directory
- Use standard `<img>` tags or Next.js `<Image>` with proper paths

### Pages not routing correctly
- Ensure all pages use relative links
- Check that `output: 'export'` is set in `next.config.ts`
- Static export generates HTML files for each route

### Fonts not loading
- Fonts are loaded via CSS variables
- Check `lib/fonts.ts` configuration
- Ensure font files are in `/public/assets/fonts`

## Post-Deployment

After deployment:

1. Test all pages and routes
2. Verify all images load correctly
3. Check form submissions (if applicable)
4. Test on mobile and desktop
5. Set up custom domain (optional)
6. Configure analytics (optional)

## Support

For issues with Cloudflare Pages:
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

