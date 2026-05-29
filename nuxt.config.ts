// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  app: {
    baseURL: "/v2/",
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap",
        },
      ],
    },
  },
  css: ["~/assets/css/theme.css", "~/assets/css/global.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/css/breakpoints" as *;`,
        },
      },
    },
  },
  i18n: {
    langDir: "locales",
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
    locales: [
      { code: "fr", language: "fr-FR", file: "fr.json", name: "Français" },
      { code: "en", language: "en-US", file: "en.json", name: "English" },
    ],
  },
});
