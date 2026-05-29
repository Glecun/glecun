<script setup lang="ts">
const { locale, locales, setLocale, t } = useI18n()
const localePath = useLocalePath()
const { site } = useSiteContent()

const navItems = computed(() => [
  { id: 'about', label: t('nav.about') },
  { id: 'experience', label: t('nav.experience') },
  { id: 'skills', label: t('nav.skills') },
  { id: 'projects', label: t('nav.projects') },
  { id: 'contact', label: t('nav.contact') },
])
</script>

<template>
  <div class="page">
    <header class="topbar">
      <div class="container topbar-content">
        <a class="brand" href="#top">{{ site.profile.name }}</a>
        <nav class="nav">
          <a v-for="item in navItems" :key="item.id" :href="`#${item.id}`">{{ item.label }}</a>
          <NuxtLink :to="localePath('/cv')">{{ t('nav.cv') }}</NuxtLink>
        </nav>
        <div class="lang-switch">
          <label for="locale-select">{{ t('common.language') }}</label>
          <select
            id="locale-select"
            :value="locale"
            @change="setLocale(($event.target as HTMLSelectElement).value)"
          >
            <option v-for="l in locales" :key="l.code" :value="l.code">
              {{ l.name }}
            </option>
          </select>
        </div>
      </div>
    </header>

    <main id="top" class="container">
      <section class="hero">
        <h1>{{ site.profile.name }}</h1>
        <p class="subtitle">{{ site.profile.title }}</p>
        <NuxtLink class="btn" :to="localePath('/cv')">{{ t('common.viewCv') }}</NuxtLink>
      </section>

      <section id="about">
        <h2>{{ t('nav.about') }}</h2>
        <p v-for="paragraph in site.about.paragraphs" :key="paragraph">{{ paragraph }}</p>
      </section>

      <section id="experience">
        <h2>{{ t('nav.experience') }}</h2>
        <ul class="list">
          <li v-for="experience in site.experiences" :key="`${experience.company}-${experience.period}`">
            <strong>{{ experience.title }}</strong> - {{ experience.company }}
            <span>{{ experience.period }}</span>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>{{ t('nav.skills') }}</h2>
        <ul class="chips">
          <li v-for="skill in site.skills" :key="skill">{{ skill }}</li>
        </ul>
      </section>

      <section id="projects">
        <h2>{{ t('nav.projects') }}</h2>
        <div class="projects-grid">
          <article v-for="project in site.projects" :key="project.title" class="card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p class="year">{{ project.year }}</p>
            <div class="links">
              <a v-for="link in project.links" :key="link.url" :href="link.url" target="_blank" rel="noreferrer">
                {{ link.label }}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact">
        <h2>{{ t('nav.contact') }}</h2>
        <p>{{ site.contact.city }}</p>
        <p><a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a></p>
        <p><a :href="site.contact.linkedin" target="_blank" rel="noreferrer">LinkedIn</a></p>
      </section>
    </main>
  </div>
</template>

<style scoped>
.page {
  font-family: Arial, sans-serif;
  color: #0f172a;
  background: #f8fafc;
  min-height: 100vh;
}

.container {
  width: min(1000px, 92%);
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #0f172a;
  color: #fff;
}

.topbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 0;
}

.brand {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}

.nav {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.nav a {
  color: #cbd5e1;
  text-decoration: none;
}

.nav a:hover {
  color: #fff;
}

.lang-switch {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #cbd5e1;
}

.hero {
  padding: 3rem 0 1rem;
}

.subtitle {
  color: #334155;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  background: #2563eb;
  color: #fff;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
}

section {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.2rem;
  margin: 1rem 0;
}

h2 {
  margin-top: 0;
}

.list {
  padding-left: 1.2rem;
}

.list li {
  margin-bottom: 0.6rem;
}

.list span {
  display: block;
  color: #64748b;
  font-size: 0.92rem;
}

.chips {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
}

.chips li {
  background: #e2e8f0;
  border-radius: 999px;
  padding: 0.35rem 0.8rem;
  font-size: 0.9rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.8rem;
}

.card {
  border: 1px solid #e2e8f0;
  border-radius: 0.6rem;
  padding: 0.8rem;
}

.year {
  color: #64748b;
  font-size: 0.9rem;
}

.links a {
  display: inline-block;
  margin-right: 0.75rem;
}
</style>
