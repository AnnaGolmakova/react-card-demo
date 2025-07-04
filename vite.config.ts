import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "https://annagolmakova.github.io/react-card-demo/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@context": "/src/context",
      "@components": "/src/components",
      "@utils": "/src/utils",
    },
  },
});
