/**
 * CARTEL INFOBOX COMPONENT
 * 
 * Wikipedia-style infobox for cartel pages
 */

import Link from 'next/link'
import type { Cartel } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { formatDate } from '@/lib/utils/date'
import { formatCurrency } from '@/lib/utils/text'
import {
  InfoboxBase,
  InfoboxImage,
  InfoboxBody,
  InfoboxRow,
  InfoboxSection,
  InfoboxList
} from './InfoboxBase'

interface CartelInfoboxProps {
  data: Cartel
}

export function CartelInfobox({ data }: CartelInfoboxProps) {
  return (
    <InfoboxBase>
      <InfoboxImage src={data.logoUrl} alt={`${data.name} logo`} />
      
      <InfoboxBody>
        {/* Status */}
        <InfoboxRow
          label="Status"
          value={<Badge status={data.status} size="sm" />}
        />
        
        {/* Also Known As */}
        {data.aliases && data.aliases.length > 0 && (
          <InfoboxRow
            label="Also Known As"
            value={data.aliases.join(', ')}
          />
        )}
        
        {/* Founded */}
        {data.foundedDate && (
          <InfoboxRow
            label="Founded"
            value={formatDate(data.foundedDate)}
          />
        )}
        
        {/* Territory */}
        {data.territory?.description && (
          <InfoboxRow
            label="Territory"
            value={data.territory.description}
          />
        )}
        
        {/* Primary Activities */}
        {data.primaryActivities && data.primaryActivities.length > 0 && (
          <InfoboxRow
            label="Primary Activities"
            value={
              <ul className="list-disc list-inside space-y-0.5">
                {data.primaryActivities.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            }
          />
        )}
        
        {/* Estimated Revenue */}
        {data.estimatedRevenue && (
          <InfoboxRow
            label="Est. Annual Revenue"
            value={
              <div>
                <div>{formatCurrency(data.estimatedRevenue.amount, data.estimatedRevenue.currency)}</div>
                <div className="text-xs text-gray-500 dark:text-dark-text-tertiary">
                  ({data.estimatedRevenue.year}, {data.estimatedRevenue.confidence})
                </div>
              </div>
            }
          />
        )}
        
        {/* Leadership */}
        {data.leaders && data.leaders.length > 0 && (
          <InfoboxSection title="Leadership">
            <InfoboxList
              items={data.leaders.map(leader => ({
                id: leader._id,
                label: (
                  <div>
                    <Link
                      href={`/people/${leader.slug.current}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {leader.fullName}
                    </Link>
                    {leader.status && (
                      <span className="text-xs text-gray-500 dark:text-dark-text-tertiary ml-1">
                        ({leader.status})
                      </span>
                    )}
                  </div>
                )
              }))}
            />
          </InfoboxSection>
        )}
        
        {/* Rivals */}
        {data.rivals && data.rivals.length > 0 && (
          <InfoboxSection title="Rival Organizations">
            <InfoboxList
              items={data.rivals.map(rival => ({
                id: rival._id,
                label: (
                  <Link
                    href={`/cartels/${rival.slug.current}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {rival.name}
                  </Link>
                )
              }))}
            />
          </InfoboxSection>
        )}
        
        {/* Allies */}
        {data.allies && data.allies.length > 0 && (
          <InfoboxSection title="Allied Organizations">
            <InfoboxList
              items={data.allies.map(ally => ({
                id: ally._id,
                label: (
                  <Link
                    href={`/cartels/${ally.slug.current}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {ally.name}
                  </Link>
                )
              }))}
            />
          </InfoboxSection>
        )}
      </InfoboxBody>
    </InfoboxBase>
  )
}


