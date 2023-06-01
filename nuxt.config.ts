// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    modules: ['nuxt-swiper', '@pinia/nuxt'],
    pages: true,
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    }
})
