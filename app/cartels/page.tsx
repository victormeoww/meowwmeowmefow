/**
 * ORGANIZATIONS INDEX PAGE
 * 
 * Intelligence database - Organizations
 */

import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { DatabaseIcon, ArrowRightIcon } from '@/components/ui/Icons'
import { usingSampleData, client } from '@/lib/sanity/client'
import { getAllCartels } from '@/lib/sanity/sample-data'
import { allCartelsQuery } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Organizations - NarcoWatch Intelligence',
  description: 'Database of drug trafficking organizations and criminal syndicates in Latin America'
}

export default async function CartelsPage() {
  const cartels = usingSampleData() 
    ? getAllCartels()
    : await client.fetch(allCartelsQuery)
  
  return (
    <div className="min-h-screen bg-intel-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[{ label: 'Organizations' }]}
          className="mb-6"
        />
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <DatabaseIcon className="text-intel-accent-primary" size={28} />
            <h1 className="text-3xl font-semibold text-intel-text-primary">
              Organizations
            </h1>
          </div>
          <p className="text-intel-text-secondary max-w-3xl leading-relaxed">
            Structured intelligence on major trafficking organizations and criminal syndicates. 
            Each entity profile includes organizational structure, territorial control, activities, and verified leadership data.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-intel-bg-secondary border border-intel-border-medium rounded-md p-4">
            <div className="text-2xl font-bold text-intel-text-primary mb-1 font-mono">
              {cartels.length}
            </div>
            <div className="text-xs text-intel-text-tertiary uppercase tracking-wider">
              Total Entities
            </div>
          </div>
          <div className="bg-intel-bg-secondary border border-intel-border-medium rounded-md p-4">
            <div className="text-2xl font-bold text-status-active mb-1 font-mono">
              {cartels.filter(c => c.status === 'active').length}
            </div>
            <div className="text-xs text-intel-text-tertiary uppercase tracking-wider">
              Active
            </div>
          </div>
          <div className="bg-intel-bg-secondary border border-intel-border-medium rounded-md p-4">
            <div className="text-2xl font-bold text-intel-text-secondary mb-1 font-mono">
              {cartels.filter(c => c.status === 'defunct' || c.status === 'fragmented').length}
            </div>
            <div className="text-xs text-intel-text-tertiary uppercase tracking-wider">
              Inactive
            </div>
          </div>
        </div>
        
        {/* Cartels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {cartels.map(cartel => (
            <Link key={cartel._id} href={`/cartels/${cartel.slug.current}`}>
              <div className="group bg-intel-bg-secondary border border-intel-border-medium rounded-md p-5 hover:border-intel-accent-muted hover:bg-intel-bg-tertiary transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-intel-text-primary mb-2 group-hover:text-intel-accent-primary transition-colors">
                      {cartel.name}
                    </h3>
                    <Badge status={cartel.status} size="sm" />
                  </div>
                  <ArrowRightIcon className="text-intel-text-muted group-hover:text-intel-accent-primary opacity-0 group-hover:opacity-100 transition-all" size={18} />
                </div>
                
                {/* Info */}
                <div className="space-y-2 mt-4">
                  {cartel.territory?.description && (
                    <div className="text-sm text-intel-text-secondary">
                      <span className="text-intel-text-tertiary">Territory:</span> {cartel.territory.description}
                    </div>
                  )}
                  
                  {cartel.leaders && cartel.leaders.length > 0 && (
                    <div className="text-sm text-intel-text-secondary">
                      <span className="text-intel-text-tertiary">Leadership:</span> {cartel.leaders.length} subjects
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Empty State */}
        {cartels.length === 0 && (
          <div className="bg-intel-bg-secondary border border-intel-border-medium rounded-md p-12 text-center">
            <p className="text-intel-text-secondary">
              No organizations found
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

