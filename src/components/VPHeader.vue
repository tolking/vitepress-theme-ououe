<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue'
import VPNavBarMenu from 'vitepress/dist/client/theme-default/components/VPNavBarMenu.vue'
import VPNavBarSearch from 'vitepress/dist/client/theme-default/components/VPNavBarSearch.vue'
import VPNavBarTranslations from 'vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue'
import VPNavBarAppearance from 'vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue'
import VPNavBarSocialLinks from 'vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue'
import VPNavBarHamburger from 'vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue'
import type { HeaderSlots, Theme } from '../types/index'

defineProps<{
  isScreenOpen: boolean
}>()
defineEmits<{
  (e: 'toggle-screen'): void
}>()
defineSlots<HeaderSlots>()

const { site, theme, localeIndex } = useData<Theme>()

const homeLink = computed(() => {
  return (
    site.value.locales[localeIndex.value]?.link ||
    (localeIndex.value === 'root' ? '/' : `/${localeIndex.value}/`)
  )
})
</script>

<template>
  <header class="header">
    <div class="main header-content">
      <slot name="header-left" />
      <VPLink
        :href="homeLink"
        class="header-logo"
      >
        <VPImage
          v-if="theme.logo"
          :image="theme.logo"
          class="logo"
        />
        <template v-else>
          {{ site.title }}
        </template>
      </VPLink>
      <slot name="header-logo-after" />
      <VPNavBarMenu class="menu" />
      <slot name="header-search-before" />
      <VPNavBarSearch class="search" />
      <VPNavBarTranslations class="translations" />
      <VPNavBarAppearance class="appearance" />
      <VPNavBarSocialLinks class="social-links" />
      <VPNavBarHamburger
        :active="isScreenOpen"
        class="hamburger"
        @click="$emit('toggle-screen')"
      />
      <slot name="header-right" />
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
  max-width: calc(var(--vp-size-main-width) + 10rem);
}
.header .header-content .header-logo {
  flex-grow: 1;
  margin-right: var(--vp-size-space);
  font-size: 1rem;
  font-weight: 600;
}
.header .header-content .header-logo :deep(.logo) {
  height: calc(var(--vp-nav-height) - 30px);
}
.header .header-content .menu {
  flex-grow: 1;
}
.header .header-content .search {
  flex-grow: 0;
  padding-left: 0;
}
.header .header-content .translations,
.header .header-content .appearance,
.header .header-content .social-links {
  margin-left: var(--vp-size-space);
}

@media (min-width: 768px) {
  .header .header-content .header-logo {
    flex-grow: 0;
  }
}
</style>
