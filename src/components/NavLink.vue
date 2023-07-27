<script setup lang="ts">
import { computed } from 'vue'
import { isURL } from '../utils/index'

const props = defineProps<{
  href: string
}>()

const bind = computed(() => {
  return isURL(props.href)
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}
})
</script>

<template>
  <a
    :href="href"
    v-bind="bind"
  >
    <slot />
  </a>
</template>
