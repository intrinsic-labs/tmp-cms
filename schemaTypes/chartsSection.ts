import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'chartsSection',
  title: 'Charts Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      description: 'Optional title for the charts section',
    }),
    defineField({
      name: 'loanMetrics',
      title: 'Loan Metrics',
      type: 'object',
      description: 'Key metrics for loan performance charts',
      fields: [
        {
          name: 'totalLoans',
          title: 'Total Loans',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'successfulLoans',
          title: 'Successful Loans',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'averageLoanAmount',
          title: 'Average Loan Amount ($)',
          type: 'number',
          validation: (Rule) => Rule.required().min(0),
        },
        {
          name: 'averageRepaymentRate',
          title: 'Average Repayment Rate (%)',
          type: 'number',
          description: 'Percentage of loans successfully repaid',
          validation: (Rule) => Rule.required().min(0).max(100),
        },
        {
          name: 'averageRepaymentSpeed',
          title: 'Average Repayment Speed (days)',
          type: 'number',
          description: 'Average number of days to repay loan',
          validation: (Rule) => Rule.required().min(0),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'growthData',
      title: 'Growth Data',
      type: 'array',
      description: 'Data points for growth charts',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'number',
              validation: (Rule) => Rule.required().min(2000).max(2050),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Optional label for this data point',
            },
          ],
          preview: {
            select: {
              year: 'year',
              value: 'value',
              label: 'label',
            },
            prepare(selection) {
              const {year, value, label} = selection
              return {
                title: `${year}: ${value}`,
                subtitle: label || 'Growth data point',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      totalLoans: 'loanMetrics.totalLoans',
      successfulLoans: 'loanMetrics.successfulLoans',
    },
    prepare(selection) {
      const {title, totalLoans, successfulLoans} = selection
      return {
        title: title || 'Charts Section',
        subtitle: totalLoans 
          ? `${totalLoans} total loans, ${successfulLoans} successful`
          : 'No metrics set',
      }
    },
  },
}) 