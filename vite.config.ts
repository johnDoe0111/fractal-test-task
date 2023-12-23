import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  resolve: {
    alias: {
      components: "/src/components",
      hooks: "/src/hooks/",
      assets: "/src/assets",
      pages: "/src/pages",
      layouts: "/src/layouts",
      validation: "/src/validation.ts",
      useQueryParams: "/src/hooks/",
      consts: "/src/consts.ts",
      css: "/src/css",
    },
  },
})
