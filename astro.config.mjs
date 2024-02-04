import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });
// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [react(), tailwind()]
});