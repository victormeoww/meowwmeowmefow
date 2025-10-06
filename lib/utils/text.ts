/**
 * TEXT UTILITIES
 * 
 * Functions for text manipulation and formatting
 */

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length).trim() + '...'
}

/**
 * Convert string to title case
 */
export function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return num.toLocaleString('en-US')
}

/**
 * Format currency
 */
export function formatCurrency(amount: number, currency: string = 'USD'): string {
  const symbol = currency === 'USD' ? '$' : currency + ' '
  
  if (amount >= 1000000000) {
    return `${symbol}${(amount / 1000000000).toFixed(1)}B`
  } else if (amount >= 1000000) {
    return `${symbol}${(amount / 1000000).toFixed(1)}M`
  } else if (amount >= 1000) {
    return `${symbol}${(amount / 1000).toFixed(1)}K`
  }
  
  return `${symbol}${amount.toLocaleString()}`
}

/**
 * Pluralize word based on count
 */
export function pluralize(word: string, count: number): string {
  if (count === 1) return word
  
  // Simple pluralization rules
  if (word.endsWith('y')) {
    return word.slice(0, -1) + 'ies'
  } else if (word.endsWith('s') || word.endsWith('x') || word.endsWith('ch') || word.endsWith('sh')) {
    return word + 'es'
  } else {
    return word + 's'
  }
}

/**
 * Generate excerpt from text
 */
export function generateExcerpt(text: string, wordCount: number = 30): string {
  const words = text.split(/\s+/)
  if (words.length <= wordCount) return text
  return words.slice(0, wordCount).join(' ') + '...'
}

/**
 * Slugify text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}


