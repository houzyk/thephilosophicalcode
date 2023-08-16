import { defineConfig } from "cypress";

const LIVE_URL = "https://thephilosophicalcode.com";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: process.env.VERCEL_PREVIEW_URL
            || process.env.VERCEL_PROD_URL
            || LIVE_URL
  }
});
