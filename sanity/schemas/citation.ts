import { defineType, defineField } from 'sanity'

/**
 * CITATION SCHEMA
 * 
 * Document type for sources and references
 */

export const citation = defineType({
  name: 'citation',
  title: 'Citation',
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
      name: 'sourceType',
      title: 'Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'Court Document', value: 'courtDocument' },
          { title: 'News Article', value: 'newsArticle' },
          { title: 'Government Report', value: 'governmentReport' },
          { title: 'Academic Paper', value: 'academicPaper' },
          { title: 'Press Release', value: 'pressRelease' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    
    // Publication Details
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date'
    }),
    defineField({
      name: 'publisher',
      title: 'Publisher',
      type: 'string'
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'accessDate',
      title: 'Access Date',
      type: 'date',
      description: 'When this source was last accessed'
    }),
    
    // Reliability
    defineField({
      name: 'reliability',
      title: 'Reliability',
      type: 'string',
      options: {
        list: [
          { title: 'Verified', value: 'verified' },
          { title: 'Likely Accurate', value: 'likely' },
          { title: 'Unconfirmed', value: 'unconfirmed' }
        ],
        layout: 'radio'
      },
      initialValue: 'verified',
      validation: Rule => Rule.required()
    }),
    
    // Archive
    defineField({
      name: 'archived',
      title: 'Archived',
      type: 'boolean',
      description: 'Is there an archived version?',
      initialValue: false
    }),
    defineField({
      name: 'archivedUrl',
      title: 'Archived URL',
      type: 'url',
      description: 'Archive.org or other archived version',
      hidden: ({ parent }) => !parent?.archived
    }),
    
    // Notes
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes about this source'
    })
  ],
  
  preview: {
    select: {
      title: 'title',
      publisher: 'publisher',
      type: 'sourceType',
      reliability: 'reliability'
    },
    prepare({ title, publisher, type, reliability }) {
      return {
        title,
        subtitle: `${type} • ${publisher || 'Unknown'} • ${reliability}`
      }
    }
  }
})


