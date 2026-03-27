import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Role', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'memberId', title: 'Member ID', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Coordinator', value: 'Coordinator' },
          { title: 'Member', value: 'Member' },
          // { title: 'Associate', value: 'Associate' },
          { title: 'Team Leader', value: 'Team Leader' },
          { title: 'Core Member', value: 'Core Member' },
          { title: 'Alumni', value: 'Alumni' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'image', title: 'Profile Image', type: 'image', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'social' }]
    }),
  ],
})
