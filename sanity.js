// client.js
import {
    createClient,
    createCurrentUserHook
} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'


export const config = {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID , // you can find this in sanity.json
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production', // or the name you chose in step 1
    useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
    aapiVersion: '2021-10-21',
}

export const sanityClient =  createClient(config)


export const urlFor = (source) => imageUrlBuilder(config).image(source);

// Helper function for useing the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);