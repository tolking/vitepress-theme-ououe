<script setup lang="ts">
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import type { Theme } from '../types'

defineProps<{
  tags?: string[]
  categories?: string[]
  separator?: boolean
}>()

const { theme } = useData<Theme>()
</script>

<template>
  <TransitionGroup
    v-if="tags?.length || categories?.length"
    name="scale"
    tag="nav"
    appear
    class="nav-tags"
  >
    <VPLink
      v-for="category in categories"
      :key="category"
      :href="`${theme.category}?t=${category}`"
    >
      {{ category }}
    </VPLink>
    <span
      v-if="tags?.length && categories?.length"
      :style="{ flexGrow: separator ? 0 : 1 }"
      class="link"
    >
      {{ separator ? '|' : '' }}
    </span>
    <VPLink
      v-for="tag in tags"
      :key="tag"
      :href="`${theme.tag}?t=${tag}`"
    >
      {{ tag }}
    </VPLink>
  </TransitionGroup>
</template>

<style scoped>
.nav-tags {
  display: flex;
  align-items: center;
  gap: var(--vp-size-space);
}
.nav-tags .link {
  color: var(--vp-c-text-2);
  transition: var(--vp-transition-color);
}
.nav-tags .link:hover {
  color: var(--vp-c-brand);
}
</style>
