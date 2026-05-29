<template>
  <section class="hero">
    <h1>{{ site.profile.name }}</h1>
    <p class="subtitle">{{ site.profile.title }}</p>
  </section>
</template>

<script setup lang="ts">
const { site } = defineProps<{
  site: SiteContent;
}>();
</script>

<style>
.hero {
  height: 100svh;
}
</style>
