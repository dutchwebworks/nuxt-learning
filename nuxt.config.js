const pkg = require('./package')

module.exports = {
  /*
  ** Nuxt env. variables
  */
  env: {
    newsApi: {
      baseUrl: "https://newsapi.org/v2",
      key: "cddd1f30937b4e908153f7448e18adf8"
    }
  },

  /*
  ** Nuxt build mode
  */
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'deeppink' },

  /*
  ** Global CSS
  */
  css: [
  	"@/assets/scss/common.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { 
        src: "@/plugins/localStorage.js",
        ssr: false
      },
      { 
        src: "@/plugins/Vuelidate.js",
        ssr: true
      },
      {
        src: "@/plugins/slugify.js",
        ssr: true
      }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader'
  ],

  /*
  ** Web font loader
  */
  webfontloader: {
    google: {
      families: ['Roboto:300,400,700&display=swap']
    }
  },

  /*
  ** Nuxt.js global style resources
  */
  styleResources: {
    // Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
    scss: [
      '@/assets/scss/helpers/*.scss'
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev) {
        // https://medium.com/js-dojo/debugging-nuxt-js-with-vs-code-60a1a9e75cf6
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },

  /*
  ** Generate configuration
  */

  generate: {
    
  },

  /*
  ** Page transitions
  */

  pageTransition: {
  	name: 'page',
  	mode: 'out-in',
  	type: 'animation'
  }
}
