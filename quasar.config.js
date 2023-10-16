/* eslint-env node */

/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js

/* eslint func-names: 0 */
/* eslint global-require: 0 */
const { configure } = require('quasar/wrappers');
const { resolve } = require('path');
// require('dotenv').config();
// const Components = require('unplugin-vue-components');

// // eslint-disable-next-line prefer-arrow-callback
// module.exports = configure(function (/* ctx */) {
// eslint-disable-next-line prefer-arrow-callback, @typescript-eslint/no-unused-vars
module.exports = configure(function (ctx) {
  return {
    eslint: {
      // fix: true,
      // include = [],
      // exclude = [],
      // rawOptions = {},
      // warnings: true,
      errors: true,
    },
    supportTS: {
      tsCheckerConfig: {
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx,vue}',
        },
      },
    },
    // https://v2.quasar.dev/quasar-cli-vite/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://v2.quasar.dev/quasar-cli-vite/boot-files
    boot: [
      // 'i18n',
      // 'auth0',
      'auth0',
      'exposed-auth0',
      'axios',
      // 'auth0',
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#css
    css: [
      'app.scss',
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      'fontawesome-v6',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      // 'roboto-font', // optional, you are not bound to it
      // 'material-icons', // optional, you are not bound to it
    ],
    test: {
      // root: '../client',
      root: process.cwd(),
      // environment: 'jsdom',
      environment: 'happy-dom',
      globals: true,
      setupFiles: ['./vitest.setup.ts'],
      reporters: ['default', 'html'],
      // coverage: {
      //   provider: 'c8',
      // },
      // coverage: { reporter: ['text', 'lcov'] }, // lcov reporter is used by IDE coverage extensions
      coverage: {
        reporter: ['text', 'html'],
        exclude: [
          'node_modules/',
          './vitest.setup.ts',
          // './test',
          // './test-compositions',
        ],
        all: true,
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 10,
      },
      include: [
        './src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        // './tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
        './test/vitest/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      ],
      mockReset: true,
    },
    // test: {
    //   environment: 'jsdom',
    //   // environment: 'happy-dom',
    //   reportsDirectory: './tests/unit/coverage',
    //   globals: true,
    //   include: [
    //     './src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    //     './tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    //   ],
    // },
    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#build
    build: {
      // env: {
      // },
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node16',
        // node: 'node18',
      },
      sourcemap: true,
      vueRouterMode: 'history', // available values: 'hash', 'history'
      // vueRouterBase,
      // vueDevtools: true,
      vueOptionsAPI: false,
      rebuildCache: true, // rebuilds Vite/linter/etc cache on startup
      // vitePlugins: [],
      // extendViteConf(viteConf, { isServer, isClient }) {
      // extendViteConf(viteConf) {
      //   console.log('🔥 viteConf');
      //   console.dir(viteConf, { depth: 5 });
      //   // viteConf.optimizeDeps.include.push('axios');
      //   // viteConf.optimizeDeps.include.push('cropperjs');
      //   // viteConf.optimizeDeps = {
      //   //   include: ['axios', 'cropperjs'],
      //   // };
      //   // do something with viteConf... change it in-place
      // },
      vitePlugins: [
        // ['vite-tsconfig-paths'],
        ['vite-tsconfig-paths', {
          // root: '..',
          // projects: ['./client'], // results in client/client
          projects: ['./'],
        }],
        // ['vite-tsconfig-paths', {
        //   root: '..',
        // }],
        ['unplugin-auto-import/vite', {
          include: [
            /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
            /\.vue$/, /\.vue\?vue/, // .vue
            /\.md$/, // .md
          ],
          imports: [
            'vitest',
            'vue',
            'vue-router',
            'pinia',
            'quasar',
            // custom
            {
              '@vueuse/core': [
                // named imports
                'useDebounceFn', // import { useMouse } from '@vueuse/core',
                // alias
                // ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
              ],
              //   // '@auth0/auth0-vue': [
              //   //   'useAuth0',
              //   // ],
              // 'src/boot/auth0': [
              //   ['default', 'auth0'],
              // ],
              // '@auth0/auth0-vue': [
              //   'useAuth0',
              // ],
              // axios: [
              //   // default imports
              //   ['default', 'axios'], // import { default as axios } from 'axios',
              // ],
              //   // axios: ['axios'],
              //   'src/boot/axios': [
              //     'axios',
              //     // alias
              //     ['default', 'axios'],
              //   ],

              //   // '[package-name]': [
              //   //   '[import-names]',
              //   //   // alias
              //   //   ['[from]', '[alias]'],
              //   // ],
            },
            {
              from: 'vue-router',
              imports: ['RouteLocationRaw'],
              type: true,
            },
            {
              from: '@auth0/auth0-vue',
              imports: ['Auth0VueClient'],
              type: true,
            },
          ],
          // Filepath to generate corresponding .d.ts file.
          // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
          // Set `false` to disable.
          defaultExportByFilename: false,
          // TODO: dirs?
          dirs: [
            './src/boot/**',
          ],
          // dts: true,
          dts: './auto-imports.d.ts',
          // Auto import inside Vue template
          // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
          vueTemplate: false,

          // Custom resolvers, compatible with `unplugin-vue-components`
          // see https://github.com/antfu/unplugin-auto-import/pull/23/
          resolvers: [
            /* ... */
          ],

          // Generate corresponding .eslintrc-auto-import.json file.
          // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
          eslintrc: {
            enabled: false, // Default `false`
            filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
            globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
          },
        }],
        ['unplugin-vue-components/vite', {
          dirs: ['./src/components', './src/pages', './src/layouts'],
          extensions: ['vue', 'md'],
          // generate `components.d.ts` global declarations,
          // also accepts a path for custom filename
          // default: `true` if package typescript is installed
          // dts: true,
          dts: './components.d.ts',
          // dts: 'src/components.d.ts',
          // auto import for directives
          // default: `true` for Vue 3, `false` for Vue 2
          // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
          // To install Babel, run: `npm install -D @babel/parser`
          // directives: true,

          // // Transform path before resolving
          // importPathTransform: (v) => v,

          // // Allow for components to override other components with the same name
          // allowOverrides: false,

          // filters for transforming targets
          include: [/\.vue$/, /\.vue\?vue/],
          exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

          // Vue version of project. It will detect automatically if not specified.
          // Acceptable value: 2 | 2.7 | 3
          // version: 3,
        }],
      ],
      alias: {
        '@': resolve(__dirname, './src'),
      },
      // vitePlugins: [
      //   ['@intlify/vite-plugin-vue-i18n', {
      //     // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      //     // compositionOnly: false,

      //     // you need to set i18n resource including paths !
      //     include: path.resolve(__dirname, './src/i18n/**'),
      //   }],
      // ],
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#devServer
    devServer: {
      https: true,
      // https: {
      //   key: fs.readFileSync(path.resolve(__dirname, 'certs', 'localhost-key.pem')),
      //   cert: fs.readFileSync(path.resolve(__dirname, 'certs', 'localhost.pem')),
      // },
      open: false, // opens browser window automatically
    },

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#framework
    framework: {
      config: {},

      iconSet: 'fontawesome-v6', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import strategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: [],
    },

    // animations: 'all', // --- includes all animations
    // https://v2.quasar.dev/options/animations
    animations: [
      'fadeIn', 'fadeOut', 'backInLeft', 'backOutLeft', 'bounceInDown', 'bounceOutUp',
    ],

    // https://v2.quasar.dev/quasar-cli-vite/quasar-config-js#sourcefiles
    sourceFiles: {
      // rootComponent: 'src/Shell.vue',
      rootComponent: 'src/App.vue',
      // router: 'src/router/index',
      // store: 'src/store/index',
      // registerServiceWorker: 'src-pwa/register-service-worker',
      // serviceWorker: 'src-pwa/custom-service-worker',
      // pwaManifestFile: 'src-pwa/manifest.json',
      // electronMain: 'src-electron/electron-main',
      // electronPreload: 'src-electron/electron-preload'
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-ssr/configuring-ssr
    ssr: {
      // ssrPwaHtmlFilename: 'offline.html', // do NOT use index.html as name!
      // will mess up SSR

      // extendSSRWebserverConf (esbuildConf) {},
      // extendPackageJson (json) {},

      pwa: false,

      // manualStoreHydration: true,
      // manualPostHydrationTrigger: true,

      prodPort: 3000, // The default port that the production server should use
      // (gets superseded if process.env.PORT is specified at runtime)

      middlewares: [
        'render', // keep this as last one
      ],
    },

    // https://v2.quasar.dev/quasar-cli-vite/developing-pwa/configuring-pwa
    pwa: {
      workboxMode: 'generateSW', // or 'injectManifest'
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
      // extendGenerateSWOptions (cfg) {}
      // extendInjectManifestOptions (cfg) {},
      // extendManifestJson (json) {}
      // extendPWACustomSWConf (esbuildConf) {}
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: true,
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-electron-apps/configuring-electron
    electron: {
      // extendElectronMainConf (esbuildConf)
      // extendElectronPreloadConf (esbuildConf)

      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Windows only
        // win32metadata: { ... }
      },

      builder: {
        // https://www.electron.build/configuration/configuration

        appId: 'quasar-project',
      },
    },

    // Full list of options: https://v2.quasar.dev/quasar-cli-vite/developing-browser-extensions/configuring-bex
    bex: {
      contentScripts: [
        'my-content-script',
      ],

      // extendBexScriptsConf (esbuildConf) {}
      // extendBexManifestJson (json) {}
    },
  };
});
