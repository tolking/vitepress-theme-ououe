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
  <nav
    v-if="pagination"
    class="pagination"
  >
    <VPLink
      v-if="pagination.current !== 1"
      :href="prev.link"
      :target="prev.target"
      :rel="prev.rel"
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
    >
      {{ item.text }}
    </VPLink>
    <VPLink
      v-if="pagination.current !== pagination.pages"
      :href="next.link"
      :target="next.target"
      :rel="next.rel"
    >
      {{ pagination.next }}
    </VPLink>
  </nav>
</template>
