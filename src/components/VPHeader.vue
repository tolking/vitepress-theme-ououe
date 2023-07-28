<script setup lang="ts">
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import VPNavBarAppearance from 'vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue'
import VPNavBarSocialLinks from 'vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue'
import VPNavBarHamburger from 'vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue'

defineProps<{
  isScreenOpen: boolean
}>()

defineEmits<{
  (e: 'toggle-screen'): void
}>()

const { site, theme } = useData()
</script>

<template>
  <header class="header">
    <div class="header-content">
      <VPLink>
        <VPImage
          v-if="theme.logo"
          class="logo"
          :image="theme.logo"
        />
        <span v-else>
          {{ site.title }}
        </span>
      </VPLink>
      <VPNavBarMenu class="menu" />
      <VPNavBarSearch class="search" />
      <VPNavBarTranslations class="translations" />
      <VPNavBarAppearance class="appearance" />
      <VPNavBarSocialLinks class="social-links" />
      <VPNavBarHamburger
        class="hamburger"
        :active="isScreenOpen"
        @click="$emit('toggle-screen')"
      />
    </div>
  </header>
</template>

<style scoped>
.header {
  --vp-c-transparent: color-mix(
    in srgb,
    var(--vp-nav-bg-color) 40%,
    transparent
  );
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--vp-z-index-nav);
  height: var(--vp-nav-height);
  border-bottom: 1px solid var(--vp-c-border);
  background-image: radial-gradient(
    var(--vp-c-transparent, transparent) 1px,
    var(--vp-nav-bg-color) 1px
  );
  background-size: 4px 4px;
  backdrop-filter: saturate(60%) blur(4px);
}
.header .header-content {
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: var(--vp-size-main-width);
}
.header .header-content .menu {
  flex-grow: 1;
}
.header .header-content .search {
  flex-grow: initial;
}
</style>
