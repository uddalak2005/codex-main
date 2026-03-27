import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'wp10p4qb',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-03-27',
})
