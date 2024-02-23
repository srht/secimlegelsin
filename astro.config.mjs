import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import dotenv from "dotenv";
import vercel from "@astrojs/vercel/serverless";
dotenv.config({
  path: ".env",
});

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react(), tailwind()],
  adapter: vercel(),
  redirects: {
    "/talepdetay/[...slug]": "/talep/[...slug]",
  },
});
