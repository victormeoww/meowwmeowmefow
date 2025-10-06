/**
 * PERSON INFOBOX COMPONENT
 * 
 * Wikipedia-style infobox for person pages
 */

import Link from 'next/link'
import type { Person } from '@/types'
import { Badge } from '@/components/ui/Badge'
import { formatDate, formatCurrency } from '@/lib/utils/date'
import {
  InfoboxBase,
  InfoboxImage,
  InfoboxBody,
  InfoboxRow,
  InfoboxSection,
  InfoboxList
} from './InfoboxBase'

interface PersonInfoboxProps {
  data: Person
}

export function PersonInfobox({ data }: PersonInfoboxProps) {
  return (
    <InfoboxBase>
      <InfoboxImage src={data.photoUrl} alt={data.fullName} />
      
      <InfoboxBody>
        {/* Full Name */}
        <InfoboxRow
          label="Full Name"
          value={data.fullName}
        />
        
        {/* Aliases */}
        {data.aliases && data.aliases.length > 0 && (
          <InfoboxRow
            label="Aliases"
            value={data.aliases.map((alias, i) => (
              <div key={i} className="italic">"{alias}"</div>
            ))}
          />
        )}
        
        {/* Status */}
        <InfoboxRow
          label="Status"
          value={<Badge status={data.status} size="sm" />}
        />
        
        {/* Date of Birth */}
        {data.dateOfBirth && (
          <InfoboxRow
            label="Born"
            value={formatDate(data.dateOfBirth)}
          />
        )}
        
        {/* Place of Birth */}
        {data.placeOfBirth && (
          <InfoboxRow
            label="Place of Birth"
            value={data.placeOfBirth}
          />
        )}
        
        {/* Nationality */}
        {data.nationality && data.nationality.length > 0 && (
          <InfoboxRow
            label="Nationality"
            value={data.nationality.join(', ')}
          />
        )}
        
        {/* Last Known Location */}
        {data.lastKnownLocation && (
          <InfoboxRow
            label="Last Known Location"
            value={
              <div>
                <div>{data.lastKnownLocation.location}</div>
                {data.lastKnownLocation.date && (
                  <div className="text-xs text-gray-500 dark:text-dark-text-tertiary">
                    as of {formatDate(data.lastKnownLocation.date)}
                  </div>
                )}
              </div>
            }
          />
        )}
        
        {/* Roles */}
        {data.roles && data.roles.length > 0 && (
          <InfoboxRow
            label="Roles"
            value={data.roles.join(', ')}
          />
        )}
        
        {/* Rewards */}
        {data.rewards && data.rewards.length > 0 && (
          <InfoboxSection title="Rewards Offered">
            {data.rewards.map((reward, i) => (
              <div key={reward._key || i} className="text-sm">
                <div className="font-medium text-green-700 dark:text-green-400">
                  {reward.currency} {reward.amount.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600 dark:text-dark-text-secondary">
                  {reward.issuingAgency}
                </div>
                {reward.status && (
                  <div className="text-xs text-gray-500 dark:text-dark-text-tertiary capitalize">
                    Status: {reward.status}
                  </div>
                )}
              </div>
            ))}
          </InfoboxSection>
        )}
        
        {/* Affiliations */}
        {data.affiliations && data.affiliations.length > 0 && (
          <InfoboxSection title="Affiliated Organizations">
            <InfoboxList
              items={data.affiliations.map(cartel => ({
                id: cartel._id,
                label: (
                  <Link
                    href={`/cartels/${cartel.slug.current}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {cartel.name}
                  </Link>
                )
              }))}
            />
          </InfoboxSection>
        )}
        
        {/* Known Associates */}
        {data.knownAssociates && data.knownAssociates.length > 0 && (
          <InfoboxSection title="Known Associates">
            <InfoboxList
              items={data.knownAssociates.map(associate => ({
                id: associate._id,
                label: (
                  <Link
                    href={`/people/${associate.slug.current}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {associate.fullName}
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


