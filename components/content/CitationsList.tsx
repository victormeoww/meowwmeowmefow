/**
 * CITATIONS LIST COMPONENT
 * 
 * Displays references/sources section (Wikipedia-style)
 */

import type { Citation } from '@/types'
import { formatDate } from '@/lib/utils/date'
import { RELIABILITY_CONFIG, SOURCE_TYPE_CONFIG } from '@/lib/constants/statuses'

interface CitationsListProps {
  sources?: Citation[]
  title?: string
}

export function CitationsList({ sources, title = 'References' }: CitationsListProps) {
  if (!sources || sources.length === 0) {
    return null
  }
  
  return (
    <section className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-border-light">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-dark-text-primary">
        {title}
      </h2>
      
      <ol className="space-y-4">
        {sources.map((source, index) => {
          const reliabilityConfig = RELIABILITY_CONFIG[source.reliability]
          const sourceTypeConfig = SOURCE_TYPE_CONFIG[source.sourceType]
          
          return (
            <li key={source._id} id={`cite-${source._id}`} className="flex gap-3">
              {/* Citation Number */}
              <span className="flex-shrink-0 text-blue-600 dark:text-blue-400 font-medium">
                [{index + 1}]
              </span>
              
              {/* Citation Content */}
              <div className="flex-1 text-sm text-gray-700 dark:text-dark-text-secondary">
                {/* Authors */}
                {source.authors && source.authors.length > 0 && (
                  <span className="font-medium">
                    {source.authors.join(', ')}
                    {'. '}
                  </span>
                )}
                
                {/* Title */}
                {source.url ? (
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    "{source.title}"
                  </a>
                ) : (
                  <span>"{source.title}"</span>
                )}
                {'. '}
                
                {/* Publisher */}
                {source.publisher && (
                  <span className="italic">
                    {source.publisher}
                    {'. '}
                  </span>
                )}
                
                {/* Publication Date */}
                {source.publicationDate && (
                  <span>
                    {formatDate(source.publicationDate)}
                    {'. '}
                  </span>
                )}
                
                {/* Source Type */}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 dark:bg-dark-bg-tertiary rounded text-xs">
                  <span>{sourceTypeConfig.icon}</span>
                  <span>{sourceTypeConfig.label}</span>
                </span>
                {' '}
                
                {/* Reliability Badge */}
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${reliabilityConfig.bgColor} ${reliabilityConfig.color}`}
                >
                  {reliabilityConfig.label}
                </span>
                
                {/* Archived Link */}
                {source.archived && source.archivedUrl && (
                  <span className="ml-2">
                    [
                    <a
                      href={source.archivedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      archived
                    </a>
                    ]
                  </span>
                )}
                
                {/* Access Date */}
                {source.accessDate && (
                  <div className="mt-1 text-xs text-gray-500 dark:text-dark-text-tertiary">
                    Accessed: {formatDate(source.accessDate)}
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}


