<template>
  <header class="header">
    <img
      src="/img/logo.webp"
      alt="Logo"
      class="header__logo"
      width="50"
      height="50"
      fetchpriority="high"
    />
    <nav class="header__nav">
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

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  padding: var(--space-2);

  &__logo {
    width: 50px;
  }

  &__nav {
    /* TODO burger menu */
    display: none;
    margin-left: auto;

    @include sm {
      display: flex;
      gap: var(--space-4);
      padding-right: var(--space-4);
      font-size: 0.9rem;
    }

    @include md {
      gap: var(--space-5);
      padding-right: var(--space-5);
      font-size: 1rem;
    }

    @include xl {
      font-size: 1.2rem;
    }
  }
}
</style>
