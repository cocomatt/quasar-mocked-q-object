import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  base: './',
  test: {
    root: process.cwd(),
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/vitest/setup-file.ts'],
    include: [
      './src/**/*.vitest.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      './test/vitest/__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    mockReset: true,
    deps: {
      moduleDirectories: ['node_modules'],
    },
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: 'src/quasar-variables.scss',
    }),
    tsconfigPaths({
      projects: ['./'],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        'vitest',
        'vue',
        'vue-router',
        'pinia',
        'quasar',
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true,
        },
      ],
      defaultExportByFilename: false,
      dts: './auto-imports.d.ts',
      vueTemplate: false,
    }),
    Components({
      dirs: ['./src/components', './src/pages', './src/layouts'],
      extensions: ['vue', 'md'],
      dts: './components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
