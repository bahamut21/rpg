// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', file: 'en-US.json' },
      { code: 'fr', language: 'fr-FR', file: 'fr-FR.json' },
      { code: 'es', language: 'es-ES', file: 'es-ES.json' },
      { code: 'de', language: 'de-DE', file: 'de-DE.json' },
      { code: 'it', language: 'it-IT', file: 'it-IT.json' },
      { code: 'pt', language: 'pt-PT', file: 'pt-PT.json' },
      { code: 'ru', language: 'ru-RU', file: 'ru-RU.json' },
      { code: 'zh', language: 'zh-CN', file: 'zh-CN.json' },
      { code: 'ja', language: 'ja-JP', file: 'ja-JP.json' }
    ],
    defaultLocale: 'fr',
  },
  pinia: {
  /**
   * Automatically add stores dirs to the auto imports. This is the same as
   * directly adding the dirs to the `imports.dirs` option. If you want to
   * also import nested stores, you can use the glob pattern `./stores/**`
   * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
   *
   * @default `['stores']`
   */
    storesDirs: []
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },

  modules: [
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/leaflet',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'vuetify-nuxt-module'
  ]
})