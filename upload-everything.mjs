import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '8cpm8p18',
  dataset: 'production',
  useCdn: false,
  token: 'sk6zXixHT6GfCIrjstUlk9DF6lBf4HvnpBC7whjDoDMru6QEGxLUuLMQt5Xz77OJWTBW7U4RpLRi8Wjsq0UYZpkoauFboCZQx1h6gvtUWKvekd9DfyMeV7j0YSXIYMYjlORiR4DVgSajZyCF5b3dWo7xVxEhdPtlWSMTUouXfYdmA3NhtFs6',
  apiVersion: '2025-10-06'
})

console.log('🚀 Uploading ALL data to Sanity...\n')

// Clear existing data
console.log('🗑️  Clearing existing data...')
await client.delete({query: '*[_type in ["cartel", "person", "incident", "route", "location", "citation"]]'})

// Citations
const citations = [
  {_id: 'citation-001', _type: 'citation', title: 'DEA Intelligence Report 2024', sourceType: 'governmentReport', reliability: 'verified', publisher: 'DEA'},
  {_id: 'citation-002', _type: 'citation', title: 'US v. Guzmán Court Documents', sourceType: 'courtDocument', reliability: 'verified', publisher: 'DOJ'},
  {_id: 'citation-003', _type: 'citation', title: 'Mexican Navy Press Release', sourceType: 'pressRelease', reliability: 'verified', publisher: 'SEMAR'}
]

