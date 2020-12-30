export default {
  target: 'static',

  head: {
    title: "Codeep's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: process.env.DEPLOY_ENV === 'GH_PAGES'
          ? '/codeep/favicon.png'
          : '/favicon.png'
      }
    ]
  },

  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES'
      ? '/codeep/'
      : ''
  },
  loading: '@/components/loading.vue',
  css: [
    '@/assets/scss/reset.scss',
    'highlight.js/scss/dracula.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  serverMiddleware: [
    '~/api/index.js'
  ],

  modules: [
    '@nuxtjs/svg-sprite',
    '@nuxtjs/axios'
  ],

  svgSprite: {
    input: '~/assets/svg/'
  },

  axios: {
    baseURL: 'http://localhost:3000'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
