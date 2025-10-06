# 🔌 SANITY CMS SETUP GUIDE

Complete guide to connecting NarcoWatch Intelligence Platform to live Sanity CMS.

---

## 📋 Prerequisites

- Node.js 20+ installed
- A Sanity.io account (free tier available)
- Terminal access

---

## STEP 1: Create Sanity Project (5 minutes)

### Option A: Using Sanity CLI (Recommended)

```bash
# 1. Install Sanity CLI globally
npm install -g @sanity/cli

# 2. Login to Sanity
sanity login

# 3. Create a new project
sanity init

# Follow the prompts:
# - Create new project? Yes
# - Project name: narcowatch-intelligence
# - Use default dataset: Yes (production)
# - Project template: Clean project with no predefined schemas
# - Output path: ./sanity-studio
```

### Option B: Via Sanity.io Website

1. Go to https://www.sanity.io/
2. Sign up or log in
3. Click "Create New Project"
4. Name it "narcowatch-intelligence"
5. Choose "Production" dataset
6. Note your **Project ID** (you'll need this)

---

## STEP 2: Copy Schemas to Sanity Studio (2 minutes)

```bash
# Navigate to your Sanity studio
cd sanity-studio

# Copy all schemas from this project
cp -r ../sanity/schemas/* ./schemas/

# Update the schema index
# Edit sanity-studio/sanity.config.ts to import your schemas
```

**Edit `sanity-studio/sanity.config.ts`:**

```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'NarcoWatch Intelligence',

  projectId: 'YOUR_PROJECT_ID_HERE',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
```

---

## STEP 3: Deploy Sanity Studio (2 minutes)

```bash
# From sanity-studio directory
cd sanity-studio

# Install dependencies
npm install

# Deploy the studio
sanity deploy

# Follow prompts:
# - Studio hostname: narcowatch-intelligence (or your choice)
# - Studio will be available at: https://narcowatch-intelligence.sanity.studio
```

---

## STEP 4: Get Your Credentials

### Get Project ID:
```bash
# From sanity-studio directory
sanity manage
```

This opens your project in the browser. Note your **Project ID**.

### Get API Token (for write access):

1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to "API" → "Tokens"
4. Click "Add API Token"
5. Name it: "NarcoWatch Frontend"
6. Permissions: "Editor" (or "Admin" if you need full access)
7. Copy the token (you won't see it again!)

---

## STEP 5: Update Environment Variables (1 minute)

Update your `.env.local` file in the NarcoWatch project:

```env
# DISABLE sample data mode
NEXT_PUBLIC_USE_SAMPLE_DATA=false

# ADD your Sanity credentials
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Optional: Sanity Studio config (if different)
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

**Example:**
```env
NEXT_PUBLIC_USE_SAMPLE_DATA=false
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk123456789abcdef
```

---

## STEP 6: Import Sample Data (Optional - 2 minutes)

If you want to start with the sample data already in Sanity:

### Option A: Manual Import via Studio

1. Go to your Sanity Studio: https://narcowatch-intelligence.sanity.studio
2. Manually create entries based on the sample data in `lib/sanity/sample-data.ts`

### Option B: Automated Import Script (Recommended)

Create an import script:

```bash
# In your project root
npm install @sanity/client --save-dev
```

**Create `scripts/import-sample-data.ts`:**

```typescript
import { createClient } from '@sanity/client'
import { 
  sampleCartels, 
  samplePeople, 
  sampleIncidents, 
  sampleRoutes, 
  sampleLocations,
  sampleCitations 
} from '../lib/sanity/sample-data'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2025-10-06'
})

async function importData() {
  console.log('🚀 Starting data import...')
  
  // Import citations first (they're referenced by other docs)
  for (const citation of sampleCitations) {
    await client.create(citation)
    console.log(`✅ Imported citation: ${citation.title}`)
  }
  
  // Import cartels
  for (const cartel of sampleCartels) {
    await client.create(cartel)
    console.log(`✅ Imported cartel: ${cartel.name}`)
  }
  
  // Import people
  for (const person of samplePeople) {
    await client.create(person)
    console.log(`✅ Imported person: ${person.fullName}`)
  }
  
  // Import incidents, routes, locations...
  // (add similar loops for other data)
  
  console.log('🎉 Import complete!')
}

