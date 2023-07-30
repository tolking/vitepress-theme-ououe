<script setup lang="ts">
import { computed, provide } from 'vue'
import { useData } from 'vitepress'
import { useNav } from 'vitepress/dist/client/theme-default/composables/nav'
import VPSkipLink from 'vitepress/dist/client/theme-default/components/VPSkipLink.vue'
import VPNavScreen from 'vitepress/dist/client/theme-default/components/VPNavScreen.vue'
import NotFound from './NotFound.vue'
import Page from './Page.vue'
import Tag from './Tag.vue'
import Article from './Article.vue'
import VPHeader from '../components/VPHeader.vue'
import VPFooter from '../components/VPFooter.vue'
import type { Theme } from '../types'

const { page, frontmatter } = useData<Theme>()
const { isScreenOpen, closeScreen, toggleScreen } = useNav()

const layout = computed(() => {
  return frontmatter.value.layout || 'article'
})

provide('close-screen', closeScreen)
</script>

<template>
  <VPSkipLink />
  <VPHeader
    :is-screen-open="isScreenOpen"
    @toggle-screen="toggleScreen"
  />
  <VPNavScreen :open="isScreenOpen" />
  <Transition
    name="page"
    mode="out-in"
    appear
  >
    <NotFound v-if="page.isNotFound" />
    <Page v-else-if="layout === 'page'" />
    <Tag v-else-if="layout === 'tag' || layout === 'category'" />
    <Article v-else-if="layout === 'article'" />
    <component
      :is="layout"
      v-else
    />
  </Transition>
  <VPFooter />
</template>
