import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";
const { PUBLIC_ENV, STORYBLOK_TOKEN_ACCESS} = loadEnv(import.meta.env.MODE, process.cwd(), "");
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({

  integrations: [
    storyblok({
      accessToken: STORYBLOK_TOKEN_ACCESS,
      components: {
        page: "storyblok/Page",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        hero: 'storyblok/Hero',
        aboutSection: 'storyblok/AboutSection',
        spacer: 'storyblok/Spacer',
        CTABanner: 'storyblok/CTABanner',
        titleSection: 'storyblok/TitleSection',
        cards: 'storyblok/Cards',
        card: 'storyblok/Card',
        ourTeam: 'storyblok/OurTeam',
        image: 'storyblok/Image',
      },
    }),
    tailwind(),
  ],
  vite: {
    server: {
      https: true,
    },
    plugins: [basicSsl()],
  },
});
