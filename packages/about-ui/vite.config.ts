import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "env");

  const htmlPlugin = () => {
    return {
      name: "html-transform",
      transformIndexHtml(html: string) {
        return html.replace(/%(.*?)%/g, function (_, p1) {
          return env[p1];
        });
      },
    };
  };

  return {
    server: { port: 3001 },
    plugins: [htmlPlugin(), react()],
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
  };
});
