#!/bin/bash

# QuoteFlow GitHub Deployment Script
# Run this once to configure your GitHub credentials, then use it for automatic pushes

set -e

REPO_URL="${GITHUB_REPO_URL:-}"
GITHUB_TOKEN="${GITHUB_TOKEN:-}"

if [ -z "$REPO_URL" ]; then
    echo "❌ GITHUB_REPO_URL environment variable not set"
    echo ""
    echo "Usage options:"
    echo "1. Set environment variables and run:"
    echo "   export GITHUB_REPO_URL='https://github.com/your-username/quoteflow.git'"
    echo "   export GITHUB_TOKEN='your_github_token'"
    echo "   ./deploy-to-github.sh"
    echo ""
    echo "2. Or run with inline variables:"
    echo "   GITHUB_REPO_URL='https://github.com/your-username/quoteflow.git' GITHUB_TOKEN='your_token' ./deploy-to-github.sh"
    echo ""
    echo "To generate a GitHub token:"
    echo "1. Go to https://github.com/settings/tokens"
    echo "2. Click 'Generate new token (classic)'"
    echo "3. Select scopes: repo, workflow"
    echo "4. Copy the token and use it as GITHUB_TOKEN"
    exit 1
fi

echo "🚀 Deploying QuoteFlow to GitHub..."
echo "Repository: $REPO_URL"

# Configure Git to use token
git config --global credential.helper store

# Remove existing origin if any
git remote remove origin 2>/dev/null || true

# Add remote with token authentication
if [ -n "$GITHUB_TOKEN" ]; then
    # Extract username and repo from URL
    AUTH_URL=$(echo "$REPO_URL" | sed 's|https://|https://x-access-token:'$GITHUB_TOKEN'@|')
    git remote add origin "$AUTH_URL"
else
    git remote add origin "$REPO_URL"
    echo "⚠️  No GITHUB_TOKEN provided. You may be prompted for credentials."
fi

# Push to GitHub
echo "📦 Pushing to GitHub..."
git branch -M main
git push -u origin main --force

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "Repository URL: $(echo $REPO_URL | sed 's|https://||')"
echo ""
echo "Next time, just run: ./deploy-to-github.sh"
echo "(credentials are stored after first run)"
