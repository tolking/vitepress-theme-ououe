<script setup lang="ts">
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import type { Theme } from '../types'

defineProps<{
  tags?: string[]
  categories?: string[]
}>()

const { theme } = useData<Theme>()
</script>

<template>
  <nav
    v-if="tags?.length || categories?.length"
    class="nav-tags"
  >
    <VPLink
      v-for="category in categories"
      :key="category"
      :href="`${theme.category}?t=${category}`"
    >
      {{ category }}
    </VPLink>
    <span v-if="tags?.length && categories?.length">/</span>
    <VPLink
      v-for="tag in tags"
      :key="tag"
      :href="`${theme.tag}?t=${tag}`"
    >
      {{ tag }}
    </VPLink>
  </nav>
</template>

<style scoped>
.nav-tags .link {
  transition: var(--vp-transition-color);
}
.nav-tags .link:hover {
  color: var(--vp-c-brand);
}
</style>
