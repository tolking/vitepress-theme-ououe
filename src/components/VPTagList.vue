<script setup lang="ts">
defineProps<{
  modelValue?: string
  list?: Record<string, number>
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target?.value)
}
</script>

<template>
  <section
    role="radiogroup"
    class="main tag-list"
  >
    <label
      v-for="(count, tag) in list"
      :key="tag"
      :for="`id__${tag}`"
      :class="{ active: tag === modelValue }"
      class="item"
    >
      <input
        :id="`id__${tag}`"
        :value="tag"
        :checked="tag === modelValue"
        type="radio"
        name="tagList"
        class="visually-hidden"
        @change="handleChange"
      >
      <div class="item-inner">
        <span>{{ tag }}</span>
        <span class="count">({{ count }})</span>
      </div>
    </label>
  </section>
</template>

<style scoped>
.tag-list .item {
  --vp-tag-border: var(--vp-button-alt-border);
  --vp-tag-bg: var(--vp-button-alt-bg);
  --vp-tag-text: var(--vp-button-alt-text);
  --vp-tag-hover-border: var(--vp-button-alt-hover-border);
  --vp-tag-hover-bg: var(--vp-button-alt-hover-bg);
  --vp-tag-hover-text: var(--vp-button-alt-hover-text);
}
.tag-list .item.active {
  --vp-tag-border: var(--vp-button-brand-border);
  --vp-tag-bg: var(--vp-button-brand-bg);
  --vp-tag-text: var(--vp-button-brand-text);
  --vp-tag-hover-border: var(--vp-button-brand-hover-border);
  --vp-tag-hover-bg: var(--vp-button-brand-hover-bg);
  --vp-tag-hover-text: var(--vp-button-brand-hover-text);
}
.tag-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--vp-size-space);
  padding-top: calc(var(--vp-size-space) * 2);
}
.tag-list .item .item-inner {
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-tag-border);
  background-color: var(--vp-tag-bg);
  color: var(--vp-tag-text);
  transition: var(--vp-transition-all);
}
.tag-list .item .item-inner:hover {
  border-color: var(--vp-tag-hover-border);
  background-color: var(--vp-tag-hover-bg);
  color: var(--vp-tag-hover-text);
}

.tag-list .item input:focus-visible + .item-inner {
  outline: 2px solid var(--vp-c-brand-lighter);
  outline-offset: 1px;
}
.tag-list .item .item-inner .count {
  margin-left: 0.25rem;
  font-size: 0.9rem;
}
</style>
