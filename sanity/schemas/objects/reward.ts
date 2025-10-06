import { defineType, defineField } from 'sanity'

/**
 * REWARD OBJECT SCHEMA
 * 
 * Used for tracking rewards offered for persons
 */

export const reward = defineType({
  name: 'reward',
  title: 'Reward',
  type: 'object',
  fields: [
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: Rule => Rule.required().positive()
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          { title: 'USD', value: 'USD' },
          { title: 'MXN', value: 'MXN' },
          { title: 'COP', value: 'COP' },
          { title: 'BRL', value: 'BRL' }
        ]
      },
      initialValue: 'USD'
    }),
    defineField({
      name: 'issuingAgency',
      title: 'Issuing Agency',
      type: 'string',
      description: 'e.g., DEA, FBI, Mexican Government',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Expired', value: 'expired' },
          { title: 'Claimed', value: 'claimed' }
        ]
      },
      initialValue: 'active'
    }),
    defineField({
      name: 'dateIssued',
      title: 'Date Issued',
      type: 'date'
    })
  ],
  preview: {
    select: {
      amount: 'amount',
      currency: 'currency',
      agency: 'issuingAgency',
      status: 'status'
    },
    prepare({ amount, currency, agency, status }) {
      return {
        title: `${currency} ${amount?.toLocaleString()}`,
        subtitle: `${agency} • ${status}`
      }
    }
  }
})


