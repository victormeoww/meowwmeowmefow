/**
 * SANITY SCHEMAS EXPORT
 * 
 * Central export point for all Sanity schemas
 */

// Object types
import { event } from './objects/event'
import { reward } from './objects/reward'
import { seizure } from './objects/seizure'

// Document types
import { cartel } from './cartel'
import { person } from './person'
import { incident } from './incident'
import { route } from './route'
import { location } from './location'
import { citation } from './citation'

export const schemaTypes = [
  // Objects must be defined before documents that use them
  event,
  reward,
  seizure,
  
  // Documents
  cartel,
  person,
  incident,
  route,
  location,
  citation
]


