import {createClient} from '@sanity/client'

const client = createClient({
  projectId: '8cpm8p18',
  dataset: 'production',
  useCdn: false,
  token: 'sk6zXixHT6GfCIrjstUlk9DF6lBf4HvnpBC7whjDoDMru6QEGxLUuLMQt5Xz77OJWTBW7U4RpLRi8Wjsq0UYZpkoauFboCZQx1h6gvtUWKvekd9DfyMeV7j0YSXIYMYjlORiR4DVgSajZyCF5b3dWo7xVxEhdPtlWSMTUouXfYdmA3NhtFs6',
  apiVersion: '2025-10-06'
})

const testOrg = {
  _type: 'cartel',
  name: 'Sinaloa Cartel',
  slug: {_type: 'slug', current: 'sinaloa-cartel'},
  status: 'active',
  foundedDate: '1989-01-01',
  territory: {
    description: 'Sinaloa, Sonora, Chihuahua, Durango'
  },
  description: [
    {
      _type: 'block',
      children: [{_type: 'span', text: 'The Sinaloa Cartel is a major drug trafficking organization.'}]
    }
  ]
}

console.log('🚀 Uploading to Sanity...')
client.create(testOrg).then(result => {
  console.log('✅ SUCCESS! Organization created:', result.name)
  console.log('📊 ID:', result._id)
  console.log('')
  console.log('🎉 Now switch your app to Sanity mode:')
  console.log('   Update .env.local: NEXT_PUBLIC_USE_SAMPLE_DATA=false')
  console.log('   Restart: npm run dev')
}).catch(err => {
  console.error('❌ Error:', err.message)
})


