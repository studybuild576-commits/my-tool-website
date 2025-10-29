#!/usr/bin/env bash
set -euo pipefail

echo "==> Using Node 20 via nvm (image already has nvm)"
export NVM_DIR="/usr/local/share/nvm"
# shellcheck disable=SC1090
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
nvm install 20 >/dev/null
nvm use 20

echo "==> Cleaning old installs and caches"
rm -rf node_modules package-lock.json pnpm-lock.yaml yarn.lock .next .vercel || true
npm cache clean --force >/dev/null 2>&1 || true

echo "==> Installing dependencies"
npm install

echo "==> Basic health checks"
npx --yes next@15.5.4 -v || true
npm ls next react react-dom || true

# Optional: create .env.local if missing
if [ ! -f ".env.local" ]; then
  echo "NEXT_TELEMETRY_DISABLED=1" > .env.local
fi

echo "==> Ready. You can run 'npm run dev' now."
