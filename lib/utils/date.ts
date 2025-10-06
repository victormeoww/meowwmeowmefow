/**
 * DATE UTILITIES
 * 
 * Functions for formatting dates consistently across the application
 */

import { format, formatDistance, parseISO } from 'date-fns'

/**
 * Format date as "January 15, 2024"
 */
export function formatDate(date: string | Date | undefined): string {
  if (!date) return 'Unknown'
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return format(dateObj, 'MMMM d, yyyy')
  } catch {
    return 'Unknown'
  }
}

/**
 * Format date as "Jan 15, 2024"
 */
export function formatDateShort(date: string | Date | undefined): string {
  if (!date) return 'Unknown'
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return format(dateObj, 'MMM d, yyyy')
  } catch {
    return 'Unknown'
  }
}

/**
 * Format date as "2024-01-15"
 */
export function formatDateISO(date: string | Date | undefined): string {
  if (!date) return ''
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return format(dateObj, 'yyyy-MM-dd')
  } catch {
    return ''
  }
}

/**
 * Format datetime as "January 15, 2024 at 10:30 AM"
 */
export function formatDateTime(date: string | Date | undefined): string {
  if (!date) return 'Unknown'
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return format(dateObj, 'MMMM d, yyyy \'at\' h:mm a')
  } catch {
    return 'Unknown'
  }
}

/**
 * Format as relative time "2 days ago"
 */
export function formatRelative(date: string | Date | undefined): string {
  if (!date) return 'Unknown'
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return formatDistance(dateObj, new Date(), { addSuffix: true })
  } catch {
    return 'Unknown'
  }
}

/**
 * Get year from date
 */
export function getYear(date: string | Date | undefined): string {
  if (!date) return 'Unknown'
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return format(dateObj, 'yyyy')
  } catch {
    return 'Unknown'
  }
}


