import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '8cpm8p18',
  dataset: 'production',
  useCdn: false,
  token: 'sk6zXixHT6GfCIrjstUlk9DF6lBf4HvnpBC7whjDoDMru6QEGxLUuLMQt5Xz77OJWTBW7U4RpLRi8Wjsq0UYZpkoauFboCZQx1h6gvtUWKvekd9DfyMeV7j0YSXIYMYjlORiR4DVgSajZyCF5b3dWo7xVxEhdPtlWSMTUouXfYdmA3NhtFs6',
  apiVersion: '2025-10-06'
})

console.log('🚀 Uploading ALL sample data to Sanity...\n')

// First, delete the test org
console.log('🗑️  Deleting test data...')
await client.delete({query: '*[_type == "cartel"]'})

// Upload all your actual sample data
const data = [
  // Organization 1: Sinaloa Cartel
  {
    _type: 'cartel',
    _id: 'cartel-sinaloa',
    name: 'Sinaloa Cartel',
    slug: {_type: 'slug', current: 'sinaloa-cartel'},
    aliases: ['Pacific Cartel', 'Federation'],
    status: 'active',
    foundedDate: '1989-01-01',
    territory: {description: 'Sinaloa, Sonora, Chihuahua, Durango, Baja California'},
    primaryActivities: ['Drug Trafficking', 'Money Laundering']
  },
  // Organization 2: CJNG
  {
    _type: 'cartel',
    _id: 'cartel-cjng',
    name: 'Jalisco New Generation Cartel',
    slug: {_type: 'slug', current: 'cjng'},
    aliases: ['CJNG', 'Mata Zetas'],
    status: 'active',
    foundedDate: '2010-01-01',
    territory: {description: 'Jalisco, Colima, Michoacán, Guanajuato'},
    primaryActivities: ['Drug Trafficking', 'Extortion']
  },
  // Organization 3: Gulf Cartel
  {
    _type: 'cartel',
    _id: 'cartel-gulf',
    name: 'Gulf Cartel',
    slug: {_type: 'slug', current: 'gulf-cartel'},
    aliases: ['CDG'],
    status: 'fragmented',
    foundedDate: '1984-01-01',
    territory: {description: 'Tamaulipas, Nuevo León'},
    primaryActivities: ['Drug Trafficking', 'Human Smuggling']
  }
]

for (const doc of data) {
  try {
    await client.createOrReplace(doc)
    console.log(`✅ ${doc.name}`)
  } catch(e) {
    console.error(`❌ Failed: ${doc.name} - ${e.message}`)
  }
}

console.log('\n🎉 ALL DATA UPLOADED!')
console.log('Go to http://localhost:3000/cartels to see your live Sanity data!')


