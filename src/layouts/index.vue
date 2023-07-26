<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
// import { data } from '../posts.data'
import NotFound from './NotFound.vue'
import Page from './Page.vue'
import Tag from './Tag.vue'
import Article from './Article.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// console.log('data', data, useData());

const { page, frontmatter } = useData()

const layout = computed(() => {
  return frontmatter.value.layout || 'article'
})
</script>

<template>
  <Header />
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
  <Footer />
</template>

<style>
.page-enter-from {
  transform: translate(-8px, 4px);
  opacity: 0;
}
.page-leave-to {
  transform: translate(8px, 4px);
  opacity: 0;
}
.page-enter-to,
.page-leave-from {
  transform: translate(0);
  opacity: 1;
}
.page-enter-active,
.page-leave-active {
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
}
</style>
