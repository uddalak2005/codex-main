import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform Icon',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn (link)', value: 'link' },
          { title: 'Instagram (camera)', value: 'camera' },
          { title: 'Twitter/X (alternate_email)', value: 'alternate_email' },
          { title: 'GitHub/Web (code)', value: 'code' },
          { title: 'Portfolio (person)', value: 'person' },
          { title: 'YouTube/Social (share)', value: 'share' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
    }),
  ],
})
