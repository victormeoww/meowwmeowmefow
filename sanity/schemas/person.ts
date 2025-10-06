import { defineType, defineField } from 'sanity'

/**
 * PERSON SCHEMA
 * 
 * Document type for cartel leaders, operatives, and associates
 */

export const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  fields: [
    // Basic Information
    defineField({
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'aliases',
      title: 'Aliases',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Nicknames, code names, or alternative identities'
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    
    // Birth Information
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date'
    }),
    defineField({
      name: 'placeOfBirth',
      title: 'Place of Birth',
      type: 'string'
    }),
    defineField({
      name: 'nationality',
      title: 'Nationality',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    
    // Current Status
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Captured', value: 'captured' },
          { title: 'Deceased', value: 'deceased' },
          { title: 'Fugitive', value: 'fugitive' },
          { title: 'Unknown', value: 'unknown' }
        ],
        layout: 'radio'
      },
      initialValue: 'unknown',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'lastKnownLocation',
      title: 'Last Known Location',
      type: 'object',
      fields: [
        {
          name: 'location',
          title: 'Location Description',
          type: 'string'
        },
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'geopoint'
        },
        {
          name: 'date',
          title: 'Date',
          type: 'date'
        }
      ]
    }),
    
    // Roles and Affiliations
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Leader',
          'Co-Leader',
          'Lieutenant',
          'Enforcer',
          'Accountant',
          'Smuggler',
          'Money Launderer',
          'Distributor',
          'Operative',
          'Other'
        ]
      }
    }),
    defineField({
      name: 'affiliations',
      title: 'Affiliated Organizations',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'cartel' }] }]
    }),
    defineField({
      name: 'knownAssociates',
      title: 'Known Associates',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }]
    }),
    
    // Content
    defineField({
      name: 'biography',
      title: 'Biography',
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
    
    // Criminal History
    defineField({
      name: 'criminalHistory',
      title: 'Criminal History',
      type: 'array',
      of: [{ type: 'event' }]
    }),
    
    // Rewards
    defineField({
      name: 'rewards',
      title: 'Rewards Offered',
      type: 'array',
      of: [{ type: 'reward' }]
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
      title: 'fullName',
      subtitle: 'status',
      media: 'photo'
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


