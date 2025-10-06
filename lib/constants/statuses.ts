/**
 * STATUS CONSTANTS
 * 
 * Definitions and configurations for status types
 */

import type { Status, IncidentType, RouteType, LocationType, SourceType, Reliability } from '@/types'

// Status configurations
export const STATUS_CONFIG: Record<Status, { label: string; color: string; bgColor: string }> = {
  active: {
    label: 'Active',
    color: 'text-green-700',
    bgColor: 'bg-green-100'
  },
  defunct: {
    label: 'Defunct',
    color: 'text-gray-700',
    bgColor: 'bg-gray-100'
  },
  fragmented: {
    label: 'Fragmented',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100'
  },
  captured: {
    label: 'Captured',
    color: 'text-amber-700',
    bgColor: 'bg-amber-100'
  },
  deceased: {
    label: 'Deceased',
    color: 'text-red-700',
    bgColor: 'bg-red-100'
  },
  fugitive: {
    label: 'Fugitive',
    color: 'text-orange-700',
    bgColor: 'bg-orange-100'
  },
  unknown: {
    label: 'Unknown',
    color: 'text-gray-700',
    bgColor: 'bg-gray-100'
  }
}

// Incident type configurations
export const INCIDENT_TYPE_CONFIG: Record<IncidentType, { label: string; icon: string }> = {
  seizure: {
    label: 'Seizure',
    icon: '📦'
  },
  arrest: {
    label: 'Arrest',
    icon: '🚔'
  },
  violence: {
    label: 'Violence',
    icon: '⚠️'
  },
  operation: {
    label: 'Operation',
    icon: '🎯'
  },
  escape: {
    label: 'Escape',
    icon: '🚨'
  },
  extradition: {
    label: 'Extradition',
    icon: '✈️'
  },
  other: {
    label: 'Other',
    icon: '📌'
  }
}

// Route type configurations
export const ROUTE_TYPE_CONFIG: Record<RouteType, { label: string; icon: string; color: string }> = {
  land: {
    label: 'Land Route',
    icon: '🚛',
    color: 'text-green-700'
  },
  sea: {
    label: 'Maritime Route',
    icon: '🚢',
    color: 'text-blue-700'
  },
  air: {
    label: 'Air Route',
    icon: '✈️',
    color: 'text-sky-700'
  },
  tunnel: {
    label: 'Tunnel',
    icon: '🔦',
    color: 'text-amber-700'
  }
}

// Location type configurations
export const LOCATION_TYPE_CONFIG: Record<LocationType, { label: string }> = {
  city: {
    label: 'City'
  },
  state: {
    label: 'State/Province'
  },
  region: {
    label: 'Region'
  },
  borderCrossing: {
    label: 'Border Crossing'
  },
  other: {
    label: 'Other'
  }
}

// Source type configurations
export const SOURCE_TYPE_CONFIG: Record<SourceType, { label: string; icon: string }> = {
  courtDocument: {
    label: 'Court Document',
    icon: '⚖️'
  },
  newsArticle: {
    label: 'News Article',
    icon: '📰'
  },
  governmentReport: {
    label: 'Government Report',
    icon: '🏛️'
  },
  academicPaper: {
    label: 'Academic Paper',
    icon: '📚'
  },
  pressRelease: {
    label: 'Press Release',
    icon: '📢'
  },
  other: {
    label: 'Other',
    icon: '📄'
  }
}

// Reliability configurations
export const RELIABILITY_CONFIG: Record<Reliability, { label: string; color: string; bgColor: string }> = {
  verified: {
    label: 'Verified',
    color: 'text-green-700',
    bgColor: 'bg-green-100'
  },
  likely: {
    label: 'Likely Accurate',
    color: 'text-amber-700',
    bgColor: 'bg-amber-100'
  },
  unconfirmed: {
    label: 'Unconfirmed',
    color: 'text-red-700',
    bgColor: 'bg-red-100'
  }
}


