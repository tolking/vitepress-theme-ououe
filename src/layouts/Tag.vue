<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import VPCover from '../components/VPCover.vue'
import type { Theme } from '../types'
import { computed } from 'vue'

const route = useRoute()
const { frontmatter } = useData<Theme>()

const title = computed(() => {
  const layout: string = frontmatter.value.layout
  return layout.replace(/^([a-z])/, (_, i) => i.toUpperCase())
})
</script>

<template>
  <section
    :key="route.path"
    class="tag"
  >
    <VPCover
      :title="title"
      description=""
    />
    <p id="VPContent">
      TODO: Tag and Category
    </p>
  </section>
</template>
