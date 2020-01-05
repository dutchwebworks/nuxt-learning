const pkg = require('./package')
import PurgecssPlugin from 'purgecss-webpack-plugin'
import glob from 'glob-all'
import path from 'path'

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
    htmlAttrs: {
      lang: 'en-US',
    },
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "/icons/iphone5_splash.png", media: "(device- width: 320px) and(device - height: 568px) and(-webkit - device - pixel - ratio: 2)", rel: "apple - touch - startup - image" },
      { href: "/icons/iphone6_splash.png", media: "(device- width: 375px) and(device - height: 667px) and(-webkit - device - pixel - ratio: 2)", rel: "apple - touch - startup - image" },
      { href: "/icons/iphoneplus_splash.png", media: "(device- width: 621px) and(device - height: 1104px) and(-webkit - device - pixel - ratio: 3)", rel: "apple - touch - startup - image" },
      { href: "/icons/iphonex_splash.png", media: "(device- width: 375px) and(device - height: 812px) and(-webkit - device - pixel - ratio: 3)", rel: "apple - touch - startup - image" },
      { href: "/icons/iphonexr_splash.png", media: "(device- width: 414px) and(device - height: 896px) and(-webkit - device - pixel - ratio: 2)", rel: "apple - touch - startup - image" },
      { href: "/icons/iphonexsmax_splash.png", media: "(device- width: 414px) and(device - height: 896px) and(-webkit - device - pixel - ratio: 3)", rel: "apple - touch - startup - image" },
      { href: "/icons/ipad_splash.png", media: "(device- width: 768px) and(device - height: 1024px) and(-webkit - device - pixel - ratio: 2)", rel: "apple - touch - startup - image" },
      { href: "/icons/ipadpro1_splash.png", media: "(device- width: 834px) and(device - height: 1112px) and(-webkit - device - pixel - ratio: 2)", rel: "apple - touch - startup - image" },
      { href: "/icons/ipadpro3_splash.png", media: "(device- width: 834px) and(device - height: 1194px) and(-webkit - device - pixel - ratio: 2)", rel: "apple - touch - startup - image" },
      { href: "/icons/ipadpro2_splash.png", media: "(device- width: 1024px) and(device - height: 1366px) and(-webkit - device - pixel - ratio: 2)", rel: "apple - touch - startup - image" }
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
    "~/assets/css/tailwind.css",
  	"@/assets/scss/common.scss"
  ],

  /*
  ** Nuxt PWA
  */
  pwa: {
    meta: {
      mobileAppIOS: true
    },
    manifest: {
      name: "Nuxt Learning",
      short_name: "Nuxt Learning",
      description: process.env.npm_package_description,
      theme_color: "#00bfff",
      background_color: "#f7fafc",
      display: "standalone",
      start_url: "/?utm_source=web_app_manifest",
      dir: "ltr",
      lang: "en-en",
      orientation: "portrait",
    },
    workbox: {
      dev: true, // Console debug mode
      preCaching: [
        "/favicon.ico",
        "/img/media-nu/hjsxbmvaevzn_wd640.jpg",
        "/img/media-nu/fjpxu1lazes2_wd640.jpg",
        "/img/media-nu/xb1xph5a4qfc_wd640.jpg",
      ],
      // cacheAssets: false, // for /*
      // offline: false, // for /_nuxt/*
      runtimeCaching: [

        {
          urlPattern: 'https://fonts.googleapis.com/',
          handler: 'staleWhileRevalidate',
          strategyOptions: {
            cacheName: 'google-fonts-stylesheets',
          }
        },
        {
          urlPattern: 'https://fonts.(?:googleapis|gstatic).com/(.*)/',
          handler: 'cacheFirst',
          strategyOptions: {
            cacheName: 'google-fonts-webfonts',
            cacheExpiration: {
              maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              maxEntries: 30
            },
            cacheableResponse: { statuses: [0, 200] }
          }
        }
      ]
    }
  },

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
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/markdownit',
    'nuxt-purgecss',
    "@nuxtjs/sitemap",
    "@nuxtjs/pwa"
  ],

  /*
  ** Markdown options
  ** https://www.npmjs.com/package/@nuxtjs/markdownit
  ** See https://github.com/markdown-it/markdown-it
  */
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },

  /*
  ** Web font loader
  ** https://github.com/Developmint/nuxt-webfontloader
  */
  webfontloader: {
    google: {
      families: ['Roboto:300,400,700&display=swap']
    }
  },

  /*
  ** Sitemap options
  ** https://www.npmjs.com/package/@nuxtjs/sitemap
  */
  sitemap: {
    hostname: "https://nuxt-learning.herokuapp.com",
    exclude: [
      "/secret"
    ],
    defaults: {
      changefreq: "yearly",
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: [
      {
        url: "/",
        changefreq: "monthly",
        priority: 1,
      }
    ]
  },

  /*
  ** Nuxt.js global style resources
  ** https://www.npmjs.com/package/@nuxtjs/style-resources
  */
  styleResources: {
    scss: [
      '@/assets/scss/helpers/*.scss'
    ]
  },

  /*
  ** Nuxt.js global style resources
  ** https://regenrek.com/posts/how-to-use-tailwind-css-1.0.1-in-nuxt/#bonus-use-purgecss-to-remove-unused-css-in-the-production-build
  */
  purgeCSS: {
    // https://www.purgecss.com/whitelisting#specific-selectors
    whitelist: [

    ],
    whitelistPatterns: [/^is-/],
  },

  /*
  ** Axios module configuration
  ** https://github.com/nuxt-community/axios-module#usage
  ** https://github.com/nuxt-community/axios-module#options
  */
  axios: {

  },

  /*
  ** Router config
  */
  router: {
    // linkActiveClass: "is-active",
    // linkExactActiveClass: "is-exact-active"
  },

  /*
  ** Build configuration
  */
  build: {
    // analyze: true,
    extractCSS: true,
    // https://regenrek.com/posts/how-to-use-tailwind-css-1.0.1-in-nuxt/#4-configure-postcss-in-nuxtconfigjs
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },

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
  },

  /*
  ** Allow dev tools in production
  */
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
