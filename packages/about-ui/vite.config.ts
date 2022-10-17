import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import htmlEnv from "vite-plugin-html-env";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3001 },
  plugins: [htmlEnv(), react()],
  build: {
    rollupOptions: {
      output: {
        dir: "dist",
        entryFileNames: "main.js",
        assetFileNames: "main.css",
        chunkFileNames: "chunk-main.js",
        manualChunks: undefined,
      },
    },
  },
});
