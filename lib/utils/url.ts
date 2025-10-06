/**
 * URL UTILITIES
 * 
 * Functions for building and manipulating URLs
 */

/**
 * Build entity URL
 */
export function buildEntityUrl(type: string, slug: string): string {
  const typeMap: Record<string, string> = {
    cartel: 'cartels',
    person: 'people',
    incident: 'incidents',
    route: 'routes',
    location: 'locations'
  }
  
  const basePath = typeMap[type] || type
  return `/${basePath}/${slug}`
}

/**
 * Get entity type label
 */
export function getEntityTypeLabel(type: string): string {
  const labelMap: Record<string, string> = {
    cartel: 'Cartel',
    person: 'Person',
    incident: 'Incident',
    route: 'Trafficking Route',
    location: 'Location',
    citation: 'Citation'
  }
  
  return labelMap[type] || type
}

/**
 * Build search URL
 */
export function buildSearchUrl(query: string): string {
  return `/search?q=${encodeURIComponent(query)}`
}

/**
 * Extract domain from URL
 */
export function getDomain(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname.replace('www.', '')
  } catch {
    return 'Unknown'
  }
}

/**
 * Check if URL is external
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname !== window.location.hostname
  } catch {
    return false
  }
}


