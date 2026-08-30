import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: "deppie.dev",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  runtimeConfig: {
    githubToken: "",
  },
  compatibilityDate: "2024-11-01",

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  css: ["~/assets/style.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/icon"],
  icon: {
    mode: "css",
    cssLayer: "base",
    provider: "none",
    clientBundle: {
      icons: ["simple-icons:github", "simple-icons:anilist"],
    },
  },
});
