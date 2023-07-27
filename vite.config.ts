import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@static': path.resolve(__dirname, './src/static'),
    },
  },
  plugins: [react(), svgr({
    exportAsDefault: true,
    svgrOptions: {
      icon: true,
    }
  })],
})
