import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: [
      '@razorpay/blade/components',
      '@razorpay/blade/tokens',
      '@razorpay/i18nify-js',
      '@razorpay/i18nify-react',
    ],
  },
})
