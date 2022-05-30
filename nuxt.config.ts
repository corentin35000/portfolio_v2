import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    typescript: {
        strict: true
    },
    builder: 'vite',
    ssr: true,
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/sitemap' // ! Déclarez toujours le module sitemap à la fin du tableau !
    ],
    sitemap: {
        // options
    },
})
