/**
 * FOOTER COMPONENT
 * 
 * Intelligence platform footer
 */

import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const footerSections = [
    {
      title: 'Database',
      links: [
        { name: 'Organizations', href: '/cartels' },
        { name: 'Subjects', href: '/people' },
        { name: 'Incidents', href: '/incidents' },
        { name: 'Routes', href: '/routes' },
        { name: 'Locations', href: '/locations' }
      ]
    },
    {
      title: 'Platform',
      links: [
        { name: 'Methodology', href: '/methodology' },
        { name: 'Data Sources', href: '/sources' },
        { name: 'API Access', href: '/api' },
        { name: 'Documentation', href: '/docs' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms', href: '/terms' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Disclaimer', href: '/disclaimer' },
        { name: 'Contact', href: '/contact' }
      ]
    }
  ]
  
  return (
    <footer className="bg-intel-bg-elevated border-t border-intel-border-light mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-intel-accent-primary/20 border border-intel-accent-primary/30 rounded flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-intel-accent-primary rounded-full"></div>
              </div>
              <span className="text-base font-semibold text-intel-text-primary">
                NarcoWatch
              </span>
            </div>
            <p className="text-sm text-intel-text-secondary leading-relaxed">
              Intelligence platform for organized crime analysis in Latin America.
            </p>
          </div>
          
          {/* Footer Links */}
          {footerSections.map(section => (
            <div key={section.title}>
              <h3 className="text-xs font-mono text-intel-text-tertiary uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map(link => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-intel-text-secondary hover:text-intel-accent-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-intel-border-light">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-mono text-intel-text-tertiary">
              © {currentYear} NarcoWatch Intelligence Platform / Research & Educational Use Only
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

