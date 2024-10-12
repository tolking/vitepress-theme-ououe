<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute, withBase, type DefaultTheme } from 'vitepress'
import { useTag } from '../composables/index'
import VPCover from '../components/VPCover.vue'
import VPTagList from '../components/VPTagList.vue'
import VPArticleList from '../components/VPArticleList.vue'
import { TagSlots, type Theme } from '../types/index'

defineSlots<TagSlots>()

const route = useRoute()
const { frontmatter, theme } = useData<Theme>()
const { current, list, posts } = useTag()

const title = computed(() => {
  const nav = theme.value.nav?.find((item) => {
    if ('link' in item) {
      return withBase(item.link) === route.path
    }
    return false
  })

  if (nav) {
    return (nav as DefaultTheme.NavItemWithLink).text
  } else {
    const layout: string = frontmatter.value.layout
    return layout.replace(/^([a-z])/, (_, i) => i.toUpperCase())
  }
})
</script>

<template>
  <section class="tag">
    <VPCover
      :title="title"
      description=""
    />
    <slot name="tag-top" />
    <VPTagList
      id="VPContent"
      v-model="current"
      :list="list"
    >
      <template #tag-item="scope">
        <slot
          name="tag-item"
          v-bind="scope"
        />
      </template>
    </VPTagList>
    <slot name="tag-after" />
    <VPArticleList :list="posts" />
    <slot name="tag-bottom" />
  </section>
</template>

<style scoped>
.tag {
  flex-grow: 1;
}
</style>
