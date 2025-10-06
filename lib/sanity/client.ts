/**
 * SANITY CLIENT CONFIGURATION
 * 
 * Handles connection to Sanity Content Lake
 * Supports switching between sample data and live data via environment variable
 */

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '@/types'

/**
 * Check if we're using sample data
 */
export function usingSampleData(): boolean {
  return process.env.NEXT_PUBLIC_USE_SAMPLE_DATA === 'true'
}

// Only initialize Sanity client if we have a project ID (not in sample data mode)
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const hasValidConfig = projectId && projectId.length > 0

// Initialize Sanity client (only if not using sample data)
export const client = hasValidConfig ? createClient({
  projectId: projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-10-05', // Use current date in YYYY-MM-DD format
  useCdn: true, // Use CDN for faster cached reads
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
}) : null as any

// Image URL builder (only if client exists)
const builder = hasValidConfig && client ? imageUrlBuilder(client) : null

/**
 * Generate image URL from Sanity image
 */
export function urlFor(source: SanityImage) {
  if (!builder) {
    // Return a placeholder or the source URL if in sample data mode
    return { url: () => source?.asset?.url || '' }
  }
  return builder.image(source)
}

