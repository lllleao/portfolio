import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': '/src/components',
            '@images': '/src/assets',
            '@interSection': '/src/utils',
            '@store': '/src/store'
        }
    },
    server: {
        open: true,
        host: true,
        port: 5173
    }
})
