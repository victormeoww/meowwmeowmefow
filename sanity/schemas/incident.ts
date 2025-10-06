import { defineType, defineField } from 'sanity'

/**
 * INCIDENT SCHEMA
 * 
 * Document type for events, operations, seizures, arrests, etc.
 */

export const incident = defineType({
  name: 'incident',
  title: 'Incident',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    
    // Location
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address/Location Description',
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
    
    // Incident Type
    defineField({
      name: 'incidentType',
      title: 'Incident Type',
      type: 'string',
      options: {
        list: [
          { title: 'Seizure', value: 'seizure' },
          { title: 'Arrest', value: 'arrest' },
          { title: 'Violence/Clash', value: 'violence' },
          { title: 'Law Enforcement Operation', value: 'operation' },
          { title: 'Escape', value: 'escape' },
          { title: 'Extradition', value: 'extradition' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
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
    
    // Involved Entities
    defineField({
      name: 'involvedCartels',
      title: 'Involved Cartels',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cartel' }] }]
    }),
    defineField({
      name: 'involvedPersons',
      title: 'Involved Persons',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }]
    }),
    
    // Details
    defineField({
      name: 'casualties',
      title: 'Casualties',
      type: 'object',
      fields: [
        {
          name: 'killed',
          title: 'Killed',
          type: 'number',
          validation: Rule => Rule.min(0)
        },
        {
          name: 'wounded',
          title: 'Wounded',
          type: 'number',
          validation: Rule => Rule.min(0)
        },
        {
          name: 'arrested',
          title: 'Arrested',
          type: 'number',
          validation: Rule => Rule.min(0)
        }
      ]
    }),
    defineField({
      name: 'seized',
      title: 'Items Seized',
      type: 'array',
      of: [{ type: 'seizure' }]
    }),
    defineField({
      name: 'lawEnforcementAgencies',
      title: 'Law Enforcement Agencies',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., DEA, FBI, Mexican Navy, etc.'
    }),
    
    // Outcome and Significance
    defineField({
      name: 'outcome',
      title: 'Outcome',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'significance',
      title: 'Significance',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Why this incident is important'
    }),
    
    // Related
    defineField({
      name: 'relatedIncidents',
      title: 'Related Incidents',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'incident' }] }]
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
      title: 'title',
      date: 'date',
      type: 'incidentType',
      location: 'location.address'
    },
    prepare({ title, date, type, location }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title,
        subtitle: `${formattedDate} • ${type} • ${location}`
      }
    }
  }
})


