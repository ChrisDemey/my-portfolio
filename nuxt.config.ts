// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
  },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  i18n: {
    lazy: true,
    langDir: "locales/",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.json",
      },
      {
        code: "fr",
        iso: "fr-BE",
        name: "Français",
        file: "fr-BE.json",
      },
    ],
  },
  modules: [
    "nuxt-swiper",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/tailwindcss",
  ],
  pages: true,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
