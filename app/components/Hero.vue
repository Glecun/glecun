<template>
  <section class="hero">
    <svg
      class="hero__lines"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polyline
        v-for="line in lines"
        :key="line.id"
        :ref="(el) => (lineEls[line.id] = el as SVGPolylineElement)"
        class="hero__line"
        :points="line.points"
        :style="{ strokeWidth: line.width }"
      />
    </svg>
    <div class="hero__content">
      <div>
        <h1>
          {{ site.profile.firstname }}<br />
          {{ site.profile.lastname }}
        </h1>
        <p class="hero__subtitle">{{ site.profile.title }}</p>
      </div>
      <div>
        <!-- TODO use webp or svg -->
        <img class="hero__img" src="/assets/img/me.jpg" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const { site } = defineProps<{
  site: SiteContent;
}>();

// TODO extract line in a component
interface Line {
  id: number;
  points: string;
  duration: number;
  delay: number;
  width: number;
}

const lines: Line[] = [
  {
    id: 0,
    points: "0,300 400,0",
    duration: 0.1,
    delay: 0.2,
    width: 3,
  },
  {
    id: 1,
    points: "540,0 300,600",
    duration: 0.08,
    delay: 0.8,
    width: 5,
  },
  {
    id: 2,
    points: "380,600 1000,280",
    duration: 0.06,
    delay: 0.94,
    width: 2,
  },
];

const lineEls: Record<number, SVGPolylineElement | null> = {};

onMounted(() => {
  lines.forEach((line) => {
    const el = lineEls[line.id];
    if (!el) return;

    const length = el.getTotalLength();
    el.style.strokeDasharray = `${length}`;
    el.style.strokeDashoffset = `${length}`;

    setTimeout(() => {
      el.style.transition = `stroke-dashoffset ${line.duration}s cubic-bezier(0.4, 0, 0.2, 1)`;
      el.style.strokeDashoffset = "0";
    }, line.delay * 1000);
  });
});
</script>

<style lang="scss">
.hero {
  height: 100svh;

  &__content {
    position: relative;
    z-index: 1;
    padding: 20svh 10svw;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    row-gap: var(--space-5);
    column-gap: var(--space-7);

    @include md {
      flex-direction: row;
    }
  }

  h1 {
    font-size: min(3.6rem, 15svw);
    flex: 1;
    text-transform: uppercase;

    @include md {
      font-size: 5rem;
    }

    @include lg {
      font-size: 6rem;
    }

    @include xl {
      font-size: 7rem;
    }

    @include xxl {
      font-size: 8rem;
    }
  }

  &__subtitle {
    margin-top: var(--space-1);
    font-size: 1rem;

    @include md {
      font-size: 1.2rem;
    }

    @include lg {
      font-size: 1.4rem;
    }

    @include xl {
      font-size: 1.8rem;
    }

    @include xxl {
      font-size: 2rem;
    }
  }

  &__img {
    flex: 1;
    border-radius: 50%;
    border: 6px solid var(--green-10);
    width: min(350px, 80svw);

    @include md {
      width: 300px;
    }

    @include lg {
      width: 350px;
    }

    @include xl {
      width: 400px;
    }

    @include xxl {
      width: 450px;
    }
  }

  &__lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  &__line {
    fill: none;
    stroke: var(--green-7);
    stroke-width: 4;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
}
</style>
