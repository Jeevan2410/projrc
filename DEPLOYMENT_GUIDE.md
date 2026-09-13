# 🚀 QuoteFlow - Automated Deployment Guide

## Current Status

✅ **Local Repository Ready**
- All code committed to local Git repository
- Branch: `main`
- Latest commit: Updated README with deployment instructions

⚠️ **GitHub Remote Not Configured**
- No GitHub remote is currently set up
- Manual configuration required for security reasons

## How to Push to GitHub (Choose One Method)

### Method 1: Using the Automated Script (Recommended)

```bash
# Step 1: Generate a GitHub Personal Access Token
# Go to: https://github.com/settings/tokens
# Click "Generate new token (classic)"
# Select scopes: repo, workflow
# Copy the token

# Step 2: Set your environment variables
export GITHUB_REPO_URL='https://github.com/YOUR_USERNAME/quoteflow.git'
export GITHUB_TOKEN='your_token_here'

# Step 3: Run the deployment script
./deploy-to-github.sh
```

**Done!** The script will:
- Configure Git credentials
- Add the remote repository
- Push all commits to GitHub
- Store credentials for future automatic pushes

### Method 2: Manual SSH Setup

```bash
# Step 1: Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"

# Step 2: Copy your public key
cat ~/.ssh/id_ed25519.pub

# Step 3: Add the key to GitHub
# Go to: https://github.com/settings/keys
# Click "New SSH key" and paste your public key

# Step 4: Add remote and push
git remote add origin git@github.com:YOUR_USERNAME/quoteflow.git
git branch -M main
git push -u origin main
```

### Method 3: Manual HTTPS Setup

```bash
# Step 1: Create repository on GitHub
# Go to: https://github.com/new
# Create a new repository named "quoteflow"

# Step 2: Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/quoteflow.git
git branch -M main
git push -u origin main
# You'll be prompted for GitHub credentials
```

## After Pushing to GitHub

Once your code is on GitHub, you can:

### 1. Connect to Vercel for Automatic Deployments
```
1. Go to vercel.com
2. Import your GitHub repository
3. Configure environment variables
4. Deploy automatically on every push
```

### 2. Set Up CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy
        run: ./deploy.sh
```

### 3. Enable Branch Protection
```
1. Go to repository Settings → Branches
2. Add branch protection rule for "main"
3. Require pull request reviews
4. Require status checks to pass
```

## Environment Variables Needed

Create `.env` file or set in your hosting platform:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Cloudflare
CLOUDFLARE_ACCOUNT_ID=your_account_id
CLOUDFLARE_API_TOKEN=your_api_token

# Razorpay (for payments)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## Troubleshooting

### "Permission denied (publickey)"
```bash
# Test SSH connection
ssh -T git@github.com

# If fails, regenerate SSH key and add to GitHub
```

### "Repository not found"
```bash
# Make sure you created the repository on GitHub first
# Check the URL is correct:
git remote -v
# Should show: origin https://github.com/YOUR_USERNAME/quoteflow.git
```

### "Authentication failed"
```bash
# Clear stored credentials
git config --global --unset credential.helper
rm -f ~/.git-credentials

# Try again with fresh token
export GITHUB_TOKEN='new_token_here'
./deploy-to-github.sh
```

## Next Steps After Deployment

1. ✅ Code pushed to GitHub
2. ⏳ Connect to Vercel/Netlify for hosting
3. ⏳ Set up Supabase database
4. ⏳ Configure Cloudflare Workers
5. ⏳ Set up Razorpay for payments
6. ⏳ Configure custom domain
7. ⏳ Enable SSL/TLS
8. ⏳ Set up monitoring and logging

## Support

For issues or questions:
- Check [GITHUB_SETUP.md](./GITHUB_SETUP.md) for detailed setup guide
- Review [PROGRESS.md](./PROGRESS.md) for current development status
- See [TODO.md](./TODO.md) for upcoming features

---

**QuoteFlow** - Turn every enquiry into revenue! 💰
