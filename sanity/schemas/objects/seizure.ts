import { defineType, defineField } from 'sanity'

/**
 * SEIZURE OBJECT SCHEMA
 * 
 * Used for tracking items seized in incidents
 */

export const seizure = defineType({
  name: 'seizure',
  title: 'Seizure',
  type: 'object',
  fields: [
    defineField({
      name: 'itemType',
      title: 'Item Type',
      type: 'string',
      options: {
        list: [
          { title: 'Cocaine', value: 'cocaine' },
          { title: 'Heroin', value: 'heroin' },
          { title: 'Fentanyl', value: 'fentanyl' },
          { title: 'Methamphetamine', value: 'methamphetamine' },
          { title: 'Marijuana', value: 'marijuana' },
          { title: 'Synthetic Drugs', value: 'synthetic' },
          { title: 'Precursor Chemicals', value: 'precursors' },
          { title: 'Weapons', value: 'weapons' },
          { title: 'Cash', value: 'cash' },
          { title: 'Vehicles', value: 'vehicles' },
          { title: 'Other', value: 'other' }
        ]
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: Rule => Rule.required().positive()
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'string',
      description: 'e.g., kg, pounds, tons, pieces, USD',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'estimatedValue',
      title: 'Estimated Value',
      type: 'number',
      description: 'Estimated street value'
    }),
    defineField({
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: ['USD', 'MXN', 'COP', 'BRL']
      },
      initialValue: 'USD'
    })
  ],
  preview: {
    select: {
      type: 'itemType',
      quantity: 'quantity',
      unit: 'unit',
      value: 'estimatedValue',
      currency: 'currency'
    },
    prepare({ type, quantity, unit, value, currency }) {
      const valueStr = value ? ` (${currency} ${value.toLocaleString()})` : ''
      return {
        title: `${quantity} ${unit} ${type}`,
        subtitle: `${valueStr}`
      }
    }
  }
})


