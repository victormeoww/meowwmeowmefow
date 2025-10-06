# Changelog

All notable changes to NarcoWatch Wiki will be documented in this file.

## [2.0.0] - 2025-10-06

### 🎨 Major Design Overhaul - Palantir-Inspired Intelligence Platform

#### Changed
- **Complete visual redesign** from Wikipedia-style to intelligence platform aesthetic
- **Dark theme by default** - Professional intelligence-focused interface
- **New color system** - Intelligence blue (#2196f3) with muted professional status colors
- **Typography** - Terminal-inspired monospace elements, cleaner sans-serif hierarchy
- **Removed all emojis** - Replaced with professional SVG icon components
- **Minimalistic spacing** - Reduced clutter, increased whitespace, cleaner borders

#### Added
- **Icon System** (`components/ui/Icons.tsx`) - 16 clean SVG icons:
  - DatabaseIcon, UserIcon, AlertIcon, RouteIcon, LocationIcon
  - SearchIcon, FilterIcon, NetworkIcon, TimelineIcon
  - DocumentIcon, InfoIcon, WarningIcon, ChevronRight/Down, Close, Menu, ExternalLink, Arrow Right
- **Intelligence theme colors** in Tailwind config
  - `intel-bg-*` - Dark background hierarchy
  - `intel-text-*` - High contrast text colors
  - `intel-border-*` - Subtle border colors
  - `intel-accent-*` - Intelligence blue accents
- **New homepage design** - Terminal/Palantir-inspired layout
  - Status indicator badges
  - System status panel
  - Cleaner category cards
  - Professional capabilities section

#### Updated
- **Design System** (`styles/design-system.css`)
  - Primary theme: Dark intelligence platform
  - Faster transitions (100-200ms)
  - Minimal border radius
  - Subtle shadows
  - Slimmer scrollbars (8px)
- **Homepage** (`app/page.tsx`)
  - Intelligence platform branding
  - Entity Classification grid
  - Platform Capabilities section
  - System Status indicators
  - Removed emoji icons
  - Professional language ("Organizations" vs "Cartels", "Subjects" vs "People")
- **Root Layout** (`app/layout.tsx`)
  - Defaults to dark mode (`className="dark"`)
  - Uses new intel color system
- **Tailwind Config** - New intel color palette

### 🔧 Technical Improvements
- Faster CSS transitions for snappier UI
- Better color contrast for accessibility
- Cleaner component structure
- Professional icon system

### 📝 Documentation
- All markdown files updated to reflect new design philosophy
- Added CHANGELOG.md for version tracking
- Updated README.md with new design approach
- Updated DOCUMENTATION.md with intel theme details

---

## [1.0.0] - 2025-10-05

### Initial Release
- Wikipedia-style wiki for organized crime intelligence
- Complete Sanity CMS integration
- Sample data system
- Full entity types: Cartels, People, Incidents, Routes, Locations
- Citation system
- Dark/light mode support
- Search functionality
- Mobile responsive design


