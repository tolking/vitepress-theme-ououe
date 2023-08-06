<script setup lang="ts">
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPNavTags from '../components/VPNavTags.vue'
import type { PostsItem } from '../types'

defineProps<{
  list?: PostsItem[]
}>()
</script>

<template>
  <TransitionGroup
    name="posts"
    tag="section"
    appear
    class="main article-list"
  >
    <article
      v-for="(item, index) in list"
      :key="item.url"
      :style="{ '--vp-posts-delay': `${index / 8}s` }"
      class="article-item"
    >
      <VPLink
        v-if="item?.image"
        :href="item.url"
        :title="item.title"
        class="item-image"
      >
        <VPImage
          :image="item.image"
          :alt="item.title"
          loading="lazy"
          class="img"
        />
      </VPLink>
      <div class="item-content">
        <VPLink :href="item.url">
          <h2 class="title">
            {{ item.title }}
          </h2>
        </VPLink>
        <div
          v-if="item.excerpt"
          class="excerpt"
          v-html="item.excerpt"
        />
        <p
          v-else-if="item.description"
          class="excerpt"
        >
          {{ item.categories }}
        </p>
        <VPNavTags
          :tags="item.tags"
          :categories="item.categories"
        />
      </div>
    </article>
  </TransitionGroup>
</template>

<style>
.article-list {
  display: grid;
  grid-gap: var(--vp-size-space);
  grid-template-columns: repeat(6, 1fr);
  padding-top: calc(var(--vp-size-space) * 2);
  padding-bottom: calc(var(--vp-size-space) * 2);
}
</style>

<style scope>
.article-item {
  display: flex;
  flex-direction: var(--vp-posts-direction);
  grid-column-start: span var(--vp-posts-span);
  min-height: var(--vp-posts-height);
  overflow: hidden;
}
.article-item .item-image {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40%;
  max-height: var(--vp-posts-height);
  border-radius: 0.5rem;
  overflow: hidden;
}
.article-item .item-image :deep(.img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.article-item .item-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--vp-size-space) calc(var(--vp-size-space) * 2);
  max-height: var(--vp-posts-height);
}
.article-item .item-content .title {
  font-size: 1.3rem;
  color: var(--vp-c-text-1);
  font-weight: 700;
  line-height: 1.6;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: var(--vp-transition-color);
}
.article-item .item-content .title:hover {
  color: var(--vp-c-brand);
}
.article-item .item-content .excerpt {
  flex: 1;
  margin: var(--vp-size-space) 0;
  overflow: hidden;
  color: var(--vp-c-text-2);
}
</style>
