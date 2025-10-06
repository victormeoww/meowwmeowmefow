/**
 * IMPORT SAMPLE DATA TO SANITY
 * 
 * Run this to upload all sample data to your Sanity project
 */

const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: '8cpm8p18',
  dataset: 'production',
  useCdn: false,
  token: 'sk6zXixHT6GfCIrjstUlk9DF6lBf4HvnpBC7whjDoDMru6QEGxLUuLMQt5Xz77OJWTBW7U4RpLRi8Wjsq0UYZpkoauFboCZQx1h6gvtUWKvekd9DfyMeV7j0YSXIYMYjlORiR4DVgSajZyCF5b3dWo7xVxEhdPtlWSMTUouXfYdmA3NhtFs6',
  apiVersion: '2025-10-06'
})

const sampleOrganization = {
  _type: 'cartel',
  name: 'Sinaloa Cartel',
  slug: { _type: 'slug', current: 'sinaloa-cartel' },
  aliases: ['Pacific Cartel', 'Federation', 'Guzmán-Loera Organization'],
  foundedDate: '1989-01-01',
  status: 'active',
  territory: {
    description: 'Sinaloa, Sonora, Chihuahua, Durango, Baja California'
  },
  primaryActivities: ['Drug Trafficking', 'Money Laundering', 'Arms Trafficking'],
  description: [
    {
      _type: 'block',
      style: 'normal',
      children: [
        {
          _type: 'span',
          text: 'The Sinaloa Cartel is an international drug trafficking, money laundering, and organized crime syndicate established in Mexico during the late 1980s.'
        }
      ]
    }
  ]
}

async function importData() {
  try {
    console.log('🚀 Importing sample organization to Sanity...')
    
    const result = await client.create(sampleOrganization)
    
    console.log('✅ Successfully imported:', result.name)
    console.log('📊 Document ID:', result._id)
    console.log('')
    console.log('🎉 Done! Now go to Sanity Vision or Content browser to see it!')
    console.log('   Visit: https://www.sanity.io/manage/personal/project/8cpm8p18')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

importData()


