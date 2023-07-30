<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { toArray } from '../utils/index'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
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
  <section class="main article">
    <article
      id="VPContent"
      class="vp-doc"
    >
      <div class="article-header">
        <h1 class="header">
          {{ frontmatter.title }}
        </h1>
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
      </div>
      <Content />
    </article>
    <div
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
    </div>
    <nav>
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
.article {
  padding-top: 2.5rem;
}
.article .article-header {
  text-align: center;
}
.article .article-header .header {
  margin-bottom: calc(var(--vp-size-space) * 2);
  font-size: 2.5rem;
  text-shadow:
    0px 0px 0 var(--vp-c-text-1),
    1px 1px 2px var(--vp-c-text-2),
    2px 2px 0 var(--vp-c-text-3);
}
.article .article-header .header-nav {
  display: flex;
  justify-content: center;
  gap: var(--vp-size-space);
}
.article .article-time {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  text-align: right;
}
</style>
