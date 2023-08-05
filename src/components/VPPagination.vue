<script setup lang="ts">
import { computed } from 'vue'
import { DefaultTheme, useData, useRoute } from 'vitepress'
import { usePagination } from '../composables/index'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import type { Theme, PaginationParams } from '../types'

const route = useRoute()
const { page } = useData<Theme>()
const { config, posts } = usePagination()

const pagination = computed(() => {
  const params = page.value.params as PaginationParams | undefined

  if (!params?.current || !params?.limit || !config.value) return

  return {
    current: params.current,
    limit: params.limit,
    pages: Math.ceil(posts.value.length / params.limit),
    group: config.value.group || 5,
    prev: config.value.prev || 'Prev',
    next: config.value.next || 'Next',
    formatPage: config.value.formatPage || formatPage,
  }
})

const group = computed(() => {
  if (!pagination.value) return [] as DefaultTheme.NavItemWithLink[]

  const count = Math.floor(pagination.value.group / 2)
  let len = pagination.value.pages
  let temp = [] as number[]
  let list = [] as DefaultTheme.NavItemWithLink[]
  let center = pagination.value.current

  if (len <= pagination.value.group) {
    while (len--) {
      temp.push(pagination.value.pages - len)
    }
    return temp.map(pagination.value.formatPage)
  }

  while (len--) {
    temp.push(pagination.value.pages - len)
  }

  const idx = temp.indexOf(center)

  if (idx < count) {
    center = center + count - idx
  }

  if (pagination.value.current > pagination.value.pages - count) {
    center = pagination.value.pages - count
  }

  temp = temp.splice(center - count - 1, pagination.value.group)

  do {
    const t = temp.shift()
    t && list.push(pagination.value.formatPage(t))
  } while (temp.length)

  return list
})

const prev = computed(() => findPageInfo(-1))
const next = computed(() => findPageInfo(1))

function formatPage(index: number): DefaultTheme.NavItemWithLink {
  const link = index === 1 ? '/' : `/page-${index}`
  let prefix: string | undefined

  if (config.value?.dir) {
    if (Array.isArray(config.value.dir) && config.value.dir.length === 1) {
      prefix = config.value.dir[0]
    } else if (!Array.isArray(config.value.dir)) {
      prefix = config.value.dir
    }
  }

  return {
    link: `${prefix ? `/${prefix}` : ''}${link}`,
    text: String(index),
  }
}

function findPageInfo(n: number) {
  const index = group.value.findIndex((item) => item.link === route.path)
  return group.value[index + n]
}
</script>

<template>
  <TransitionGroup
    v-if="pagination"
    name="scale"
    tag="nav"
    appear
    class="main pagination"
  >
    <VPLink
      v-if="pagination.current !== 1"
      :href="prev.link"
      :target="prev.target"
      :rel="prev.rel"
      class="pagination-item"
    >
      {{ pagination.prev }}
    </VPLink>
    <VPLink
      v-for="item in group"
      :key="item.link"
      :href="item.link"
      :target="item.target"
      :rel="item.rel"
      :class="{ active: item.link === route.path }"
      class="pagination-item"
    >
      {{ item.text }}
    </VPLink>
    <VPLink
      v-if="pagination.current !== pagination.pages"
      :href="next.link"
      :target="next.target"
      :rel="next.rel"
      class="pagination-item"
    >
      {{ pagination.next }}
    </VPLink>
  </TransitionGroup>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--vp-size-space);
  padding: 1rem 0 2rem;
}
.pagination .pagination-item {
  --vp-button-border: var(--vp-button-alt-border);
  --vp-button-bg: var(--vp-button-alt-bg);
  --vp-button-text: var(--vp-button-alt-text);
  --vp-button-hover-border: var(--vp-button-alt-hover-border);
  --vp-button-hover-bg: var(--vp-button-alt-hover-bg);
  --vp-button-hover-text: var(--vp-button-alt-hover-text);
  --vp-button-active-border: var(--vp-button-alt-active-border);
  --vp-button-active-bg: var(--vp-button-alt-active-bg);
  --vp-button-active-text: var(--vp-button-alt-active-text);
}
.pagination .pagination-item.active {
  --vp-button-border: var(--vp-button-brand-border);
  --vp-button-bg: var(--vp-button-brand-bg);
  --vp-button-text: var(--vp-button-brand-text);
  --vp-button-hover-border: var(--vp-button-brand-hover-border);
  --vp-button-hover-bg: var(--vp-button-brand-hover-bg);
  --vp-button-hover-text: var(--vp-button-brand-hover-text);
  --vp-button-active-border: var(--vp-button-brand-active-border);
  --vp-button-active-bg: var(--vp-button-brand-active-bg);
  --vp-button-active-text: var(--vp-button-brand-active-text);
}
.pagination .pagination-item {
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-button-border);
  background-color: var(--vp-button-bg);
  color: var(--vp-button-text);
  transition: var(--vp-transition-all);
}
.pagination .pagination-item:hover {
  border-color: var(--vp-button-hover-border);
  background-color: var(--vp-button-hover-bg);
  color: var(--vp-button-hover-text);
}
.pagination .pagination-item:active {
  border-color: var(--vp-button-active-border);
  background-color: var(--vp-button-active-bg);
  color: var(--vp-button-active-text);
}
</style>
