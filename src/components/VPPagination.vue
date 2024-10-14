<script setup lang="ts">
import { computed } from 'vue'
import { type DefaultTheme, useData, useRoute, withBase } from 'vitepress'
import { useLangs, usePagination } from '../composables/index'
import { isActive } from 'vitepress/dist/client/shared'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import type { Theme, PaginationParams } from '../types'

const route = useRoute()
const { page } = useData<Theme>()
const { config, posts } = usePagination()
const { prefix } = useLangs()

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
  const link = index === 1 ? '' : `page-${index}`
  let dir: string | undefined

  if (config.value?.dir) {
    if (Array.isArray(config.value.dir) && config.value.dir.length === 1) {
      dir = config.value.dir[0]
    } else if (!Array.isArray(config.value.dir)) {
      dir = config.value.dir
    }
  }

  return {
    link: `${prefix.value}${dir ? `${dir}/` : ''}${link}`,
    text: String(index),
  }
}

function findPageInfo(n: number) {
  const index = group.value.findIndex(
    (item) => withBase(item.link) === route.path,
  )

  if (index + n < 0 || index + n >= group.value.length) {
    return undefined
  }
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
      v-show="prev && pagination.current !== 1"
      key="prew"
      :href="prev?.link"
      :target="prev?.target"
      :rel="prev?.rel"
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
      :class="{
        active: isActive(
          page.relativePath,
          item.activeMatch || item.link,
          !!item.activeMatch,
        ),
      }"
      class="pagination-item"
    >
      {{ item.text }}
    </VPLink>
    <VPLink
      v-show="next && pagination.current !== pagination.pages"
      key="next"
      :href="next?.link"
      :target="next?.target"
      :rel="next?.rel"
      class="pagination-item"
    >
      {{ pagination.next }}
    </VPLink>
  </TransitionGroup>
</template>

<style>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--vp-size-space);
  padding-top: 1rem;
  padding-bottom: 2rem;
}
</style>

<style scoped>
.pagination-item {
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
.pagination-item.active {
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
.pagination-item {
  display: block;
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-button-border);
  background-color: var(--vp-button-bg);
  color: var(--vp-button-text);
  transition: var(--vp-transition-all);
}
.pagination-item:hover {
  border-color: var(--vp-button-hover-border);
  background-color: var(--vp-button-hover-bg);
  color: var(--vp-button-hover-text);
}
.pagination-item:active {
  border-color: var(--vp-button-active-border);
  background-color: var(--vp-button-active-bg);
  color: var(--vp-button-active-text);
}
</style>
