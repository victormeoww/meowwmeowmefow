# 🚀 QUICK START GUIDE

Welcome to NarcoWatch Intelligence Platform! Get up and running in 5 minutes.

**Version 2.0.0** - Palantir-Inspired Intelligence Design

## Prerequisites

- Node.js 20+ installed
- Terminal/Command line access

## Installation (2 minutes)

```bash
# 1. Navigate to project directory
cd /Users/user/Desktop/testmeow1

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start development server
npm run dev
```

## View the Application

Open your browser and go to:
```
http://localhost:3000
```

You should see the NarcoWatch Intelligence Platform homepage with the new dark, professional interface!

## What's Included Out of the Box

The application comes with **sample data** pre-loaded in a professional intelligence interface:

### 📊 Sample Content
- **3 Organizations**: Sinaloa Cartel, CJNG, Gulf Cartel
- **3 Subjects**: El Chapo, El Mayo, El Mencho
- **3 Incidents**: Fentanyl seizures, tunnel discoveries, clashes
- **3 Routes**: Pacific Coast, Gulf Maritime, Central American
- **4 Locations**: Culiacán, Tijuana, Guadalajara, Sinaloa State

### ✨ Features to Explore

1. **Browse Organizations**: Navigate to `/cartels` (displays as "Organizations")
2. **View Subject Profiles**: Navigate to `/people` to see subject intelligence
3. **Search**: Use the terminal-style search bar in the header
4. **Intelligence Design**: Notice the Palantir-inspired dark theme
5. **Clean Icons**: Professional SVG icons throughout (no emojis)
6. **Mobile**: Resize your browser to see responsive design

### 🎨 New in v2.0

- **Dark intelligence theme** by default
- **Terminal-style breadcrumbs** (`~/Organizations`)
- **Monospace status badges** (uppercase)
- **Clean SVG icons** (Database, User, Alert, Route, Location, etc.)
- **Professional language** ("Organizations", "Subjects" instead of "Cartels", "People")
- **Minimalistic cards** with hover effects

## Project Structure

```
testmeow1/
├── app/              # Pages (cartels, people, incidents, etc.)
├── components/       # Reusable React components
├── lib/             # Utilities and data
│   └── sanity/
│       └── sample-data.ts  # All the sample data
├── styles/          # Design system and CSS
├── types/           # TypeScript types
└── sanity/          # CMS schemas
```

## Sample Data Mode

By default, the app uses sample data defined in `lib/sanity/sample-data.ts`.

**No database setup required!**

This is controlled by the environment variable:
```env
NEXT_PUBLIC_USE_SAMPLE_DATA=true
```

## Next Steps

### 1. Explore the Codebase

- **Pages**: Check `app/cartels/page.tsx` for list view structure
- **Detail Pages**: Look at `app/cartels/[slug]/page.tsx` for entity detail pattern
- **Components**: Browse `components/` to see all reusable UI elements
- **Sample Data**: Edit `lib/sanity/sample-data.ts` to add your own test data

### 2. Customize Sample Data

```typescript
// lib/sanity/sample-data.ts

// Add a new cartel
export const sampleCartels = [
  // ... existing cartels
  {
    _id: 'cartel-custom-001',
    name: 'Your Custom Cartel',
    slug: { current: 'your-custom-cartel', _type: 'slug' },
    status: 'active',
    // ... other fields
  }
]
```

### 3. Connect to Live Sanity CMS (Optional)

When ready to use real CMS:

1. Create Sanity project: `npm create sanity@latest`
2. Update `.env.local`:
   ```env
   NEXT_PUBLIC_USE_SAMPLE_DATA=false
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   ```
3. Import sample data: `npm run import-sample-data`
4. Rebuild: `npm run build`

See `DOCUMENTATION.md` for detailed migration guide.

## Available Pages

| URL | Content |
|-----|---------|
| `/` | Homepage |
| `/cartels` | All cartels list |
| `/cartels/sinaloa-cartel` | Sinaloa Cartel detail |
| `/cartels/cjng` | CJNG detail |
| `/people` | All people list |
| `/people/joaquin-guzman` | El Chapo profile |
| `/people/ismael-zambada` | El Mayo profile |
| `/people/nemesio-oseguera` | El Mencho profile |
| `/incidents` | (To be implemented) |
| `/routes` | (To be implemented) |
| `/locations` | (To be implemented) |
| `/search` | Search results |
| `/search?q=sinaloa` | Search for "sinaloa" |

## Development Tips

### Hot Reload
Save any file and see changes instantly in the browser.

### TypeScript
The project uses strict TypeScript. Check types with:
```bash
npm run type-check
```

### Styling
Uses Tailwind CSS. Edit `tailwind.config.ts` for custom colors.

### Dark Mode
Controlled by `data-theme` attribute on `<html>` element.

## Common Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check code quality
npm run type-check   # Check TypeScript types
```

## Troubleshooting

### Port 3000 Already in Use
```bash
# Use different port
PORT=3001 npm run dev
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Sample Data Not Showing
Check that `.env.local` has:
```env
NEXT_PUBLIC_USE_SAMPLE_DATA=true
```

## File You'll Edit Most

1. **Sample Data**: `lib/sanity/sample-data.ts`
2. **Pages**: `app/*/page.tsx`
3. **Components**: `components/*/*.tsx`
4. **Styles**: `styles/design-system.css`
5. **Types**: `types/index.ts`

## Documentation

- **README.md**: Project overview
- **DOCUMENTATION.md**: Complete technical documentation
- **QUICK_START.md**: This file

## Support

For detailed information, see:
- `DOCUMENTATION.md` - Complete technical guide
- `README.md` - Project overview
- Component files - Each has inline documentation

---

## 🎉 You're Ready!

The application is now running at `http://localhost:3000`

**What to try first:**
1. Browse the cartels page
2. Click on "Sinaloa Cartel" to see the detail page
3. Try the search bar in the header
4. Toggle dark mode
5. Open on your phone to see mobile design

Happy coding! 🚀

