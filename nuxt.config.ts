// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  css: ['@/assets/styles/global.scss'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
