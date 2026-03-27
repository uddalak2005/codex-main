import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Workshops', value: 'Workshops' },
          { title: 'Competetions', value: 'Competetions' },
          { title: 'Seminars', value: 'Seminars' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'date', title: 'Date', type: 'datetime', validation: (Rule) => Rule.required() }),
    defineField({ name: 'desc', title: 'Description', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'image', title: 'Event Image', type: 'image', validation: (Rule) => Rule.required() }),
    defineField({ name: 'link', title: 'Link', type: 'url', validation: (Rule) => Rule.required() }),
    defineField({ name: 'venue', title: 'Venue', type: 'string' })
  ],
})
