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
import type { Theme, LayoutsSlots } from '../types/index'

defineSlots<LayoutsSlots>()

const { page, frontmatter } = useData<Theme>()
const { isScreenOpen, closeScreen, toggleScreen } = useNav()

const layout = computed(() => {
  return frontmatter.value.layout || 'article'
})

provide('close-screen', closeScreen)
</script>

<template>
  <VPSkipLink />
  <slot name="header-before" />
  <VPHeader
    :is-screen-open="isScreenOpen"
    @toggle-screen="toggleScreen"
  >
    <template #header-left>
      <slot name="header-left" />
    </template>
    <template #header-logo-after>
      <slot name="header-logo-after" />
    </template>
    <template #header-search-before>
      <slot name="header-search-before" />
    </template>
    <template #header-right>
      <slot name="header-right" />
    </template>
  </VPHeader>
  <VPNavScreen :open="isScreenOpen" />
  <slot name="header-after" />
  <Transition
    name="page"
    mode="out-in"
    appear
  >
    <NotFound v-if="page.isNotFound">
      <template #not-found-top>
        <slot name="not-found-top" />
      </template>
      <template #not-found-bottom>
        <slot name="not-found-bottom" />
      </template>
    </NotFound>
    <Page v-else-if="layout === 'page'">
      <template #page-top>
        <slot name="page-top" />
      </template>
      <template #page-pagination-before>
        <slot name="page-pagination-before" />
      </template>
      <template #page-bottom>
        <slot name="page-bottom" />
      </template>
      <template #article-item-top="scope">
        <slot
          name="article-item-top"
          v-bind="scope"
        />
      </template>
      <template #article-item-bottom="scope">
        <slot
          name="article-item-bottom"
          v-bind="scope"
        />
      </template>
    </Page>
    <Tag v-else-if="layout === 'tag' || layout === 'category'">
      <template #tag-top>
        <slot name="tag-top" />
      </template>
      <template #tag-after>
        <slot name="tag-after" />
      </template>
      <template #tag-bottom>
        <slot name="tag-bottom" />
      </template>
      <template #tag-item="scope">
        <slot
          name="tag-item"
          v-bind="scope"
        />
      </template>
    </Tag>
    <Article v-else-if="layout === 'article'">
      <template #article-top="scope">
        <slot
          v-bind="scope"
          name="article-top"
        />
      </template>
      <template #article-content-before="scope">
        <slot
          v-bind="scope"
          name="article-content-before"
        />
      </template>
      <template #article-content-after="scope">
        <slot
          v-bind="scope"
          name="article-content-after"
        />
      </template>
      <template #article-pagination-before="scope">
        <slot
          v-bind="scope"
          name="article-pagination-before"
        />
      </template>
      <template #article-bottom="scope">
        <slot
          v-bind="scope"
          name="article-bottom"
        />
      </template>
      <template #article-item-top="scope">
        <slot
          name="article-item-top"
          v-bind="scope"
        />
      </template>
      <template #article-item-bottom="scope">
        <slot
          name="article-item-bottom"
          v-bind="scope"
        />
      </template>
    </Article>
    <component
      :is="layout"
      v-else
    />
  </Transition>
  <slot name="footer-before" />
  <VPFooter />
  <slot name="footer-after" />
</template>
