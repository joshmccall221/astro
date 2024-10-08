import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://joshmccall221.github.io',
  base: '/',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
})