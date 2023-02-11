/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': `${__dirname}/src/`,
    },
  },
  // https://vitest.dev/config/#configuration
  // https://vitest.dev/config/#globals
  test: {
    globals: true,
  }
})
