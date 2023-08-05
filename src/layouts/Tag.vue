<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { useTag } from '../composables/index'
import VPCover from '../components/VPCover.vue'
import VPTagList from '../components/VPTagList.vue'
import VPArticleList from '../components/VPArticleList.vue'
import type { Theme } from '../types'

const route = useRoute()
const { frontmatter } = useData<Theme>()
const { current, list, posts } = useTag()

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
    <VPTagList
      id="VPContent"
      v-model="current"
      :list="list"
    />
    <VPArticleList :list="posts" />
  </section>
</template>
