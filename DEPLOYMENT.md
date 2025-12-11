# Deploy to Netlify

## Option 1: Netlify CLI (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Option 2: Netlify Dashboard

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings:
   - **Build command**: `bun run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## Option 3: Drag & Drop

```bash
# Build locally
bun run build

# Drag the `dist` folder to netlify.com/drop
```

## Environment Variables (if needed)

Add in Netlify Dashboard → Site settings → Environment variables

---

Your site will be live at: `https://your-site-name.netlify.app`
