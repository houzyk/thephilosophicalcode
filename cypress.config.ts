import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    env: {
      vercel_preview_url: process.env.VERCEL_PREVIEW_URL
    }
  }
});
