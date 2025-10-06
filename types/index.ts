/**
 * SHARED TYPES
 * 
 * TypeScript type definitions for the application
 */

import type { PortableTextBlock as SanityPortableTextBlock } from '@portabletext/types'

// Re-export PortableTextBlock from Sanity
export type PortableTextBlock = SanityPortableTextBlock

// Sanity common types
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface Slug {
  _type: 'slug'
  current: string
}

// Status types
export type Status = 'active' | 'captured' | 'deceased' | 'fugitive' | 'unknown' | 'defunct' | 'fragmented'
export type IncidentType = 'arrest' | 'seizure' | 'violence' | 'other'
export type RouteType = 'land' | 'sea' | 'air' | 'tunnel'
export type LocationType = 'city' | 'region' | 'state' | 'country' | 'poi'
export type SourceType = 'courtDocument' | 'newsArticle' | 'governmentReport' | 'academicPaper' | 'pressRelease' | 'other'
export type Reliability = 'verified' | 'likely' | 'unconfirmed'

// Citation
export interface Citation {
  _id: string
  _type: 'citation'
  title: string
  sourceType: SourceType
  url?: string
  publicationDate?: string
  publisher?: string
  authors?: string[]
  accessDate?: string
  reliability: Reliability
  archived?: boolean
  archivedUrl?: string
  notes?: string
}

// Event object
export interface Event {
  _key?: string
  _type: 'event'
  date: string
  title: string
  description?: string
  location?: string
}

// Reward object
export interface Reward {
  _key?: string
  _type: 'reward'
  amount: number
  currency: string
  offeredBy: string
  date?: string
}

// Cartel/Organization
export interface Cartel {
  _id: string
  _type: 'cartel'
  name: string
  slug: Slug
  aliases?: string[]
  foundedDate?: string
  status: Status
  territory?: {
    description?: string
    coordinates?: any[]
  }
  primaryActivities?: string[]
  estimatedRevenue?: {
    amount?: number
    currency?: string
    year?: number
    confidence?: string
  }
  logo?: SanityImage
  description?: PortableTextBlock[]
  leadership?: Person[]
  rivals?: Cartel[]
  allies?: Cartel[]
  timeline?: Event[]
  routes?: Route[]
  sources?: Citation[]
  recentIncidents?: Incident[]
}

// Person
export interface Person {
  _id: string
  _type: 'person'
  fullName: string
  slug: Slug
  aliases?: string[]
  photo?: SanityImage
  dateOfBirth?: string
  placeOfBirth?: string
  nationality?: string[]
  status: Status
  lastKnownLocation?: {
    location?: string
    coordinates?: any
    date?: string
  }
  roles?: string[]
  affiliations?: Cartel[]
  knownAssociates?: Person[]
  biography?: PortableTextBlock[]
  criminalHistory?: Event[]
  rewards?: Reward[]
  timeline?: Event[]
  sources?: Citation[]
}

// Incident
export interface Incident {
  _id: string
  _type: 'incident'
  title: string
  slug: Slug
  date: string
  incidentType: IncidentType
  location?: {
    address?: string
    coordinates?: any
  }
  description?: PortableTextBlock[]
  involvedOrganizations?: Cartel[]
  involvedPersons?: Person[]
  lawEnforcementAgencies?: string[]
  seizures?: any[]
  casualties?: {
    killed?: number
    injured?: number
  }
  sources?: Citation[]
  locationName?: string
}

// Route
export interface Route {
  _id: string
  _type: 'route'
  name: string
  slug: Slug
  routeType: RouteType
  status: Status
  origin?: {
    location?: string
    coordinates?: any
  }
  destination?: {
    location?: string
    coordinates?: any
  }
  waypoints?: any[]
  commodities?: string[]
  controlledBy?: Cartel[]
  description?: PortableTextBlock[]
  sources?: Citation[]
}

// Location
export interface Location {
  _id: string
  _type: 'location'
  name: string
  slug: Slug
  locationType: LocationType
  country?: string
  coordinates?: any
  description?: PortableTextBlock[]
  controllingOrganizations?: Cartel[]
  recentIncidents?: Incident[]
  sources?: Citation[]
}

