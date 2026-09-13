# GitHub Deployment Setup

## Quick Start (One-Time Setup)

To enable automatic GitHub pushes without manual permission each time:

### Option 1: Using GitHub Token (Recommended)

```bash
# 1. Generate a GitHub Personal Access Token:
#    - Go to: https://github.com/settings/tokens
#    - Click "Generate new token (classic)"
#    - Select scopes: repo, workflow
#    - Copy the generated token

# 2. Set environment variables:
export GITHUB_REPO_URL='https://github.com/YOUR_USERNAME/quoteflow.git'
export GITHUB_TOKEN='your_github_token_here'

# 3. Run the deployment script:
./deploy-to-github.sh
```

### Option 2: Using SSH Keys

```bash
# 1. Generate SSH key (if you don't have one):
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. Add SSH key to GitHub:
#    - Copy your public key: cat ~/.ssh/id_ed25519.pub
#    - Go to: https://github.com/settings/keys
#    - Click "New SSH key" and paste your public key

# 3. Set repository URL to SSH:
git remote add origin git@github.com:YOUR_USERNAME/quoteflow.git

# 4. Push to GitHub:
git push -u origin main
```

## Automated Deployment

After initial setup, simply run:

```bash
./deploy-to-github.sh
```

The script will automatically:
- Configure Git credentials
- Set up the remote repository
- Push all changes to GitHub
- Store credentials for future use

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_REPO_URL` | Your GitHub repository URL | ✅ Yes |
| `GITHUB_TOKEN` | GitHub Personal Access Token | ⚠️ Recommended |

## Troubleshooting

### Permission Denied
```bash
# Make sure the script is executable:
chmod +x deploy-to-github.sh
```

### Authentication Failed
```bash
# Clear stored credentials:
git config --global --unset credential.helper
rm -f ~/.git-credentials

# Re-run with fresh token:
export GITHUB_TOKEN='your_new_token'
./deploy-to-github.sh
```

### Repository Not Found
```bash
# Create the repository on GitHub first:
# 1. Go to github.com/new
# 2. Create a new repository named "quoteflow"
# 3. Run the deployment script again
```

## Security Notes

- Never commit your `GITHUB_TOKEN` to version control
- The token is stored securely in `~/.git-credentials` after first use
- Use token scopes minimally (only `repo` and `workflow` needed)
- Rotate tokens periodically for security

## Next Steps

Once deployed to GitHub:
1. Connect to Vercel/Netlify for automatic deployments
2. Set up CI/CD pipelines
3. Enable branch protection rules
4. Configure webhooks for integrations
