<script setup lang="ts">
import { useRoute } from 'vitepress'
import { usePagination } from '../composables/index'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPCover from '../components/VPCover.vue'
import VPNavTags from '../components/VPNavTags.vue'
import VPPagination from '../components/VPPagination.vue'

const route = useRoute()
const { list } = usePagination()
</script>

<template>
  <section
    :key="route.path"
    class="page"
  >
    <VPCover />
    <ul
      id="VPContent"
      class="main"
    >
      <li
        v-for="item in list"
        :key="item.url"
      >
        <article>
          <VPLink :href="item.url">
            {{ item.title }}
          </VPLink>
          <div
            v-if="item.excerpt"
            v-html="item.excerpt"
          />
          <p v-else-if="item.description">
            {{ item.categories }}
          </p>
          <VPNavTags
            :tags="item.tags"
            :categories="item.categories"
          />
        </article>
      </li>
    </ul>
    <VPPagination />
  </section>
</template>
