<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { toArray } from '../utils/index'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPCover from '../components/VPCover.vue'
import VPReadingProgress from '../components/VPReadingProgress.vue'
import type { Theme } from '../types'

const { frontmatter, theme, lang, page } = useData<Theme>()

const tags = computed(() => {
  return toArray<string[]>(frontmatter.value.tags || frontmatter.value.tag)
})
const categories = computed(() => {
  return toArray<string[]>(
    frontmatter.value.categories || frontmatter.value.category,
  )
})
const createTime = computed(() => {
  if (!frontmatter.value.date) return ''
  const date = frontmatter.value.date
  const format = theme.value.createTime?.format

  return format ? format(date) : new Date(date).toLocaleString(lang.value)
})
const lastUpdated = computed(() => {
  if (!page.value.lastUpdated) return ''
  const date = page.value.lastUpdated
  const format = theme.value.lastUpdated?.format

  return format ? format(date) : new Date(date).toLocaleString(lang.value)
})
</script>

<template>
  <section class="article">
    <VPCover>
      <nav
        v-if="tags.length || categories.length"
        class="header-nav"
      >
        <VPLink
          v-for="category in categories"
          :key="category"
          :href="`${theme.category}?t=${category}`"
        >
          {{ category }}
        </VPLink>
        <span v-if="tags.length && categories.length">/</span>
        <VPLink
          v-for="tag in tags"
          :key="tag"
          :href="`${theme.tag}?t=${tag}`"
        >
          {{ tag }}
        </VPLink>
      </nav>
    </VPCover>
    <article
      id="VPContent"
      class="main vp-doc"
    >
      <Content />
      <footer
        v-if="theme.createTime && theme.lastUpdated"
        class="article-time"
      >
        <p v-if="theme.createTime">
          {{ theme.createTime.text }}:
          <time :datetime="createTime">{{ createTime }}</time>
        </p>
        <p v-if="theme.lastUpdated">
          {{ theme.lastUpdated.text }}:
          <time :datetime="lastUpdated">{{ lastUpdated }}</time>
        </p>
      </footer>
    </article>
    <nav class="main">
      <VPLink href="/posts/b">
        pre
      </VPLink>
      <VPLink href="/posts/b">
        next
      </VPLink>
    </nav>
    <VPReadingProgress />
  </section>
</template>

<style scoped>
.article .header-nav {
  display: flex;
  justify-content: center;
  gap: var(--vp-size-space);
}
.article .header-nav .link {
  transition: var(--vp-transition-color);
}
.article .header-nav .link:hover {
  color: var(--vp-c-brand);
}
.article .vp-doc {
  padding: calc(var(--vp-size-space) * 2) 0;
}
.article .vp-doc .article-time {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-align: right;
}
.article .article-time p {
  margin: 0;
}
</style>
