import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/game-island/",
  plugins: [react()],
  server: {
    host: "0.0.0.0",
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@img": resolve(__dirname, "src/img"),
      "@services": resolve(__dirname, "src/services"),
      "@styles": resolve(__dirname, "src/styles"),
      "@utils": resolve(__dirname, "src/utils"),
      "@views": resolve(__dirname, "src/views"),
    },
  },
});
