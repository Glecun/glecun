// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  app: {
    baseURL: "/v2/",
    head: {
      link: [
        { rel: "preload", as: "image", href: "/v2/img/logo.webp" },
        { rel: "preload", as: "image", href: "/v2/img/me.webp" },
        { rel: "preload", as: "image", href: "/v2/img/clean-gray-paper.webp" },
      ],
    },
  },
  css: [
    "@fontsource/inter/400.css",
    "@fontsource/inter/600.css",
    "@fontsource/inter/700.css",
    "@fontsource/jetbrains-mono/400.css",
    "@fontsource/jetbrains-mono/600.css",
    "~/assets/css/theme.css",
    "~/assets/css/global.css",
  ],
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
