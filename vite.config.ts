import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["@testing-library/jest-dom"],
  },
  resolve: {
    alias: {
      "@components/*": "./src/components/*",
      "@hooks/*": "./src/hooks/*",
      "@services": "./src/service/index.ts",
      "@models/*": "./src/models/*",
      "@routes": "./src/routes/index.ts",
      "@pages/*": "./src/pages/*",
      "@template": "./src/template/index.ts",
    },
  },
});
