<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { usePrevNext } from '../composables/index'
import { toArray } from '../utils/index'
import VPCover from '../components/VPCover.vue'
import VPNavTags from '../components/VPNavTags.vue'
import VPArticleList from '../components/VPArticleList.vue'
import VPReadingProgress from '../components/VPReadingProgress.vue'
import type { ArticleSlots, Theme } from '../types/index'

defineSlots<ArticleSlots>()

const { frontmatter, theme, lang, page } = useData<Theme>()
const list = usePrevNext()

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
      <VPNavTags
        :tags="tags"
        :categories="categories"
        separator
        class="article-tags"
      />
    </VPCover>
    <slot
      name="article-top"
      :frontmatter="frontmatter"
    />
    <article
      id="VPContent"
      class="main vp-doc"
    >
      <slot
        name="article-content-before"
        :frontmatter="frontmatter"
      />
      <Content />
      <slot
        name="article-content-after"
        :frontmatter="frontmatter"
      />
      <footer
        v-if="
          (frontmatter.createTime !== false && theme.createTime) ||
            (frontmatter.lastUpdated !== false && theme.lastUpdated)
        "
        class="article-time"
      >
        <p v-if="frontmatter.createTime !== false && theme.createTime">
          {{ theme.createTime.text }}:
          <time :datetime="createTime">{{ createTime }}</time>
        </p>
        <p v-if="frontmatter.lastUpdated !== false && theme.lastUpdated">
          {{ theme.lastUpdated.text }}:
          <time :datetime="lastUpdated">{{ lastUpdated }}</time>
        </p>
      </footer>
    </article>
    <slot
      name="article-pagination-before"
      :frontmatter="frontmatter"
    />
    <VPArticleList
      v-if="frontmatter.articlePagination !== false"
      :list="list"
      class="article-pagination"
    >
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
    </VPArticleList>
    <slot
      name="article-bottom"
      :frontmatter="frontmatter"
    />
    <VPReadingProgress />
  </section>
</template>

<style scoped>
.article {
  flex-grow: 1;
}
.article .article-tags {
  mix-blend-mode: difference;
}
.article .vp-doc {
  padding-top: calc(var(--vp-size-space) * 2);
  padding-bottom: calc(var(--vp-size-space) * 2);
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
.article .article-pagination {
  --vp-posts-span: 6;
  --vp-posts-direction: row-reverse;
  --vp-posts-height: 10rem;
}
.article .article-pagination :deep(.article-item:first-child) {
  --vp-posts-direction: row;
}
.article .article-pagination :deep(.article-item:first-child:last-child) {
  --vp-posts-span: 6;
}
.article .article-pagination :deep(.article-item .item-content) {
  max-width: calc(60% - var(--vp-size-space) * 4);
}

@media (min-width: 768px) {
  .article .article-pagination {
    --vp-posts-span: 3;
  }
}
</style>