// Organizations
const organizations = [
  {
    _id: 'cartel-sinaloa', _type: 'cartel', name: 'Sinaloa Cartel', 
    slug: {_type: 'slug', current: 'sinaloa-cartel'},
    aliases: ['Pacific Cartel', 'Federation'], status: 'active', foundedDate: '1989-01-01',
    territory: {description: 'Sinaloa, Sonora, Chihuahua, Durango, Baja California'},
    primaryActivities: ['Drug Trafficking', 'Money Laundering'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'cartel-cjng', _type: 'cartel', name: 'Jalisco New Generation Cartel',
    slug: {_type: 'slug', current: 'cjng'},
    aliases: ['CJNG', 'Mata Zetas'], status: 'active', foundedDate: '2010-01-01',
    territory: {description: 'Jalisco, Colima, Michoacán, Guanajuato'},
    primaryActivities: ['Drug Trafficking', 'Extortion'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'cartel-gulf', _type: 'cartel', name: 'Gulf Cartel',
    slug: {_type: 'slug', current: 'gulf-cartel'},
    aliases: ['CDG'], status: 'fragmented', foundedDate: '1984-01-01',
    territory: {description: 'Tamaulipas, Nuevo León'},
    primaryActivities: ['Drug Trafficking', 'Human Smuggling'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  }
]

// Subjects
const subjects = [
  {
    _id: 'person-chapo', _type: 'person', fullName: 'Joaquín Archivaldo Guzmán Loera',
    slug: {_type: 'slug', current: 'joaquin-guzman'},
    aliases: ['El Chapo'], status: 'captured', dateOfBirth: '1957-04-04',
    placeOfBirth: 'La Tuna, Badiraguato, Sinaloa, Mexico',
    nationality: ['Mexican'], roles: ['Leader'],
    affiliations: [{_type: 'reference', _ref: 'cartel-sinaloa'}],
    sources: [{_type: 'reference', _ref: 'citation-002'}]
  },
  {
    _id: 'person-mayo', _type: 'person', fullName: 'Ismael Mario Zambada García',
    slug: {_type: 'slug', current: 'ismael-zambada'},
    aliases: ['El Mayo'], status: 'captured', dateOfBirth: '1948-01-01',
    placeOfBirth: 'El Álamo, Culiacán, Sinaloa, Mexico',
    nationality: ['Mexican'], roles: ['Leader'],
    affiliations: [{_type: 'reference', _ref: 'cartel-sinaloa'}],
    sources: [{_type: 'reference', _ref: 'citation-002'}]
  },
  {
    _id: 'person-mencho', _type: 'person', fullName: 'Nemesio Rubén Oseguera Cervantes',
    slug: {_type: 'slug', current: 'nemesio-oseguera'},
    aliases: ['El Mencho'], status: 'fugitive', dateOfBirth: '1966-07-17',
    placeOfBirth: 'Aguililla, Michoacán, Mexico',
    nationality: ['Mexican'], roles: ['Leader'],
    affiliations: [{_type: 'reference', _ref: 'cartel-cjng'}],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  }
]

// Incidents
const incidents = [
  {
    _id: 'incident-001', _type: 'incident', title: 'Major Fentanyl Seizure in Culiacán',
    slug: {_type: 'slug', current: 'culiacan-fentanyl-2024'},
    date: '2024-06-15T10:00:00Z', incidentType: 'seizure',
    location: {address: 'Culiacán, Sinaloa, Mexico'},
    lawEnforcementAgencies: ['Mexican Navy', 'DEA'],
    sources: [{_type: 'reference', _ref: 'citation-003'}]
  },
  {
    _id: 'incident-002', _type: 'incident', title: 'Tunnel Discovery at Tijuana-San Diego Border',
    slug: {_type: 'slug', current: 'tijuana-tunnel-2024'},
    date: '2024-03-10T14:30:00Z', incidentType: 'seizure',
    location: {address: 'Tijuana-San Diego Border'},
    lawEnforcementAgencies: ['US Border Patrol', 'DEA'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'incident-003', _type: 'incident', title: 'Violent Clash in Jalisco',
    slug: {_type: 'slug', current: 'jalisco-clash-2024'},
    date: '2024-05-20T16:00:00Z', incidentType: 'violence',
    location: {address: 'Guadalajara, Jalisco, Mexico'},
    lawEnforcementAgencies: ['Mexican Army'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  }
]

// Routes
const routes = [
  {
    _id: 'route-001', _type: 'route', name: 'Pacific Coast Corridor',
    slug: {_type: 'slug', current: 'pacific-coast-corridor'},
    routeType: 'land', status: 'active',
    origin: {location: 'Colombia'},
    destination: {location: 'United States (California)'},
    commodities: ['cocaine', 'heroin', 'fentanyl'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'route-002', _type: 'route', name: 'Gulf of Mexico Maritime Route',
    slug: {_type: 'slug', current: 'gulf-maritime-route'},
    routeType: 'sea', status: 'active',
    origin: {location: 'Venezuela'},
    destination: {location: 'Texas Gulf Coast'},
    commodities: ['cocaine', 'marijuana'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'route-003', _type: 'route', name: 'Central American Land Bridge',
    slug: {_type: 'slug', current: 'central-american-land-bridge'},
    routeType: 'land', status: 'active',
    origin: {location: 'Colombia'},
    destination: {location: 'Mexico-Guatemala Border'},
    commodities: ['cocaine', 'heroin'],
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  }
]

// Locations
const locations = [
  {
    _id: 'location-001', _type: 'location', name: 'Culiacán',
    slug: {_type: 'slug', current: 'culiacan'},
    locationType: 'city', country: 'Mexico',
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'location-002', _type: 'location', name: 'Tijuana',
    slug: {_type: 'slug', current: 'tijuana'},
    locationType: 'city', country: 'Mexico',
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'location-003', _type: 'location', name: 'Guadalajara',
    slug: {_type: 'slug', current: 'guadalajara'},
    locationType: 'city', country: 'Mexico',
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  },
  {
    _id: 'location-004', _type: 'location', name: 'Sinaloa',
    slug: {_type: 'slug', current: 'sinaloa-state'},
    locationType: 'state', country: 'Mexico',
    sources: [{_type: 'reference', _ref: 'citation-001'}]
  }
]

// Upload everything
console.log('📤 Citations...')
for (const doc of citations) {
  await client.createOrReplace(doc)
  console.log(`  ✅ ${doc.title}`)
}

console.log('\n📤 Organizations...')
for (const doc of organizations) {
  await client.createOrReplace(doc)
  console.log(`  ✅ ${doc.name}`)
}

console.log('\n📤 Subjects...')
for (const doc of subjects) {
  await client.createOrReplace(doc)
  console.log(`  ✅ ${doc.fullName}`)
}

console.log('\n📤 Incidents...')
for (const doc of incidents) {
  await client.createOrReplace(doc)
  console.log(`  ✅ ${doc.title}`)
}

console.log('\n📤 Routes...')
for (const doc of routes) {
  await client.createOrReplace(doc)
  console.log(`  ✅ ${doc.name}`)
}

console.log('\n📤 Locations...')
for (const doc of locations) {
  await client.createOrReplace(doc)
  console.log(`  ✅ ${doc.name}`)
}

console.log('\n🎉 EVERYTHING UPLOADED!')
console.log('\n📊 Total:')
console.log(`  - 3 Citations`)
console.log(`  - 3 Organizations`)
console.log(`  - 3 Subjects`)
console.log(`  - 3 Incidents`)
console.log(`  - 3 Routes`)
console.log(`  - 4 Locations`)
console.log('\n🌐 Visit: http://localhost:3000')


