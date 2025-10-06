/**
 * CARTEL DETAIL PAGE
 * 
 * Individual cartel page with full information
 */

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CartelInfobox } from '@/components/infobox/CartelInfobox'
import { PortableTextRenderer } from '@/components/content/PortableTextRenderer'
import { CitationsList } from '@/components/content/CitationsList'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { Card, CardBody, CardHeader } from '@/components/ui/Card'
import { formatDate } from '@/lib/utils/date'
import { usingSampleData } from '@/lib/sanity/client'
import { getCartelBySlug } from '@/lib/sanity/sample-data'

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps) {
  const cartel = usingSampleData()
    ? getCartelBySlug(params.slug)
    : null // Would fetch from Sanity in production
  
  if (!cartel) {
    return {
      title: 'Cartel Not Found - NarcoWatch Wiki'
    }
  }
  
  return {
    title: `${cartel.name} - NarcoWatch Wiki`,
    description: cartel.territory?.description || `Information about ${cartel.name}`
  }
}

export default async function CartelPage({ params }: PageProps) {
  const cartel = usingSampleData()
    ? getCartelBySlug(params.slug)
    : null // Would fetch from Sanity in production
  
  if (!cartel) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Cartels', href: '/cartels' },
            { label: cartel.name }
          ]}
          className="mb-6"
        />
        
        {/* Main Layout: Content + Infobox */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Main Content */}
          <article className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-sm p-6 lg:p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-2">
              {cartel.name}
            </h1>
            
            {/* Aliases */}
            {cartel.aliases && cartel.aliases.length > 0 && (
              <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-6">
                Also known as: <span className="italic">{cartel.aliases.join(', ')}</span>
              </p>
            )}
            
            {/* Description */}
            {cartel.description && (
              <PortableTextRenderer content={cartel.description} />
            )}
            
            {/* Timeline Section */}
            {cartel.timeline && cartel.timeline.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-dark-text-primary pb-2 border-b border-gray-200 dark:border-dark-border-light">
                  Timeline
                </h2>
                <div className="space-y-4">
                  {cartel.timeline.map((event, index) => (
                    <div key={event._key || index} className="flex gap-4">
                      <div className="flex-shrink-0 w-32 text-sm font-medium text-gray-600 dark:text-dark-text-secondary">
                        {formatDate(event.date)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-1">
                          {event.title}
                        </h3>
                        {event.description && (
                          <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            
            {/* Recent Incidents */}
            {cartel.recentIncidents && cartel.recentIncidents.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-dark-text-primary pb-2 border-b border-gray-200 dark:border-dark-border-light">
                  Recent Incidents
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {cartel.recentIncidents.map(incident => (
                    <Card key={incident._id} hover>
                      <CardBody>
                        <Link
                          href={`/incidents/${incident.slug.current}`}
                          className="block"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-dark-text-primary mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                            {incident.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-dark-text-secondary">
                            <span>{formatDate(incident.date)}</span>
                            <span>•</span>
                            <span className="capitalize">{incident.incidentType}</span>
                            {incident.locationName && (
                              <>
                                <span>•</span>
                                <span>{incident.locationName}</span>
                              </>
                            )}
                          </div>
                        </Link>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </section>
            )}
            
            {/* Trafficking Routes */}
            {cartel.routes && cartel.routes.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-dark-text-primary pb-2 border-b border-gray-200 dark:border-dark-border-light">
                  Known Trafficking Routes
                </h2>
                <div className="space-y-2">
                  {cartel.routes.map(route => (
                    <Link
                      key={route._id}
                      href={`/routes/${route.slug.current}`}
                      className="block text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {route.name} ({route.routeType})
                    </Link>
                  ))}
                </div>
              </section>
            )}
            
            {/* Citations */}
            <CitationsList sources={cartel.sources} />
          </article>
          
          {/* Sidebar Infobox */}
          <aside>
            <CartelInfobox data={cartel} />
          </aside>
        </div>
      </div>
    </div>
  )
}


