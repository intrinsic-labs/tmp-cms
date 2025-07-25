import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo Video URL',
      type: 'url',
      description: 'Optional Vimeo video link for the hero section',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'summary',
      title: 'Summary Sentence',
      type: 'string',
      description: 'Main headline or summary for the hero section',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'summary',
      media: 'logo',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: 'Hero Section',
        subtitle: title || 'No summary set',
        media,
      }
    },
  },
}) 