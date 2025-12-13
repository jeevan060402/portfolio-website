# 📘 Deployment Guide - Portfolio Website

This guide provides detailed instructions on how to publish and deploy your portfolio website.

## Table of Contents
1. [Quick Start](#quick-start)
2. [GitHub Pages Setup](#github-pages-setup)
3. [Alternative Hosting Options](#alternative-hosting-options)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Troubleshooting](#troubleshooting)

---

## Quick Start

Your portfolio website is ready to be published! The easiest way is using **GitHub Pages**.

### Prerequisites
- GitHub account
- Git installed on your computer
- Your portfolio code pushed to GitHub

---

## GitHub Pages Setup

### Method 1: Using GitHub Actions (Automated - Recommended)

This repository already includes a GitHub Actions workflow that automatically deploys your site.

**Steps:**

1. **Enable GitHub Pages with Actions**
   - Go to your repository: `https://github.com/jeevan060402/portfolio-website`
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - Save the settings

2. **Push Changes to Main Branch**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Monitor Deployment**
   - Go to the **Actions** tab in your repository
   - Watch the deployment workflow run
   - Once complete (green checkmark), your site is live!

4. **Access Your Website**
   - Visit: `https://jeevan060402.github.io/portfolio-website/`
   - The URL appears in Settings → Pages after successful deployment

### Method 2: Direct Branch Deployment (Simple)

If you prefer not to use GitHub Actions:

1. **Configure GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source**: Deploy from a branch
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - Click **Save**

2. **Wait for Deployment**
   - GitHub will automatically build and deploy your site
   - This takes 2-5 minutes
   - Refresh the Settings → Pages to see the live URL

3. **Access Your Website**
   - Your site will be live at: `https://jeevan060402.github.io/portfolio-website/`

---

## Alternative Hosting Options

### Option 1: Netlify (Free, Easy)

1. Sign up at [netlify.com](https://www.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select the `portfolio-website` repository
5. Deploy settings:
   - **Build command**: Leave empty (static site)
   - **Publish directory**: `.` (root)
6. Click "Deploy site"
7. Your site will be live at: `https://your-site-name.netlify.app`

**Advantages:**
- Automatic HTTPS
- Custom domain support
- Continuous deployment
- Form handling
- Serverless functions

### Option 2: Vercel (Free, Fast)

1. Sign up at [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Other
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
5. Click "Deploy"
6. Your site will be live at: `https://your-site-name.vercel.app`

**Advantages:**
- Fast global CDN
- Automatic HTTPS
- Custom domain support
- Real-time previews

### Option 3: Cloudflare Pages (Free, Global CDN)

1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Click "Create a project"
3. Connect your GitHub account
4. Select the `portfolio-website` repository
5. Build settings:
   - **Build command**: Leave empty
   - **Build output directory**: `/`
6. Click "Save and Deploy"
7. Your site will be live at: `https://your-site-name.pages.dev`

**Advantages:**
- Global CDN network
- DDoS protection
- Web analytics
- Custom domain support

### Option 4: Traditional Web Hosting

If you have traditional web hosting (cPanel, FTP):

1. **Export Files**
   - Download all files from your repository
   - Or use FTP/SFTP from your local clone

2. **Upload to Server**
   - Connect via FTP/SFTP to your hosting
   - Upload all files to `public_html` or `www` directory
   - Ensure `index.html` is in the root

3. **Access Your Website**
   - Visit your domain: `https://yourdomain.com`

---

## Custom Domain Setup

### For GitHub Pages

1. **Purchase a Domain** (e.g., from GoDaddy, Namecheap, Google Domains)

2. **Configure DNS Records**
   Add these records in your domain registrar:
   ```
   Type    Name    Value
   A       @       185.199.108.153
   A       @       185.199.109.153
   A       @       185.199.110.153
   A       @       185.199.111.153
   CNAME   www     jeevan060402.github.io
   ```

3. **Add Custom Domain in GitHub**
   - Go to repository **Settings** → **Pages**
   - Under "Custom domain", enter your domain
   - Click **Save**
   - Wait for DNS check to complete (can take up to 24 hours)

4. **Enable HTTPS**
   - Check "Enforce HTTPS" (appears after DNS verification)

### For Netlify/Vercel/Cloudflare

Each platform has a simple custom domain setup in their dashboard:
- Go to your site settings
- Click "Add custom domain"
- Follow the DNS configuration instructions
- HTTPS is automatically configured

---

## Troubleshooting

### Issue: 404 Not Found after deployment

**Solution:**
- Ensure `index.html` is in the root directory
- Check that all file paths are relative (not absolute)
- Verify the repository is public (for GitHub Pages free tier)

### Issue: Styles/Scripts not loading

**Solution:**
- Check that CSS/JS file paths in `index.html` are correct
- Ensure paths use forward slashes: `assets/css/timeline.css`
- Verify all asset files are committed and pushed to GitHub

### Issue: Changes not appearing

**Solution:**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait 2-5 minutes for deployment to complete
- Check the Actions tab for deployment status
- Ensure you pushed to the correct branch (`main`)

### Issue: GitHub Pages not available

**Solution:**
- Verify repository is public (or you have GitHub Pro for private repos)
- Check that GitHub Pages is enabled in Settings
- Ensure you have the correct permissions

### Issue: Resume PDF not loading

**Solution:**
- Verify the PDF file is in the repository
- Check the file path in `assets/js/timeline.js`
- Ensure the filename matches exactly (case-sensitive)

### Issue: Deployment workflow failing

**Solution:**
- Check the Actions tab for error details
- Ensure workflow file is in `.github/workflows/`
- Verify the workflow has correct permissions
- Make sure GitHub Pages is set to use "GitHub Actions" as source

---

## Updating Your Published Site

After initial deployment, updating is simple:

1. **Make Changes Locally**
   ```bash
   # Edit your files
   nano index.html
   # Or use your preferred editor
   ```

2. **Commit Changes**
   ```bash
   git add .
   git commit -m "Update portfolio content"
   ```

3. **Push to GitHub**
   ```bash
   git push origin main
   ```

4. **Wait for Deployment**
   - GitHub Actions will automatically deploy
   - Check Actions tab for progress
   - Changes will be live in 2-5 minutes

---

## Performance Optimization Tips

1. **Optimize Images**
   - Compress images before uploading
   - Use appropriate formats (WebP for photos, SVG for icons)
   - Consider lazy loading for images

2. **Minify Files** (Optional)
   - Minify CSS and JavaScript for faster loading
   - Tools: [CSS Minifier](https://cssminifier.com/), [JS Minifier](https://javascript-minifier.com/)

3. **Enable Caching**
   - GitHub Pages automatically handles caching
   - For other hosts, configure cache headers

4. **Use CDN**
   - GitHub Pages, Netlify, and Vercel all use CDNs
   - This ensures fast loading worldwide

---

## Security Best Practices

1. **HTTPS**
   - Always enable HTTPS (automatic on GitHub Pages)
   - Ensures secure connections

2. **Keep Dependencies Updated**
   - Regularly update any external libraries
   - Check for security advisories

3. **Don't Commit Secrets**
   - Never commit API keys, passwords, or tokens
   - Use environment variables for sensitive data

4. **Regular Backups**
   - Git itself is your backup
   - Keep your repository up to date

---

## Need Help?

- **GitHub Pages Documentation**: https://docs.github.com/en/pages
- **GitHub Actions Documentation**: https://docs.github.com/en/actions
- **GitHub Community**: https://github.community/

---

## Quick Reference Commands

```bash
# Clone repository
git clone https://github.com/jeevan060402/portfolio-website.git

# Make changes and push
git add .
git commit -m "Update content"
git push origin main

# Check deployment status
# Visit: https://github.com/jeevan060402/portfolio-website/actions

# View live site
# Visit: https://jeevan060402.github.io/portfolio-website/
```

---

**🎉 Congratulations! Your portfolio is now published and accessible to the world!**
