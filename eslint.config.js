import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig({
  typescript: true,
  prettier: true,
  react: true,
  sort: true,
  strict: true,
  tailwind: true,
  rules: {
    'better-tailwindcss/enforce-consistent-important-position': 'off',
  },
});