importData().catch(console.error)
```

**Run the import:**
```bash
npx tsx scripts/import-sample-data.ts
```

---

## STEP 7: Restart Your Application (30 seconds)

```bash
# Stop the dev server (Ctrl+C or)
pkill -f "next dev"

# Restart
npm run dev
```

The application will now fetch data from Sanity instead of sample data!

---

## STEP 8: Verify Connection

1. Visit http://localhost:3000
2. Check if data loads (should be same sample data if you imported it)
3. Go to your Sanity Studio: https://narcowatch-intelligence.sanity.studio
4. Add a new organization
5. Refresh your app - the new organization should appear!

---

## 🎯 Quick Reference

### Environment Variables Needed:

```env
# Sample data OFF
NEXT_PUBLIC_USE_SAMPLE_DATA=false

# Sanity credentials
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_your_token_here
```

### Useful Sanity Commands:

```bash
# Open Sanity Studio locally
cd sanity-studio && sanity dev

# Deploy Sanity Studio
cd sanity-studio && sanity deploy

# View project in browser
sanity manage

# Check CORS settings
sanity cors add http://localhost:3000 --credentials
```

---

## 🔧 Troubleshooting

### "Configuration must contain projectId"
**Solution**: Make sure `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`

### "Unauthorized"
**Solution**: Check your `SANITY_API_TOKEN` is correct and has proper permissions

### "Dataset not found"
**Solution**: Ensure dataset is created in Sanity (default: "production")

### CORS errors in browser
**Solution**: Add your localhost to CORS:
```bash
cd sanity-studio
sanity cors add http://localhost:3000 --credentials
```

### Data not showing
**Solution**: 
1. Check `.env.local` has `NEXT_PUBLIC_USE_SAMPLE_DATA=false`
2. Verify data exists in Sanity Studio
3. Check browser console for errors

---

## 📊 Data Structure

When creating content in Sanity Studio, follow this structure:

### Organizations (Cartel)
1. Add basic info (name, status, founded date)
2. Upload logo/insignia
3. Write description with citations
4. Link to leaders (Person references)
5. Add rivals (Cartel references)
6. Add timeline events
7. Add sources (Citation references)

### Subjects (Person)
1. Add personal info
2. Upload photo
3. Set status
4. Link affiliations (Organization references)
5. Add biography with citations
6. Add criminal history timeline
7. Add rewards if applicable

### Workflow:
1. Create Citations first (sources)
2. Create Organizations
3. Create Subjects and link to Organizations
4. Create Incidents and link to Organizations/Subjects
5. Create Routes and Locations

---

## 🚀 Production Deployment

Once Sanity is connected:

### Deploy to Vercel:

1. Push code to GitHub
2. Import in Vercel
3. Add environment variables in Vercel dashboard:
   ```
   NEXT_PUBLIC_USE_SAMPLE_DATA=false
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   ```
4. Deploy!

### Enable Webhooks (Optional):

Set up Sanity webhooks to trigger rebuilds when content changes:

1. In Sanity dashboard: Settings → Webhooks
2. Add webhook:
   - URL: `https://your-vercel-app.vercel.app/api/revalidate`
   - Dataset: production
   - Trigger on: Create, Update, Delete
3. Save

This makes your site update automatically when you edit content in Sanity Studio!

---

## 💡 Pro Tips

1. **Start with a few entities**: Don't import all sample data, just 1-2 to test
2. **Use Sanity Vision**: Built-in GROQ query tester in Studio
3. **Set up CORS early**: Prevents API errors
4. **Keep Studio deployed**: Access it from anywhere
5. **Use content validation**: Sanity schemas have built-in validation

---

## 🎉 You're Done!

Once connected, you'll have:
- ✅ Live CMS for content editing
- ✅ Beautiful Sanity Studio interface
- ✅ Real-time updates
- ✅ No more sample data restrictions
- ✅ Full production setup

**Any questions? Check DOCUMENTATION.md section 10 for more details!**


