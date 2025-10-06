#!/bin/bash

# Deploy schemas to Sanity
# This uploads your content type definitions to Sanity Cloud

echo "📤 Deploying schemas to Sanity project 8cpm8p18..."

cd sanity

npx sanity@latest schema deploy --project 8cpm8p18 --dataset production

echo "✅ Schemas deployed!"
echo ""
echo "Now go to: https://www.sanity.io/manage/personal/project/8cpm8p18"
echo "Click 'Studio' or 'Content' to start adding Organizations, Subjects, etc."


