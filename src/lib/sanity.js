import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

/* sanity connection */
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2022-02-14',
  useCdn: false,
}

export const sanityClient = createClient(config)

/* images */
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
