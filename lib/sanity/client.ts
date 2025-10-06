/**
 * SANITY CLIENT CONFIGURATION
 * 
 * Handles connection to Sanity Content Lake
 */

import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '@/types'

// Initialize Sanity client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8cpm8p18',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2025-10-06',
  useCdn: true, // Use CDN for faster cached reads
  token: process.env.SANITY_API_TOKEN, // Only needed for write operations
})

// Image URL builder
const builder = imageUrlBuilder(client)

/**
 * Generate image URL from Sanity image
 */
export function urlFor(source: SanityImage) {
  return builder.image(source)
}

