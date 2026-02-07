# GitHub Pages Deployment Guide

Your Next.js portfolio is now configured for GitHub Pages! 🎉

## ✅ What's Been Configured

1. **Static Export** - Next.js configured to generate static HTML/CSS/JS
2. **Build Script** - `npm run build` creates static files in `/out` directory
3. **GitHub Actions** - Automatic deployment workflow on every push to main
4. **`.nojekyll` file** - Prevents GitHub from interfering with Next.js files

## 🚀 Deployment Steps

### Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to: `https://github.com/ankanpaul1810/ankanpaul1810.github.io/settings/pages`
   - Under "Source", select: **GitHub Actions**
   - Click **Save**

3. **Wait for deployment:**
   - Go to the "Actions" tab in your repository
   - Watch the deployment workflow run
   - Once complete, your site will be live at: `https://ankanpaul1810.github.io/`

## 📝 Important Notes

- **Assets**: Make sure your resume PDF is in the `/public` folder as `Ankan_Paul_CV.pdf`
- **Photos**: All images in `/assets/photos/` will be included in the build
- **Future Updates**: Just push to main branch - automatic deployment will handle the rest

## 🔧 Local Testing

Test the static build locally before deploying:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to preview.

## 🌐 Your Portfolio URL

Once deployed, your portfolio will be available at:
**https://ankanpaul1810.github.io/**

---

## 🚀 Alternative: Vercel (Optional)

If you prefer Vercel instead of GitHub Pages:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Vercel will automatically deploy on every push

**Need help?** Check the Actions tab for deployment logs if something goes wrong.


## 🚀 Vercel (Recommended)

Vercel is created by the Next.js team and offers the best deployment experience.

### Quick Deploy

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Configure** (if needed):
   - Follow the prompts
   - Connect your GitHub repository
   - Set environment variables in the Vercel dashboard

### Automatic Deployments

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically deploy on every push

## 📄 GitHub Pages

### Option 1: Using GitHub Actions (Recommended)

1. **Create `.github/workflows/deploy.yml`**:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. **Update `next.config.ts`**:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
```

3. **Push to main branch** - GitHub Actions will handle the rest

### Option 2: Manual Deploy

1. **Update `next.config.ts`** (same as above)

2. **Build**:
```bash
npm run build
```

3. **Deploy the `out` folder** to GitHub Pages:
```bash
npm install -g gh-pages
gh-pages -d out
```

## 🌐 Netlify

1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy Settings**:
   - Netlify will auto-detect Next.js
   - Click "Deploy site"

## 🔧 Custom Server (VPS/Cloud)

### Using PM2

1. **Build the project**:
```bash
npm run build
```

2. **Install PM2**:
```bash
npm install -g pm2
```

3. **Start with PM2**:
```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

### Using Docker

1. **Create `Dockerfile`**:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **Build and run**:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 🔐 Environment Variables

### Vercel
- Add in Vercel dashboard under Settings > Environment Variables

### GitHub Pages
- Add in repository Settings > Secrets and variables > Actions

### Example `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🎯 Post-Deployment Checklist

- [ ] Test all pages and sections
- [ ] Verify animations work smoothly
- [ ] Check mobile responsiveness
- [ ] Test contact form/links
- [ ] Verify SEO meta tags
- [ ] Check page load speed
- [ ] Test accessibility
- [ ] Update social media links
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## 🔍 Troubleshooting

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (should be 18+)

### Images Not Loading
- If using GitHub Pages, make sure images are in `public/` folder
- Update `next.config.ts` with `images: { unoptimized: true }`

### Animations Laggy
- Check if production build is being used
- Enable GPU acceleration in browser
- Reduce animation complexity if needed

## 📊 Performance Optimization

### Before Deployment
1. **Optimize Images**:
   - Use WebP format
   - Compress images
   - Use Next.js Image component

2. **Code Splitting**:
   - Already handled by Next.js App Router
   - Use dynamic imports for large components

3. **Caching**:
   - Vercel and Netlify handle this automatically
   - For custom servers, configure cache headers

## 🎨 Custom Domain

### Vercel
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

### GitHub Pages
1. Add `CNAME` file to `public/` with your domain
2. Update DNS:
   - A records to: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - CNAME from www to username.github.io

## 🚨 Important Notes

- The old portfolio is backed up in `old-portfolio/` folder
- Keep it until you're satisfied with the new deployment
- Update package.json version on each major update
- Monitor deployment logs for any issues

---

**Happy Deploying!** 🚀⚽
