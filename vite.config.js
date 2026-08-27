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
            '@': resolve(import.meta.dirname, './src'),
        }
    },
    build: {
        lib: {
            entry: resolve(import.meta.dirname, "./src/components/index.js"),
            name: "SvgSprite",
            fileName: 'svg-sprite',
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
                // keep css output name stable for the "./dist/style.css" export/import paths
                assetFileNames: (assetInfo) =>
                  assetInfo.name?.endsWith(".css")
                    ? "style.css"
                    : "assets/[name][extname]",
            },
        },
    },
})
