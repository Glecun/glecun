<template>
  <div class="page">
    <Header :site="site" />

    <main id="main" class="main">
      <Hero :site="site" />

      <section id="about">
        <h2>{{ t("nav.about") }}</h2>
        <p v-for="paragraph in site.about.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
      </section>

      <section id="experience">
        <h2>{{ t("nav.experience") }}</h2>
        <ul class="list">
          <li
            v-for="experience in site.experiences"
            :key="`${experience.company}-${experience.period}`"
          >
            <strong>{{ experience.title }}</strong> - {{ experience.company }}
            <span>{{ experience.period }}</span>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>{{ t("nav.skills") }}</h2>
        <ul class="chips">
          <li v-for="skill in site.skills" :key="skill">{{ skill }}</li>
        </ul>
      </section>

      <section id="projects">
        <h2>{{ t("nav.projects") }}</h2>
        <div class="projects-grid">
          <article
            v-for="project in site.projects"
            :key="project.title"
            class="card"
          >
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <p class="year">{{ project.year }}</p>
            <div class="links">
              <a
                v-for="link in project.links"
                :key="link.url"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
              >
                {{ link.label }}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="contact">
        <h2>{{ t("nav.contact") }}</h2>
        <p>{{ site.contact.city }}</p>
        <p>
          <a :href="`mailto:${site.contact.email}`">{{ site.contact.email }}</a>
        </p>
        <p>
          <a :href="site.contact.linkedin" target="_blank" rel="noreferrer"
            >LinkedIn</a
          >
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const { site } = useSiteContent();
</script>
