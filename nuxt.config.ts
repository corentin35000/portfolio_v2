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
    buildModules : [
        '@nuxtjs/google-fonts'
    ],
    sitemap: {
        // options
    },
    robots: {
        /* module options */
    },
    css: [
        '@/public/assets/css/style.scss'
    ],
    head: {
        meta: [
            { charset: 'UTF-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Epilogue&display=swap"'}
        ]
    }
})
