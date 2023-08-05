<script setup lang="ts">
import { usePagination } from '../composables/index'
import VPCover from '../components/VPCover.vue'
import VPArticleList from '../components/VPArticleList.vue'
import VPPagination from '../components/VPPagination.vue'

const { list } = usePagination()
</script>

<template>
  <section class="page">
    <VPCover />
    <VPArticleList :list="list" />
    <VPPagination />
  </section>
</template>
