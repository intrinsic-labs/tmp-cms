import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The main title of your website',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Sitewide Logo',
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
    defineField({
      name: 'motto',
      title: 'Motto',
      type: 'string',
      description: 'Company motto or tagline',
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Small icon that appears in browser tabs (16x16 or 32x32 pixels recommended)',
      options: {
        accept: 'image/x-icon,image/png',
      },
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'email',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 3,
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'TikTok', value: 'tiktok'},
                  {title: 'Other', value: 'other'},
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required().uri({
                allowRelative: false,
                scheme: ['http', 'https'],
              }),
            },
          ],
          preview: {
            select: {
              platform: 'platform',
              url: 'url',
            },
            prepare(selection) {
              const {platform, url} = selection
              return {
                title: platform || 'Social Media Link',
                subtitle: url,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'donateUrl',
      title: 'Donate URL',
      type: 'url',
      description: 'URL for the donation page (e.g., Stripe donation link)',
      validation: (Rule) => Rule.required().uri({
        allowRelative: false,
        scheme: ['http', 'https'],
      }),
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      media: 'logo',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: 'Site Settings',
        subtitle: title || 'Configure your site',
        media,
      }
    },
  },
}) 