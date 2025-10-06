/**
 * SEARCH API ENDPOINT
 * 
 * Server-side search API
 */

import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity/client'
import { searchQuery } from '@/lib/sanity/queries'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q') || ''
  
  if (!query || query.length < 2) {
    return NextResponse.json({ results: [] })
  }
  
  try {
    const results = await client.fetch(searchQuery, { searchTerm: query })
    
    // Format results with URLs
    const formattedResults = results.map((result: any) => ({
      ...result,
      url: `/${result._type === 'cartel' ? 'cartels' : result._type === 'person' ? 'people' : result._type}s/${result.slug.current}`,
      type: result._type
    }))
    
    return NextResponse.json({ results: formattedResults })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json({ results: [], error: 'Search failed' }, { status: 500 })
  }
}


