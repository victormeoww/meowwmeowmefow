/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'intel-bg-primary': '#0a0e1a',
        'intel-bg-secondary': '#141829',
        'intel-bg-tertiary': '#1a1f38',
        'intel-bg-elevated': '#0f1420',
        
        'intel-text-primary': '#e4e7eb',
        'intel-text-secondary': '#9ca3af',
        'intel-text-tertiary': '#6b7280',
        
        'intel-accent-primary': '#3b82f6',
        'intel-accent-hover': '#2563eb',
        'intel-accent-muted': '#1e40af',
        
        'intel-border-light': '#1e2535',
        'intel-border-medium': '#2d3548',
        'intel-border-dark': '#374151',
        
        'status-active': '#10b981',
        'status-captured': '#f59e0b',
        'status-deceased': '#ef4444',
        'status-fugitive': '#ef4444',
        'status-fragmented': '#6b7280',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

