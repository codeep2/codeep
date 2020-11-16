export default {
  target: 'static',

  head: {
    title: "Codeep's Blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  router: {
    base: ''
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/reset.scss',
    'highlight.js/scss/vs2015.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
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
