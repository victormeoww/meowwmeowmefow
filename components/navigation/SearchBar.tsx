/**
 * SEARCH BAR COMPONENT
 * 
 * Global search with live results dropdown
 */

'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDebouncedCallback } from 'use-debounce'

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

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  // Debounced search function
  const performSearch = useDebouncedCallback(async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([])
      setIsLoading(false)
      return
    }
    
    setIsLoading(true)
    
    try {
      // Use API search
      const res = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      const data = await res.json()
      setResults(data.results || [])
      setIsOpen(true)
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }, 300)
  
  useEffect(() => {
    if (query) {
      performSearch(query)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, performSearch])
  
  const handleResultClick = (url: string) => {
    router.push(url)
    setIsOpen(false)
    setQuery('')
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setIsOpen(false)
    }
  }
  
  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search intelligence..."
            className="w-full px-4 py-1.5 pl-9 pr-9 text-sm bg-intel-bg-secondary border border-intel-border-medium rounded-md focus:outline-none focus:border-intel-accent-muted text-intel-text-primary placeholder:text-intel-text-muted font-mono"
          />
          
          {/* Search Icon */}
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-intel-text-muted">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          {/* Loading/Clear Button */}
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setResults([])
                setIsOpen(false)
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-intel-text-muted hover:text-intel-text-secondary"
            >
              {isLoading ? (
                <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          )}
        </div>
      </form>
      
      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-intel-bg-secondary border border-intel-border-medium rounded-md shadow-lg max-h-96 overflow-y-auto z-50">
          {results.map((result) => (
            <button
              key={result._id}
              onClick={() => handleResultClick(result.url)}
              className="w-full px-4 py-2.5 text-left hover:bg-intel-bg-tertiary border-b border-intel-border-light last:border-b-0 transition-colors"
            >
              <div className="flex items-center gap-3">
                {result.image && (
                  <div className="w-10 h-10 rounded bg-intel-bg-tertiary flex-shrink-0 overflow-hidden">
                    <img 
                      src={result.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-intel-text-primary truncate">
                    {result.title}
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-mono text-intel-text-tertiary">
                      {result.type}
                    </span>
                    {result.excerpt && (
                      <>
                        <span className="text-intel-text-muted">•</span>
                        <span className="text-xs text-intel-text-tertiary truncate">
                          {result.excerpt}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </button>
          ))}
          
          {/* View All Results */}
          <Link
            href={`/search?q=${encodeURIComponent(query)}`}
            className="block w-full px-4 py-2.5 text-center text-sm font-medium text-intel-accent-primary hover:bg-intel-bg-tertiary transition-colors border-t border-intel-border-light"
            onClick={() => setIsOpen(false)}
          >
            View all results
          </Link>
        </div>
      )}
      
      {/* No Results */}
      {isOpen && !isLoading && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-intel-bg-secondary border border-intel-border-medium rounded-md shadow-lg p-4 z-50">
          <p className="text-sm text-intel-text-secondary text-center">
            No results found
          </p>
        </div>
      )}
    </div>
  )
}

