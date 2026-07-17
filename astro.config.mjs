import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

export default defineConfig({
  // Update once the final domain is decided (viabilix.com.br is taken —
  // pending INPI trademark check, see project notes).
  site: 'https://viabilix.example.com.br',

  adapter: vercel(),
});