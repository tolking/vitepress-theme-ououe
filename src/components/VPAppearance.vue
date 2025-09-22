<script lang="ts" setup>
import { computed, ref, nextTick } from 'vue'
import { useData } from 'vitepress'
import VPSwitch from 'vitepress/dist/client/theme-default/components/VPSwitch.vue'

const { isDark, theme } = useData()
const switchRef = ref()

const switchTitle = computed(() => {
  return isDark.value
    ? theme.value.lightModeSwitchTitle || 'Switch to light theme'
    : theme.value.darkModeSwitchTitle || 'Switch to dark theme'
})

function toggleAppearance() {
  const isAppearanceTransition =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    document.startViewTransition &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const switchElement = switchRef.value?.$el
  const rect = switchElement.getBoundingClientRect()
  const x = rect.left + rect.width / 2
  const y = rect.top + rect.height / 2

  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        fill: 'both',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <VPSwitch
    ref="switchRef"
    :title="switchTitle"
    :aria-checked="isDark"
    class="VPSwitchAppearance"
    @click="toggleAppearance"
  >
    <span class="vpi-sun sun" />
    <span class="vpi-moon moon" />
  </VPSwitch>
</template>

<style scoped>
.sun {
  opacity: 1;
}

.moon {
  opacity: 0;
}

.dark .sun {
  opacity: 0;
}

.dark .moon {
  opacity: 1;
}

.dark .VPSwitchAppearance :deep(.check) {
  /*rtl:ignore*/
  transform: translateX(18px);
}
</style>
