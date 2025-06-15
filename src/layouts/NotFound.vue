<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { NotFoundSlots } from '../types/index'

defineSlots<NotFoundSlots>()

const titleRef = ref<HTMLElement>()

onMounted(() => {
  titleRef.value?.animate(
    [
      { clipPath: 'circle(28% at 0% 50%)' },
      { clipPath: 'circle(28% at 100% 50%)' },
    ],
    {
      duration: 3000,
      iterations: 4,
      direction: 'alternate',
      easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
    },
  )
})
</script>

<template>
  <section id="VPContent" class="not-found main">
    <slot name="not-found-top" />
    <div ref="titleRef" class="content">
      <span class="text">404</span>
      <span class="title">PAGE NOT FOUND</span>
    </div>
    <slot name="not-found-bottom" />
  </section>
</template>

<style scoped>
.not-found {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.not-found .content .text {
  display: block;
  font-size: 3rem;
  color: var(--vp-c-brand);
  font-weight: 800;
  line-height: 1.2;
}
.not-found .content .title {
  font-size: 1.5rem;
  color: var(--vp-c-text-2);
  margin-top: 1rem;
  line-height: 1.2;
}
@media (min-width: 768px) {
  .not-found .content .text {
    display: inline-block;
    font-size: 4rem;
  }
  .not-found .content .title {
    margin-left: 2rem;
    padding-left: 2rem;
    border-left: 2px solid var(--vp-c-border);
    font-size: 4rem;
  }
}
</style>
