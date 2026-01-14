import {defineCollection, z} from 'astro:content';
import {cldAssetsLoader} from 'astro-cloudinary/loaders';
export const collections = {
    gallery: defineCollection({
        loader: cldAssetsLoader({
            folder: 'atc/photos',
            tags: true,
            limit: 300,
            metadata: true,
        }),
        
    }),
}