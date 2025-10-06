/**
 * GROQ QUERIES
 * 
 * All Sanity queries for fetching data
 */

// ==================== CARTEL QUERIES ====================

export const allCartelsQuery = `
  *[_type == "cartel"] | order(name asc) {
    _id,
    name,
    slug,
    status,
    foundedDate,
    "logoUrl": logo.asset->url,
    "leaderCount": count(leadership),
    "territory": territory.description
  }
`

export const cartelBySlugQuery = `
  *[_type == "cartel" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    slug,
    aliases,
    foundedDate,
    status,
    territory,
    primaryActivities,
    estimatedRevenue,
    "logoUrl": logo.asset->url,
    description,
    
    "leaders": leadership[]->{
      _id,
      fullName,
      slug,
      status,
      "photoUrl": photo.asset->url,
      roles
    },
    
    "rivals": rivals[]->{
      _id,
      name,
      slug,
      status
    },
    
    "allies": allies[]->{
      _id,
      name,
      slug,
      status
    },
    
    timeline,
    
    "routes": routes[]->{
      _id,
      name,
      slug,
      routeType,
      status
    },
    
    "recentIncidents": *[_type == "incident" && references(^._id)] 
      | order(date desc) [0...5] {
      _id,
      title,
      slug,
      date,
      incidentType,
      "locationName": location.address
    },
    
    "sources": sources[]->{
      _id,
      title,
      url,
      sourceType,
      reliability,
      publicationDate
    }
  }
`

// ==================== PERSON QUERIES ====================

export const allPeopleQuery = `
  *[_type == "person"] | order(fullName asc) {
    _id,
    fullName,
    slug,
    status,
    "photoUrl": photo.asset->url,
    roles,
    "affiliationCount": count(affiliations)
  }
`

export const personBySlugQuery = `
  *[_type == "person" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    fullName,
    slug,
    aliases,
    "photoUrl": photo.asset->url,
    dateOfBirth,
    placeOfBirth,
    nationality,
    status,
    lastKnownLocation,
    roles,
    
    "affiliations": affiliations[]->{
      _id,
      name,
      slug,
      status
    },
    
    "knownAssociates": knownAssociates[]->{
      _id,
      fullName,
      slug,
      status,
      "photoUrl": photo.asset->url
    },
    
    biography,
    criminalHistory,
    rewards,
    timeline,
    
    "recentIncidents": *[_type == "incident" && references(^._id)] 
      | order(date desc) [0...5] {
      _id,
      title,
      slug,
      date,
      incidentType
    },
    
    "sources": sources[]->{
      _id,
      title,
      url,
      sourceType,
      reliability,
      publicationDate
    }
  }
`

// ==================== INCIDENT QUERIES ====================

export const allIncidentsQuery = `
  *[_type == "incident"] | order(date desc) [0...50] {
    _id,
    title,
    slug,
    date,
    incidentType,
    "locationName": location.address,
    "involvedCartelNames": involvedCartels[]->name,
    casualties
  }
`

export const incidentBySlugQuery = `
  *[_type == "incident" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    date,
    location,
    incidentType,
    description,
    
    "involvedCartels": involvedCartels[]->{
      _id,
      name,
      slug,
      status
    },
    
    "involvedPersons": involvedPersons[]->{
      _id,
      fullName,
      slug,
      status,
      "photoUrl": photo.asset->url
    },
    
    casualties,
    seized,
    lawEnforcementAgencies,
    outcome,
    significance,
    
    "relatedIncidents": relatedIncidents[]->{
      _id,
      title,
      slug,
      date,
      incidentType
    },
    
    "sources": sources[]->{
      _id,
      title,
      url,
      sourceType,
      reliability,
      publicationDate
    }
  }
`

// ==================== ROUTE QUERIES ====================

export const allRoutesQuery = `
  *[_type == "route"] | order(name asc) {
    _id,
    name,
    slug,
    routeType,
    status,
    "originLocation": origin.location,
    "destinationLocation": destination.location,
    commodities
  }
`

export const routeBySlugQuery = `
  *[_type == "route" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    slug,
    routeType,
    origin,
    destination,
    waypoints,
    
    "controllingCartels": controllingCartels[]->{
      _id,
      name,
      slug,
      status
    },
    
    commodities,
    status,
    description,
    timeline,
    
    "sources": sources[]->{
      _id,
      title,
      url,
      sourceType,
      reliability,
      publicationDate
    }
  }
`

// ==================== LOCATION QUERIES ====================

export const allLocationsQuery = `
  *[_type == "location"] | order(name asc) {
    _id,
    name,
    slug,
    locationType,
    country,
    "controlCount": count(controllingCartels)
  }
`

export const locationBySlugQuery = `
  *[_type == "location" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    name,
    slug,
    locationType,
    coordinates,
    country,
    
    "controllingCartels": controllingCartels[]->{
      _id,
      name,
      slug,
      status
    },
    
    significance,
    
    "incidents": *[_type == "incident" && location.address match $name + "*"] 
      | order(date desc) [0...10] {
      _id,
      title,
      slug,
      date,
      incidentType
    },
    
    "sources": sources[]->{
      _id,
      title,
      url,
      sourceType,
      reliability,
      publicationDate
    }
  }
`

// ==================== SEARCH QUERY ====================

export const searchQuery = `
  *[
    _type in ["cartel", "person", "incident", "route", "location"] &&
    (
      name match $searchTerm + "*" ||
      fullName match $searchTerm + "*" ||
      title match $searchTerm + "*" ||
      aliases[] match $searchTerm + "*"
    )
  ] [0...20] {
    _id,
    _type,
    "title": coalesce(name, fullName, title),
    slug,
    "image": coalesce(logo.asset->url, photo.asset->url),
    "excerpt": select(
      _type == "cartel" => territory.description,
      _type == "person" => placeOfBirth,
      _type == "incident" => location.address,
      _type == "route" => origin.location + " to " + destination.location,
      _type == "location" => country
    )
  }
`


