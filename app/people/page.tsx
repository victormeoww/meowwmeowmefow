/**
 * PEOPLE INDEX PAGE
 * 
 * List view of all people
 */

import Link from 'next/link'
import { Card, CardBody } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { client } from '@/lib/sanity/client'
import { allPeopleQuery } from '@/lib/sanity/queries'
import type { Person } from '@/types'

export const metadata = {
  title: 'Subjects - NarcoWatch Intelligence',
  description: 'Profiles of key figures and operatives in organized crime'
}

export default async function PeoplePage() {
  const people: Person[] = await client.fetch(allPeopleQuery)
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'People' }]} className="mb-6" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-3">
            People
          </h1>
          <p className="text-lg text-gray-600 dark:text-dark-text-secondary max-w-3xl">
            Profiles of cartel leaders, lieutenants, operatives, and other key figures involved in organized crime activities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {people.map(person => (
            <Link key={person._id} href={`/people/${person.slug.current}`}>
              <Card hover className="h-full">
                <CardBody className="text-center">
                  {person.photoUrl ? (
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 dark:bg-dark-bg-tertiary">
                      <img
                        src={person.photoUrl}
                        alt={person.fullName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-dark-bg-tertiary flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-400 dark:text-dark-text-tertiary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary mb-2">
                    {person.fullName}
                  </h3>
                  
                  {person.aliases && person.aliases.length > 0 && (
                    <p className="text-sm text-gray-600 dark:text-dark-text-secondary italic mb-2">
                      "{person.aliases[0]}"
                    </p>
                  )}
                  
                  <Badge status={person.status} size="sm" className="mb-3" />
                  
                  {person.roles && person.roles.length > 0 && (
                    <p className="text-xs text-gray-500 dark:text-dark-text-tertiary">
                      {person.roles.slice(0, 2).join(', ')}
                    </p>
                  )}
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

