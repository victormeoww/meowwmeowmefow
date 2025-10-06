import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '8cpm8p18',
  dataset: 'production',
  useCdn: false,
  token: 'sk6zXixHT6GfCIrjstUlk9DF6lBf4HvnpBC7whjDoDMru6QEGxLUuLMQt5Xz77OJWTBW7U4RpLRi8Wjsq0UYZpkoauFboCZQx1h6gvtUWKvekd9DfyMeV7j0YSXIYMYjlORiR4DVgSajZyCF5b3dWo7xVxEhdPtlWSMTUouXfYdmA3NhtFs6',
  apiVersion: '2025-10-06'
})

console.log('🔍 Checking what\'s in Sanity...\n')

const cartels = await client.fetch('*[_type == "cartel"]')
console.log(`Found ${cartels.length} cartels:`)
cartels.forEach(c => console.log(`  - ${c.name}`))

const people = await client.fetch('*[_type == "person"]')
console.log(`\nFound ${people.length} people:`)
people.forEach(p => console.log(`  - ${p.fullName}`))

const incidents = await client.fetch('*[_type == "incident"]')
console.log(`\nFound ${incidents.length} incidents`)

const routes = await client.fetch('*[_type == "route"]')
console.log(`Found ${routes.length} routes`)

const locations = await client.fetch('*[_type == "location"]')
console.log(`Found ${locations.length} locations`)

console.log('\n📊 Total documents:', cartels.length + people.length + incidents.length + routes.length + locations.length)


