# NarcoWatch Intelligence Platform

A production-grade intelligence database for organized crime analysis in Latin America, featuring a Palantir-inspired minimalistic interface.

## 🎯 Project Overview

NarcoWatch is a comprehensive intelligence platform providing structured, verifiable analysis of drug trafficking organizations, key subjects, incidents, trafficking routes, and strategic locations. Built with Next.js 15 and Sanity CMS, featuring a dark, terminal-inspired interface optimized for intelligence analysis.

## ✨ Features

- **Intelligence Platform Design**: Palantir-inspired dark, minimalistic, professional interface
- **Comprehensive Database**: Organizations, subjects, incidents, routes, and locations
- **Citation System**: Every claim backed by verifiable sources with reliability indicators
- **Interactive Maps**: Visualize territorial control and trafficking routes (Leaflet.js)
- **Network Analysis**: Explore relationships between entities (D3.js)
- **Timeline Views**: Track historical events and organizational evolution
- **Advanced Search**: Real-time search across all entity types
- **Dark-First Theme**: Professional intelligence aesthetic (light mode available)
- **Mobile Responsive**: Optimized for all screen sizes
- **Icon System**: Clean SVG icons instead of emojis

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd testmeow1

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

### Sample Data Mode

By default, the application uses sample data for development. No Sanity account required to get started!

The sample data includes:
- 3 cartels (Sinaloa, CJNG, Gulf)
- 3 key figures (El Chapo, El Mayo, El Mencho)
- 3 incidents
- 3 trafficking routes
- 4 locations

To use sample data, ensure `.env.local` has:
```env
NEXT_PUBLIC_USE_SAMPLE_DATA=true
```

## 📚 Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript
- **CMS**: Sanity.io (headless CMS)
- **Styling**: Tailwind CSS with custom design system
- **Maps**: Leaflet.js
- **Visualizations**: D3.js
- **Deployment**: Vercel

## 📁 Project Structure

```
testmeow1/
├── app/                    # Next.js App Router pages
│   ├── cartels/           # Cartel pages
│   ├── people/            # Person pages
│   ├── incidents/         # Incident pages
│   ├── routes/            # Route pages
│   ├── locations/         # Location pages
│   ├── search/            # Search page
│   └── api/               # API routes
├── components/            # React components
│   ├── layout/           # Header, Footer, etc.
│   ├── infobox/          # Wikipedia-style infoboxes
│   ├── content/          # Content renderers
│   ├── navigation/       # Navigation components
│   └── ui/               # Base UI components
├── lib/                   # Utility functions
│   ├── sanity/           # Sanity client and queries
│   ├── utils/            # Helper functions
│   └── constants/        # Constants and configs
├── sanity/                # Sanity CMS schemas
│   └── schemas/          # Content type definitions
├── types/                 # TypeScript types
└── styles/               # Global styles
```

## 🎨 Design System

The design system is inspired by Palantir Foundry and intelligence platforms:

- **Colors**: Dark-first intelligence theme with professional blue accents (#2196f3)
- **Typography**: Inter for content, monospace for technical elements
- **Spacing**: Consistent 4px grid system
- **Components**: Minimal, professional, high-contrast UI components
- **Icons**: Clean SVG icon system (no emojis)
- **Aesthetic**: Terminal-inspired, data-focused, minimalistic

See `styles/design-system.css` for full design tokens and `CHANGELOG.md` for v2.0 design changes.

## 📖 Content Types

### Cartel
Major drug trafficking organizations with:
- Basic info (name, status, territory)
- Leadership and organizational structure
- Timeline of events
- Rival and allied organizations
- Trafficking routes

### Person
Key figures including leaders and operatives with:
- Personal information
- Status (active, captured, deceased, fugitive)
- Criminal history timeline
- Rewards offered
- Affiliations and associates

### Incident
Events, operations, seizures, and arrests with:
- Date, location, and type
- Involved entities
- Casualties and seizures
- Law enforcement agencies
- Outcome and significance

### Route
Trafficking corridors with:
- Origin, destination, and waypoints
- Route type (land, sea, air, tunnel)
- Controlling cartels
- Commodities trafficked

### Location
Strategic cities and regions with:
- Geographic coordinates
- Controlling organizations
- Strategic significance
- Related incidents

## 🔄 Migrating from Sample Data to Live Sanity

When ready to use live Sanity CMS:

1. **Create Sanity Project**:
   ```bash
   npm create sanity@latest
   ```

2. **Deploy Sanity Studio**:
   ```bash
   cd sanity-studio
   npm run deploy
   ```

3. **Update Environment Variables**:
   ```env
   NEXT_PUBLIC_USE_SAMPLE_DATA=false
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token
   ```

4. **Import Sample Data** (optional):
   ```bash
   npm run import-sample-data
   ```

See `DOCUMENTATION.md` for detailed migration instructions.

## 🧪 Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint code
npm run lint
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Lint code with ESLint
- `npm run type-check` - Check TypeScript types
- `npm run sanity` - Open Sanity Studio locally
- `npm run deploy` - Deploy Sanity Studio

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

Vercel will automatically deploy on every push to `main`.

### Environment Variables for Production

```env
NEXT_PUBLIC_USE_SAMPLE_DATA=false
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

## 📄 License

This project is for research and educational purposes only.

## ⚠️ Disclaimer

This database is intended for research, academic study, and educational purposes. All information is derived from publicly available sources including court documents, government reports, and reputable journalism. We do not glorify criminal activity and present information in a neutral, encyclopedic manner.

## 📚 Additional Resources

- [Full Documentation](./DOCUMENTATION.md) - Complete technical guide
- [Changelog](./CHANGELOG.md) - Version history and design evolution
- [Quick Start Guide](./QUICK_START.md) - 5-minute setup
- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)

## 🔄 Version History

- **v2.0.0** (2025-10-06) - Palantir-inspired intelligence platform redesign
- **v1.0.0** (2025-10-05) - Initial Wikipedia-style release

See [CHANGELOG.md](./CHANGELOG.md) for detailed changes.

## 🤝 Contributing

This is an intelligence research platform. Contributions should maintain the professional, analytical tone and include verified citations for all information.

---

**Built with Next.js 15, Sanity CMS, and Tailwind CSS**  
**Version 2.0.0** - Intelligence Platform Design

