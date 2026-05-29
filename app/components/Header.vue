<template>
  <header class="header">
    <img src="/assets/img/logo.png" alt="Logo" class="logo" />
    <nav class="nav">
      <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`">{{
        item.label
      }}</a>
      <NuxtLink :to="localePath('/cv')">{{ t("nav.cv") }}</NuxtLink>
    </nav>
  </header>
</template>
<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n();
const localePath = useLocalePath();
const navItems = computed(() => [
  { id: "about", label: t("nav.about") },
  { id: "experience", label: t("nav.experience") },
  { id: "skills", label: t("nav.skills") },
  { id: "projects", label: t("nav.projects") },
  { id: "contact", label: t("nav.contact") },
]);
const { site } = defineProps<{
  site: SiteContent;
}>();
</script>
<style>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
