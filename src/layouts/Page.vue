<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { usePagination } from '../composables/index'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPCover from '../components/VPCover.vue'
import VPPagination from '../components/VPPagination.vue'
import type { Theme } from '../types'

const route = useRoute()
const { theme } = useData<Theme>()
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
          <nav v-if="item.tags.length || item.categories.length">
            <div>
              <VPLink
                v-for="category in item.categories"
                :key="category"
                :href="`${theme.category}?t=${category}`"
              >
                {{ category }}
              </VPLink>
            </div>
            <div>
              <VPLink
                v-for="tag in item.tags"
                :key="tag"
                :href="`${theme.tag}?t=${tag}`"
              >
                {{ tag }}
              </VPLink>
            </div>
          </nav>
        </article>
      </li>
    </ul>
    <VPPagination />
  </section>
</template>
