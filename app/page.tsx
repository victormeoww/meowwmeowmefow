/**
 * HOMEPAGE
 * 
 * Intelligence platform landing page
 */

import Link from 'next/link'
import { Card, CardBody } from '@/components/ui/Card'
import { DatabaseIcon, UserIcon, AlertIcon, RouteIcon, LocationIcon, ArrowRightIcon } from '@/components/ui/Icons'

export default function HomePage() {
  const categories = [
    {
      title: 'Organizations',
      description: 'Drug trafficking organizations and criminal syndicates',
      href: '/cartels',
      icon: DatabaseIcon,
      count: '3 entities'
    },
    {
      title: 'Subjects',
      description: 'Key figures and operatives in organized crime',
      href: '/people',
      icon: UserIcon,
      count: '3 profiles'
    },
    {
      title: 'Incidents',
      description: 'Operations, seizures, and significant events',
      href: '/incidents',
      icon: AlertIcon,
      count: '3 incidents'
    },
    {
      title: 'Routes',
      description: 'Trafficking corridors and transport networks',
      href: '/routes',
      icon: RouteIcon,
      count: '3 routes'
    },
    {
      title: 'Locations',
      description: 'Strategic regions and territorial zones',
      href: '/locations',
      icon: LocationIcon,
      count: '4 locations'
    }
  ]
  
  const capabilities = [
    'Real-time intelligence aggregation',
    'Cross-reference analysis',
    'Temporal event tracking',
    'Geographic mapping',
    'Network visualization',
    'Source verification'
  ]
  
  return (
    <div className="min-h-screen bg-intel-bg-primary">
      {/* Hero Section */}
      <section className="border-b border-intel-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-intel-bg-secondary border border-intel-border-medium rounded-md text-xs font-mono text-intel-text-secondary uppercase tracking-wider">
                <span className="w-2 h-2 bg-intel-accent-primary rounded-full animate-pulse"></span>
                Intelligence Platform
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-intel-text-primary mb-6 tracking-tight">
              NarcoWatch
            </h1>
            <p className="text-xl text-intel-text-secondary mb-8 leading-relaxed">
              Comprehensive intelligence database for organized crime operations in Latin America. 
              Structured analysis of trafficking organizations, key subjects, and network activities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/cartels"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-intel-accent-primary text-white font-medium rounded-md hover:bg-intel-accent-hover transition-colors"
              >
                Access Database
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/search"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-intel-bg-secondary border border-intel-border-medium text-intel-text-primary font-medium rounded-md hover:bg-intel-bg-tertiary transition-colors"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="border-b border-intel-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-semibold text-intel-text-primary mb-2">
              Entity Classification
            </h2>
            <p className="text-intel-text-secondary">
              Access structured intelligence across multiple entity types
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(category => {
              const Icon = category.icon
              return (
                <Link key={category.href} href={category.href}>
                  <div className="group relative bg-intel-bg-secondary border border-intel-border-medium rounded-md p-6 hover:border-intel-accent-muted hover:bg-intel-bg-tertiary transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="text-intel-accent-primary" size={24} />
                      <span className="text-xs font-mono text-intel-text-tertiary">
                        {category.count}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-intel-text-primary mb-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-intel-text-secondary leading-relaxed">
                      {category.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-intel-accent-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">View All</span>
                      <ArrowRightIcon size={14} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section className="border-b border-intel-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-intel-text-primary mb-6">
                Platform Capabilities
              </h2>
              <p className="text-intel-text-secondary mb-8 leading-relaxed">
                Advanced intelligence framework designed for comprehensive organized crime analysis. 
                Built on verified sources and structured data methodology.
              </p>
              <div className="space-y-3">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-intel-accent-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-intel-text-secondary">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-intel-bg-secondary border border-intel-border-medium rounded-md p-8">
              <div className="mb-6">
                <div className="text-xs font-mono text-intel-text-tertiary uppercase tracking-wider mb-4">
                  System Status
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-intel-text-secondary">Database</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-status-active rounded-full"></span>
                      <span className="text-sm font-mono text-intel-text-primary">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-intel-text-secondary">Search</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-status-active rounded-full"></span>
                      <span className="text-sm font-mono text-intel-text-primary">Operational</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-intel-text-secondary">Analytics</span>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-status-active rounded-full"></span>
                      <span className="text-sm font-mono text-intel-text-primary">Operational</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-intel-border-medium">
                <div className="text-xs font-mono text-intel-text-tertiary uppercase tracking-wider mb-3">
                  Data Sources
                </div>
                <p className="text-sm text-intel-text-secondary leading-relaxed">
                  Intelligence derived from court documents, government reports, and verified journalism. 
                  All claims cross-referenced and archived for verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Disclaimer Section */}
      <section className="bg-intel-bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-md flex-shrink-0">
              <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-intel-text-primary mb-2">
                Research & Educational Use Only
              </h3>
              <p className="text-sm text-intel-text-secondary leading-relaxed">
                This intelligence platform is intended for research, academic study, and educational purposes. 
                All information is derived from publicly available sources including court documents, government reports, and verified journalism. 
                Content is presented in a neutral, analytical manner for intelligence and research purposes only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

