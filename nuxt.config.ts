// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head: {
      link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
    }
  },

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", '@pinia/nuxt', '@vee-validate/nuxt'],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
      pathGetUser: process.env.PATH_GET_USER,
      pathRefreshToken: process.env.PATH_REFRESH_TOKEN
    }
  },

})