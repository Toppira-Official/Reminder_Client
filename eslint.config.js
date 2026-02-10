import { defineConfig } from '@fullstacksjs/eslint-config';

export default defineConfig({
  typescript: {
    tsconfigRootDir: import.meta.dirname,
  },
  prettier: true,
  react: true,
  sort: true,
  strict: true,
  tailwind: true,
});
