import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-br'
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Blog de marcmatias",
        },
        { property: "og:site_name", content: "Blog de marcmatias" },
        { property: "og:url", content: "https://marcmatias.github.io" },
        { property: "og:type", content: "Blog" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/author.webp",
        },
      ],
    },
  },
  css: [
    // SCSS file in the project
    "~/assets/scss/main.scss",
  ],
  generate: {
    subFolders: false
  }
});
