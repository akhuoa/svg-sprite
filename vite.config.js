import { resolve } from "node:path"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, "./src/components/index.js"),
            name: "SvgSprite",
            fileName: 'svg-sprite',
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
})
