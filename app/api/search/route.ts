/**
 * SEARCH API ENDPOINT
 * 
 * Server-side search API
 */

import { NextRequest, NextResponse } from 'next/server'
import { usingSampleData } from '@/lib/sanity/client'
import { search as sampleSearch } from '@/lib/sanity/sample-data'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q') || ''
  
  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] })
  }
  
  try {
    if (usingSampleData()) {
      // Use sample data search
      const results = sampleSearch(query)
      return NextResponse.json({ results })
    } else {
      // Would search Sanity in production
      // const results = await client.fetch(searchQuery, { searchTerm: query + '*' })
      return NextResponse.json({ results: [] })
    }
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ results: [], error: 'Search failed' }, { status: 500 })
  }
}


