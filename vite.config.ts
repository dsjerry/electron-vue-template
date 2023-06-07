import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        electron({
            entry: "electron/main/index.ts",
        }),
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "./src/style/bem.scss";`
            }
        }
    }
});
