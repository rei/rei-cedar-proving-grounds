const pkg = require('./package')

// const routerBase = '';
// const renderMode = 'universal';
const routerBase = process.env.NODE_ENV === 'production' ? '/rei-cedar-proving-grounds/' : '';
const renderMode = process.env.NODE_ENV === 'production' ? 'universal' : 'spa';

export default {
  /*
   ** Toggle for client side vs. server side rendering.
   */
   mode: renderMode,
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'docs/trees-left.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:400' }
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@rei/cedar/dist/cedar.css',
    '@rei/cedar/dist/cdr-fonts.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  proxy: [
  ],
  axios: {
    // proxy: true
  },
  // buildDir: "docs",
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      //let cjs = 'cjs';
      let esm = 'esm';

      if (renderMode === 'universal' && ctx.isServer) {
        //cjs = 'cjs.ssr';
        esm = 'esm.ssr';
      }

      config.resolve.alias = Object.assign({}, config.resolve.alias, {
        'rei-cedar$': `@rei/cedar/dist/cedar.${esm}.js`,
      });
    }
  },
  generate: {
    dir: "docs"
  },
  router: {
    base: routerBase
  }
}
