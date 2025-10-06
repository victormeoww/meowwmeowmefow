/**
 * SEARCH RESULTS PAGE
 * 
 * Display search results across all entity types
 */

'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Card, CardBody } from '@/components/ui/Card'
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs'
import { usingSampleData } from '@/lib/sanity/client'
import { search as sampleSearch } from '@/lib/sanity/sample-data'

interface SearchResult {
  _id: string
  _type: string
  title: string
  slug: { current: string }
  image?: string
  excerpt?: string
  url: string
  type: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    const performSearch = async () => {
      if (!query) {
        setResults([])
        setIsLoading(false)
        return
      }
      
      setIsLoading(true)
      
      try {
        if (usingSampleData()) {
          const searchResults = sampleSearch(query)
          setResults(searchResults)
        } else {
          const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
          const data = await res.json()
          setResults(data.results || [])
        }
      } catch (error) {
        console.error('Search error:', error)
        setResults([])
      } finally {
        setIsLoading(false)
      }
    }
    
    performSearch()
  }, [query])
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Search' }]} className="mb-6" />
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text-primary mb-3">
            Search Results
          </h1>
          {query && (
            <p className="text-lg text-gray-600 dark:text-dark-text-secondary">
              {isLoading ? 'Searching' : `Found ${results.length} result${results.length !== 1 ? 's' : ''}`} for "{query}"
            </p>
          )}
        </div>
        
        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-blue-600"></div>
            <p className="mt-4 text-gray-600 dark:text-dark-text-secondary">Searching...</p>
          </div>
        )}
        
        {/* Results */}
        {!isLoading && results.length > 0 && (
          <div className="space-y-4">
            {results.map(result => (
              <Link key={result._id} href={result.url}>
                <Card hover>
                  <CardBody>
                    <div className="flex items-start gap-4">
                      {result.image && (
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-100 dark:bg-dark-bg-tertiary rounded overflow-hidden">
                          <img
                            src={result.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-medium text-gray-500 dark:text-dark-text-tertiary uppercase">
                            {result.type}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-text-primary mb-1 hover:text-blue-600 dark:hover:text-blue-400">
                          {result.title}
                        </h3>
                        {result.excerpt && (
                          <p className="text-sm text-gray-600 dark:text-dark-text-secondary">
                            {result.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            ))}
          </div>
        )}
        
        {/* No Results */}
        {!isLoading && query && results.length === 0 && (
          <Card>
            <CardBody className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 dark:text-dark-text-tertiary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text-primary mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Try different keywords or check your spelling
              </p>
            </CardBody>
          </Card>
        )}
        
        {/* No Query */}
        {!query && (
          <Card>
            <CardBody className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 dark:text-dark-text-tertiary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 dark:text-dark-text-primary mb-2">
                Enter a search query
              </h3>
              <p className="text-gray-600 dark:text-dark-text-secondary">
                Search for cartels, people, incidents, routes, or locations
              </p>
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  )
}


