import {defineCollection, z} from 'astro:content';
import {cldAssetsLoader} from 'astro-cloudinary/loaders';
export const collections = {
    gallery: defineCollection({
        loader: cldAssetsLoader({
            folder: 'atc/photos',

        }),
        
    }),
    accomodation: defineCollection({
        loader: cldAssetsLoader({
            folder: 'atc/accomodation',
            tags: true,
            metadata: true,
        }),
    })
}