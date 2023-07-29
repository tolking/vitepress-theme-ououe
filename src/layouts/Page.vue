<script setup lang="ts">
// import { computed } from 'vue'
// import { useData, withBase } from 'vitepress'

// const { frontmatter, theme } = useData()

// const coverStyle = computed(() => {
//   const img = frontmatter.value?.image || theme.value?.cover
//   return { backgroundImage: `url(${withBase(img)})` }
// })
</script>

<template>
  <section
    id="VPContent"
    class="main page"
  >
    <!-- <div class="page-cover">
      <div
        :style="coverStyle"
        class="page-bg"
      />
    </div> -->
    <p>TODO: Pagination</p>
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
