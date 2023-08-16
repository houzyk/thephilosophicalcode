import { defineConfig } from "cypress";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;
const LIVE_URL = "https://thephilosophicalcode.com";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: process.env.VERCEL_PREVIEW_URL
            || process.env.VERCEL_PROD_URL
            || LOCALHOST_URL
            || LIVE_URL
  }
});
