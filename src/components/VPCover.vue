<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import type { Theme } from '../types'

const props = defineProps<{
  title?: string
  description?: string
}>()

const { frontmatter, theme, site, isDark } = useData<Theme>()

const title = computed(() => {
  return frontmatter.value.title ?? props.title ?? site.value.title
})
const description = computed(() => {
  return (
    frontmatter.value.description ?? props.description ?? site.value.description
  )
})
const coverStyle = computed(() => {
  const image = frontmatter.value?.image ?? theme.value.cover
  let src = undefined

  if (!image) {
    src = ''
  } else if (typeof image === 'string') {
    src = image
  } else if ('src' in image) {
    src = image.src
  } else if ('dark' in image || 'light' in image) {
    src = isDark.value ? image?.dark || '' : image?.light || ''
  }

  return src ? { backgroundImage: `url(${withBase(src)})` } : undefined
})
</script>

<template>
  <section
    :class="{ 'with-cover': coverStyle }"
    class="cover"
  >
    <div
      v-if="coverStyle"
      :style="coverStyle"
      class="cover-bg"
    />
    <hgroup class="cover-title">
      <Transition
        name="scale"
        mode="out-in"
        appear
      >
        <h1
          :key="title"
          class="title"
        >
          {{ title }}
        </h1>
      </Transition>
      <slot>
        <Transition
          name="posts"
          mode="out-in"
          appear
        >
          <p class="description">
            {{ description }}
          </p>
        </Transition>
      </slot>
    </hgroup>
  </section>
</template>

<style scoped>
.cover {
  position: relative;
  width: 100%;
  height: var(--vp-size-cover-height);
  overflow: hidden;
}
.cover .cover-bg {
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
.cover .cover-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.cover .cover-title .title {
  max-width: 80%;
  font-size: clamp(2rem, 1.636rem + 1.82vw, 3rem);
  color: var(--vp-c-text-1);
  line-height: 2;
  font-weight: 800;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  filter: drop-shadow(0px 4px 6px var(--vp-c-text-1));
}
.cover .cover-title .description {
  max-width: 80%;
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  filter: drop-shadow(0px 2px 3px var(--vp-c-text-2));
}

.cover.with-cover {
  height: var(--vp-size-cover-img-height);
}
.cover.with-cover .cover-title,
.cover.with-cover + :deep(.main) {
  position: relative;
}
</style>
