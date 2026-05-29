<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const { cv } = useSiteContent()
</script>

<template>
  <div class="page">
    <main class="container">
      <NuxtLink class="back" :to="localePath('/')">{{ t('common.backHome') }}</NuxtLink>

      <section>
        <h1>{{ t('nav.cv') }}</h1>
        <p>{{ cv.summary }}</p>
      </section>

      <section>
        <h2>{{ t('nav.experience') }}</h2>
        <article v-for="experience in cv.experiences" :key="`${experience.company}-${experience.period}`" class="entry">
          <h3>{{ experience.role }} - {{ experience.company }}</h3>
          <p class="period">{{ experience.period }}</p>
          <p>{{ experience.description }}</p>
        </article>
      </section>

      <section>
        <h2>Education</h2>
        <article v-for="education in cv.education" :key="`${education.school}-${education.period}`" class="entry">
          <h3>{{ education.name }}</h3>
          <p class="period">{{ education.school }} - {{ education.period }}</p>
        </article>
      </section>

      <section>
        <h2>{{ t('nav.skills') }}</h2>
        <h3>Languages & Frameworks</h3>
        <ul class="chips">
          <li v-for="skill in cv.skills.languages_frameworks" :key="skill">{{ skill }}</li>
        </ul>

        <h3>Testing</h3>
        <ul class="chips">
          <li v-for="skill in cv.skills.testing" :key="skill">{{ skill }}</li>
        </ul>

        <h3>Tools</h3>
        <ul class="chips">
          <li v-for="skill in cv.skills.tools" :key="skill">{{ skill }}</li>
        </ul>

        <h3>Database</h3>
        <ul class="chips">
          <li v-for="skill in cv.skills.database" :key="skill">{{ skill }}</li>
        </ul>
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
  padding: 2rem 0;
}

.container {
  width: min(900px, 92%);
  margin: 0 auto;
}

.back {
  display: inline-block;
  margin-bottom: 1rem;
}

section {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.2rem;
  margin: 1rem 0;
}

.entry {
  margin-bottom: 1rem;
}

.entry h3 {
  margin-bottom: 0.2rem;
}

.period {
  color: #64748b;
  margin-top: 0;
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
</style>
