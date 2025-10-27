# VAULT - The Digital Atelier

Intelligence Infrastructure for the Next Era of Luxury Retail.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

## Cloudflare Pages Deployment

### Option 1: Deploy via Cloudflare Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to **Pages** → **Create a project**
4. Connect your Git repository
5. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (or leave empty)
6. Click **Save and Deploy**

### Option 2: Deploy via Wrangler CLI

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Build the project:
```bash
npm run build
```

4. Deploy to Cloudflare Pages:
```bash
wrangler pages deploy .next
```

### Environment Variables

If you need environment variables:

1. Go to your Cloudflare Pages project settings
2. Navigate to **Environment Variables**
3. Add your variables for Production, Preview, and Browser bindings

## Project Structure

```
/app
  /briefing          # Request a Private Briefing page
  /case-study        # Case study detail pages
  /platform          # Platform overview page
  /results           # Results overview page
  /thesis            # Our Thesis page
/components          # React components
/lib                 # Utilities and configurations
/public              # Static assets (images, fonts)
```

## Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Custom Fonts** - Switzer, Ogg Display, Ogg Text

## Pages

- `/` - Homepage with hero, challenge, solution, features, context, results
- `/platform` - Platform overview with interactive blueprint
- `/results` - Executive summary and case studies
- `/thesis` - Manifesto and strategic thinking
- `/briefing` - Request a private briefing form
- `/case-study/[slug]` - Individual case study detail pages

## Features

- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Parallax effects
- Interactive UI demonstrations
- Intelligent ticker animations
- Data visualization animations
- Form handling with success states

## License

Private and confidential.
