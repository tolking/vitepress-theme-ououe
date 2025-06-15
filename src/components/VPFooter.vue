<script setup lang="ts">
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import type { Theme } from '../types/index'

const { theme, frontmatter } = useData<Theme>()
</script>

<template>
  <footer
    v-if="theme.footer && frontmatter.footer !== false"
    :class="theme.footer.nav && 'is-nav'"
    class="main footer"
  >
    <p v-if="theme.footer.copyright" class="copyright">
      {{ theme.footer.copyright }}
    </p>
    <TransitionGroup
      v-if="theme.footer.nav"
      name="posts"
      tag="nav"
      appear
      class="footer-nav"
    >
      <VPLink
        v-for="(item, index) in theme.footer.nav"
        :key="item.text"
        :href="item.link"
        :target="item.target"
        :rel="item.rel"
        :style="{ '--vp-posts-delay': `${index / 10}s` }"
      >
        {{ item.text }}
      </VPLink>
    </TransitionGroup>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: calc(var(--vp-size-space) + 0.3rem);
  padding-bottom: calc(var(--vp-size-space) + 0.3rem);
}
.footer.is-nav {
  justify-content: space-between;
}
.footer .copyright {
  color: var(--vp-c-text-2);
}
.footer :deep(.footer-nav) {
  display: flex;
  align-items: center;
}
.footer :deep(.footer-nav .VPLink) {
  margin-left: calc(var(--vp-size-space) * 2);
  color: var(--vp-c-brand);
}
</style>
