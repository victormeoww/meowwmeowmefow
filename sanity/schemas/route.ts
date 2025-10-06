import { defineType, defineField } from 'sanity'

/**
 * ROUTE SCHEMA
 * 
 * Document type for trafficking corridors and routes
 */

export const route = defineType({
  name: 'route',
  title: 'Trafficking Route',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'name',
      title: 'Route Name',
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
      name: 'routeType',
      title: 'Route Type',
      type: 'string',
      options: {
        list: [
          { title: 'Land', value: 'land' },
          { title: 'Sea', value: 'sea' },
          { title: 'Air', value: 'air' },
          { title: 'Tunnel', value: 'tunnel' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    
    // Origin and Destination
    defineField({
      name: 'origin',
      title: 'Origin',
      type: 'object',
      fields: [
        {
          name: 'location',
          title: 'Location Name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint'
        }
      ]
    }),
    defineField({
      name: 'destination',
      title: 'Destination',
      type: 'object',
      fields: [
        {
          name: 'location',
          title: 'Location Name',
          type: 'string',
          validation: Rule => Rule.required()
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint'
        }
      ]
    }),
    defineField({
      name: 'waypoints',
      title: 'Waypoints',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'location',
            title: 'Location Name',
            type: 'string'
          },
          {
            name: 'coordinates',
            title: 'Coordinates',
            type: 'geopoint'
          }
        ]
      }],
      description: 'Intermediate points along the route'
    }),
    
    // Control and Activities
    defineField({
      name: 'controllingCartels',
      title: 'Controlling Cartels',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cartel' }] }]
    }),
    defineField({
      name: 'commodities',
      title: 'Commodities Trafficked',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Cocaine',
          'Heroin',
          'Fentanyl',
          'Methamphetamine',
          'Marijuana',
          'Synthetic Drugs',
          'Precursor Chemicals',
          'Weapons',
          'Cash',
          'Other'
        ]
      }
    }),
    
    // Status
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Disrupted', value: 'disrupted' },
          { title: 'Defunct', value: 'defunct' },
          { title: 'Unknown', value: 'unknown' }
        ]
      },
      initialValue: 'active'
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
    
    // Timeline
    defineField({
      name: 'timeline',
      title: 'Timeline',
      type: 'array',
      of: [{ type: 'event' }]
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
      type: 'routeType',
      status: 'status'
    },
    prepare({ title, type, status }) {
      return {
        title,
        subtitle: `${type} • ${status}`
      }
    }
  }
})


