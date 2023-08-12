<script setup lang="ts">
import { usePagination } from '../composables/index'
import VPCover from '../components/VPCover.vue'
import VPArticleList from '../components/VPArticleList.vue'
import VPPagination from '../components/VPPagination.vue'
import type { PageSlots } from '../types/index'

defineSlots<PageSlots>()

const { list } = usePagination()
</script>

<template>
  <section class="page">
    <VPCover />
    <slot name="page-top" />
    <VPArticleList
      id="VPContent"
      :list="list"
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
    <slot name="page-pagination-before" />
    <VPPagination />
    <slot name="page-bottom" />
  </section>
</template>

<style scoped>
.page {
  flex-grow: 1;
}
</style>
