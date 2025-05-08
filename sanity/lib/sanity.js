// lib/sanity.js
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'kdljv30m',     // replace with your real project ID
  dataset: 'production',            // or whatever dataset you're using
  apiVersion: '2024-12-01',      // use a fixed date (any past date)
  useCdn: true,                     // `true` enables faster cached results
})
