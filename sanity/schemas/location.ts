import { defineType, defineField } from 'sanity'

/**
 * LOCATION SCHEMA
 * 
 * Document type for cities, regions, territories, and border crossings
 */

export const location = defineType({
  name: 'location',
  title: 'Location',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Location Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'locationType',
      title: 'Location Type',
      type: 'string',
      options: {
        list: [
          { title: 'City', value: 'city' },
          { title: 'State/Province', value: 'state' },
          { title: 'Region', value: 'region' },
          { title: 'Border Crossing', value: 'borderCrossing' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    
    // Geographic Data
    defineField({
      name: 'coordinates',
      title: 'Coordinates',
      type: 'geopoint'
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    
    // Control
    defineField({
      name: 'controllingCartels',
      title: 'Controlling Cartels',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cartel' }] }],
      description: 'Organizations with influence in this area'
    }),
    
    // Content
    defineField({
      name: 'significance',
      title: 'Significance',
      type: 'array',
      of: [
        { 
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'citation',
                type: 'object',
                title: 'Citation',
                fields: [
                  {
                    name: 'citation',
                    type: 'reference',
                    to: [{ type: 'citation' }]
                  }
                ]
              }
            ]
          }
        },
        { type: 'image' }
      ],
      description: 'Why this location is strategically important'
    }),
    
    // Citations
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'citation' }] }]
    })
  ],
  
  preview: {
    select: {
      title: 'name',
      type: 'locationType',
      country: 'country'
    },
    prepare({ title, type, country }) {
      return {
        title,
        subtitle: `${type} • ${country}`
      }
    }
  }
})


