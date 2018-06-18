const pkg = require('./package')

module.exports = {
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

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
        src: "~/plugins/localStorage.js",
        ssr: false
      },
      { 
        src: "~/plugins/Vuelidate.js",
        ssr: true
      }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },

  /*
  ** Generate configuration
  */

  generate: {
    /*
    ** Build output, default is ./dist
    ** This demo site is deployed to Github Pages with a custom domain name
    ** Github Pages will use ./docs for site root
    */
    dir: 'docs'
  },

  /*
  ** Page transitions
  */

  transition: {
  	name: 'page',
  	mode: 'out-in',
  	type: 'animation'
  }
}
