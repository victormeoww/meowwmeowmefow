import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'NarcoWatch Intelligence',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '8cpm8p18',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Intelligence Database')
          .items([
            S.listItem()
              .title('Organizations')
              .schemaType('cartel')
              .child(S.documentTypeList('cartel').title('Organizations')),
            S.listItem()
              .title('Subjects')
              .schemaType('person')
              .child(S.documentTypeList('person').title('Subjects')),
            S.listItem()
              .title('Incidents')
              .schemaType('incident')
              .child(S.documentTypeList('incident').title('Incidents')),
            S.listItem()
              .title('Routes')
              .schemaType('route')
              .child(S.documentTypeList('route').title('Routes')),
            S.listItem()
              .title('Locations')
              .schemaType('location')
              .child(S.documentTypeList('location').title('Locations')),
            S.divider(),
            S.listItem()
              .title('Citations')
              .schemaType('citation')
              .child(S.documentTypeList('citation').title('Citations'))
          ])
    }),
    visionTool()
  ],
  
  schema: {
    types: schemaTypes
  }
})

