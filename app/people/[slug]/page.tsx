/**
 * PERSON DETAIL PAGE
 * 
 * Individual person profile page
 */

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PersonInfobox } from '@/components/infobox/PersonInfobox'
import { PortableTextRenderer } from '@/components/content/PortableTextRenderer'
import { CitationsList } from '@/components/content/CitationsList'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { formatDate } from '@/lib/utils/date'
import { client } from '@/lib/sanity/client'
import { personBySlugQuery } from '@/lib/sanity/queries'
import type { Person } from '@/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const person: Person | null = await client.fetch(personBySlugQuery, { slug })
  
  if (!person) {
    return { title: 'Person Not Found - NarcoWatch Wiki' }
  }
  
  return {
    title: `${person.fullName} - NarcoWatch Wiki`,
    description: `Profile of ${person.fullName}${person.aliases && person.aliases.length > 0 ? ` (${person.aliases[0]})` : ''}`
  }
}

export default async function PersonPage({ params }: PageProps) {
  const { slug } = await params
  const person: Person | null = await client.fetch(personBySlugQuery, { slug })
  
  if (!person) {
    notFound()
  }
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'People', href: '/people' },
            { label: person.fullName }
          ]}
          className="mb-6"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <article className="bg-white dark:bg-dark-bg-secondary rounded-lg shadow-sm p-6 lg:p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-2">
              {person.fullName}
            </h1>
            
            {person.aliases && person.aliases.length > 0 && (
              <p className="text-lg text-gray-600 dark:text-dark-text-secondary mb-6">
                Also known as: {person.aliases.map((alias, i) => (
                  <span key={i} className="italic">
                    "{alias}"{i < person.aliases!.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            )}
            
            {person.biography && (
              <PortableTextRenderer content={person.biography} />
            )}
            
            {/* Criminal History Timeline */}
            {person.criminalHistory && person.criminalHistory.length > 0 && (
              <section className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-dark-text-primary pb-2 border-b border-gray-200 dark:border-dark-border-light">
                  Criminal History
                </h2>
                <div className="space-y-4">
                  {person.criminalHistory.map((event, index) => (
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
            
            {/* Citations */}
            <CitationsList sources={person.sources} />
          </article>
          
          <aside>
            <PersonInfobox data={person} />
          </aside>
        </div>
      </div>
    </div>
  )
}


