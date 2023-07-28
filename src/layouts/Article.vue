<script setup lang="ts">
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const { frontmatter } = useData()
</script>

<template>
  <section class="article">
    <article
      id="VPContent"
      class="vp-doc"
    >
      <h1>{{ frontmatter.title }}</h1>
      <div>
        <span>{{ frontmatter.tags?.join('-') }}</span>/
        <span>{{ frontmatter.categories?.join('-') }}</span>
      </div>
      <Content />
    </article>
    <nav>
      <VPLink href="/posts/b">
        pre
      </VPLink>
      <VPLink href="/posts/b">
        next
      </VPLink>
    </nav>
  </section>
</template>

<style scoped>
.article {
  margin: auto;
  width: 100%;
  max-width: var(--vp-size-main-width);
}
</style>
