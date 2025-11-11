#!/bin/bash

echo "🔄 Deploying latest changes to the server..."

ssh root@147.93.119.159 << 'EOF'
cd /var/www/podcast
git pull origin main
npm run build
pm2 restart next-frontend
EOF

echo "✅ Deployment complete."
