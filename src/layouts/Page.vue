<script setup lang="ts">
// import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { usePagination } from '../composables/index'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPPagination from '../components/VPPagination.vue'
import type { Theme } from '../types'

const route = useRoute()
const { theme } = useData<Theme>()
const { list } = usePagination()

// const coverStyle = computed(() => {
//   const img = frontmatter.value?.image || theme.value?.cover
//   return { backgroundImage: `url(${withBase(img)})` }
// })
</script>

<template>
  <section
    :key="route.path"
    class="main page"
  >
    <!-- <div class="page-cover">
      <div
        :style="coverStyle"
        class="page-bg"
      />
    </div> -->

    <ul id="VPContent">
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

<style scoped>
.page .page-cover {
  position: relative;
  width: 100%;
  height: var(--vp-size-cover-height);
  overflow: hidden;
}
.page .page-bg {
  position: absolute;
  top: calc(var(--vp-size-cover-blur) * -2);
  bottom: calc(var(--vp-size-cover-blur) * -2);
  left: calc(var(--vp-size-cover-blur) * -2);
  right: calc(var(--vp-size-cover-blur) * -2);
  background-color: var(--vp-c-bg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(var(--vp-size-cover-blur)) saturate(80%);
  will-change: background-image;
  transition: var(--vp-transition-all);
}
</style>
