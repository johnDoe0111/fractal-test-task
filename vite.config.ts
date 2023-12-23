import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
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
      services: "/src/services",
      assets: "/src/assets",
      pages: "/src/pages",
      layouts: "/src/layouts",
      types: "/src/types",
      validation: "/src/validation",
      useQueryParams: "/src/useQueryParams"
    },
  },
})
