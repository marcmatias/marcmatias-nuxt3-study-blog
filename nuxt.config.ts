import { defineNuxtConfig } from "nuxt";

const title = "Blog de marcmatias";
const link = "https://marcmatias.github.io";
const type = "Website";
const image = link + `/images/author.webp`;
const description = "Marcel Marques desenvolvedor de softwares, bacharel em Sistemas para Internet";

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
        lang: "pt-br",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "title", content: title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:url", content: link },
        { property: "og:type", content: type },
        { property: "og:image", content: image },
        { property: "twitter:title", content: title },
        { property: "twitter:url", content: link },
        { property: "twitter:type", content: type },
        { property: "twitter:image", content: image },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/images/avatar.webp",
        },
      ],
    },
  },
  css: [
    // SCSS file in the project
    "~/assets/scss/main.scss",
  ]
});
