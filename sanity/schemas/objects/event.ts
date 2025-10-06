import { defineType, defineField } from 'sanity'

/**
 * EVENT OBJECT SCHEMA
 * 
 * Used for timeline events across different document types
 */

export const event = defineType({
  name: 'event',
  title: 'Timeline Event',
  type: 'object',
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Founded', value: 'founded' },
          { title: 'Leadership Change', value: 'leadership' },
          { title: 'Arrest', value: 'arrest' },
          { title: 'Death', value: 'death' },
          { title: 'Escape', value: 'escape' },
          { title: 'Operation', value: 'operation' },
          { title: 'Violence', value: 'violence' },
          { title: 'Territory', value: 'territory' },
          { title: 'Other', value: 'other' }
        ]
      }
    })
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      type: 'eventType'
    },
    prepare({ title, date, type }) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title: title,
        subtitle: `${formattedDate}${type ? ` • ${type}` : ''}`
      }
    }
  }
})


