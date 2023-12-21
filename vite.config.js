import { defineConfig } from "vite";
import createVuePlugin from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [createVuePlugin()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    }
});