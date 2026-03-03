import 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import svgr from 'vite-plugin-svgr';
import { visualizer } from 'rollup-plugin-visualizer';
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      formats: ['es', 'cjs'],
      name: 'yaret-ui',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        assetFileNames: 'assets/[name][extname]',
      },
    },
    sourcemap: true,
    cssCodeSplit: true,
    emptyOutDir: true,
    copyPublicDir: false,
  },
  plugins: [
    react(),
    visualizer(),
    libInjectCss(),
    svgr({ include: '**/*.svg?react' }),
    dts({
      rollupTypes: true,
      exclude: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.tsx'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.tsx'],
    css: true,
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['lib'],
      exclude: ['**/*.stories.tsx', '**/*.ts'],
    },
  },
});