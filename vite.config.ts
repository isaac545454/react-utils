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
      "@components": "./src/components/index.ts",
      "@hooks": "./src/hooks/index.ts",
      "@services": "./src/service/index.ts",
      "@models": "./src/models/index.ts",
      "@routes": "./src/routes/index.ts",
      "@pages": "./src/pages/index.ts",
      "@template": "./src/template/index.ts",
    },
  },
});
