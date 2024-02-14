import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  publicDir: "static",
  build: {
    outDir: "../dist",
  },
  server: { port: 1234 },
});
