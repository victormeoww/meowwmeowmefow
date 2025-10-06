import { defineType, defineField } from 'sanity'

/**
 * CARTEL SCHEMA
 * 
 * Primary document type for drug trafficking organizations
 */

export const cartel = defineType({
  name: 'cartel',
  title: 'Cartel',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Cartel Name',
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
      name: 'aliases',
      title: 'Also Known As',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Alternative names for this organization'
    }),
    defineField({
      name: 'foundedDate',
      title: 'Founded',
      type: 'date'
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Defunct', value: 'defunct' },
          { title: 'Fragmented', value: 'fragmented' },
          { title: 'Unknown', value: 'unknown' }
        ],
        layout: 'radio'
      },
      initialValue: 'active',
      validation: Rule => Rule.required()
    }),
    
    // Territory
    defineField({
      name: 'territory',
      title: 'Territory',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Territory Description',
          type: 'text',
          rows: 3,
          description: 'e.g., "Sinaloa, Sonora, Chihuahua, Durango"'
        },
        {
          name: 'coordinates',
          title: 'Territory Coordinates',
          type: 'array',
          of: [{ type: 'geopoint' }],
          description: 'Points defining territorial boundaries'
        }
      ]
    }),
    
    // Activities
    defineField({
      name: 'primaryActivities',
      title: 'Primary Activities',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Drug Trafficking',
          'Money Laundering',
          'Human Trafficking',
          'Arms Trafficking',
          'Extortion',
          'Kidnapping',
          'Oil Theft',
          'Other'
        ]
      }
    }),
    
    // Financial
    defineField({
      name: 'estimatedRevenue',
      title: 'Estimated Annual Revenue',
      type: 'object',
      fields: [
        {
          name: 'amount',
          title: 'Amount',
          type: 'number'
        },
        {
          name: 'currency',
          title: 'Currency',
          type: 'string',
          options: {
            list: ['USD', 'MXN', 'COP', 'BRL']
          },
          initialValue: 'USD'
        },
        {
          name: 'year',
          title: 'Year',
          type: 'number'
        },
        {
          name: 'confidence',
          title: 'Confidence Level',
          type: 'string',
          options: {
            list: ['High', 'Medium', 'Low', 'Estimate']
          }
        }
      ]
    }),
    
    // Visual
    defineField({
      name: 'logo',
      title: 'Logo/Insignia',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    
    // Content
    defineField({
      name: 'description',
      title: 'Description',
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
      ]
    }),
    
    // Relationships
    defineField({
      name: 'leadership',
      title: 'Leadership',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Current and former leaders'
    }),
    defineField({
      name: 'rivals',
      title: 'Rival Organizations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cartel' }] }]
    }),
    defineField({
      name: 'allies',
      title: 'Allied Organizations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cartel' }] }]
    }),
    
    // Timeline
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [{ type: 'event' }]
    }),
    
    // Routes
    defineField({
      name: 'routes',
      title: 'Trafficking Routes',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'route' }] }]
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
      subtitle: 'status',
      media: 'logo'
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1) : 'Unknown',
        media
      }
    }
  }
})


