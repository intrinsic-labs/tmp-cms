import {defineField, defineType} from 'sanity'

// Shared block configuration for all portable text fields
const blockConfig = {
  type: 'block',
  styles: [
    {title: 'Normal', value: 'normal'},
    {title: 'H2', value: 'h2'},
    {title: 'H3', value: 'h3'},
    {title: 'H4', value: 'h4'},
    {title: 'H5', value: 'h5'},
    {title: 'Quote', value: 'blockquote'},
  ],
  lists: [
    {title: 'Bullet', value: 'bullet'},
    {title: 'Number', value: 'number'},
  ],
  marks: {
    decorators: [
      {title: 'Strong', value: 'strong'},
      {title: 'Emphasis', value: 'em'},
    ],
    annotations: [
      {
        title: 'URL',
        name: 'link',
        type: 'object',
        fields: [
          {
            title: 'URL',
            name: 'href',
            type: 'url',
          },
        ],
      },
    ],
  },
}

export default defineType({
  name: 'purpose',
  title: 'Purpose Section',
  type: 'document',
  fields: [
    defineField({
      name: 'vision',
      title: 'Vision Content',
      type: 'array',
      of: [blockConfig],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'mission',
      title: 'Mission Content',
      type: 'array',
      of: [blockConfig],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'appeal',
      title: 'Appeal Content',
      type: 'array',
      of: [blockConfig],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Purpose Section',
        subtitle: 'Site purpose and mission content',
      }
    },
  },
})
