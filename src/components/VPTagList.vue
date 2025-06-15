<script setup lang="ts">
import type { TagListSlots } from '../types/index'

defineProps<{
  modelValue?: string
  list?: Record<string, number>
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
}>()
defineSlots<TagListSlots>()

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target?.value)
}
</script>

<template>
  <TransitionGroup
    name="posts"
    tag="section"
    appear
    role="radiogroup"
    class="main tag-list"
  >
    <label
      v-for="(count, tag, index) in list"
      :key="tag"
      :for="`id__${tag}`"
      :class="{ active: tag === modelValue }"
      :style="{ '--vp-posts-delay': `${index / 20}s` }"
      class="tag-item"
    >
      <input
        :id="`id__${tag}`"
        :value="tag"
        :checked="tag === modelValue"
        type="radio"
        name="tagList"
        class="visually-hidden"
        @change="handleChange"
      />
      <slot name="tag-item" :tag="tag" :count="count">
        <div class="item-inner">
          <span>{{ tag }}</span>
          <span class="count">({{ count }})</span>
        </div>
      </slot>
    </label>
  </TransitionGroup>
</template>

<style>
.tag-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--vp-size-space);
  padding-top: calc(var(--vp-size-space) * 2);
}
</style>

<style scoped>
.tag-item {
  --vp-tag-border: var(--vp-button-alt-border);
  --vp-tag-bg: var(--vp-button-alt-bg);
  --vp-tag-text: var(--vp-button-alt-text);
  --vp-tag-hover-border: var(--vp-button-alt-hover-border);
  --vp-tag-hover-bg: var(--vp-button-alt-hover-bg);
  --vp-tag-hover-text: var(--vp-button-alt-hover-text);
}
.tag-item.active {
  --vp-tag-border: var(--vp-button-brand-border);
  --vp-tag-bg: var(--vp-button-brand-bg);
  --vp-tag-text: var(--vp-button-brand-text);
  --vp-tag-hover-border: var(--vp-button-brand-hover-border);
  --vp-tag-hover-bg: var(--vp-button-brand-hover-bg);
  --vp-tag-hover-text: var(--vp-button-brand-hover-text);
}
.tag-item > .visually-hidden:focus-visible + .item-inner {
  outline: 2px solid var(--vp-tag-bg);
  outline-offset: 1px;
}
.tag-item .item-inner {
  padding: 0.4rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-tag-border);
  background-color: var(--vp-tag-bg);
  color: var(--vp-tag-text);
  cursor: pointer;
  transition: var(--vp-transition-all);
}
.tag-item .item-inner:hover {
  border-color: var(--vp-tag-hover-border);
  background-color: var(--vp-tag-hover-bg);
  color: var(--vp-tag-hover-text);
}

.tag-item input:focus-visible + .item-inner {
  outline: 2px solid var(--vp-c-brand-lighter);
  outline-offset: 1px;
}
.tag-item .item-inner .count {
  margin-left: 0.25rem;
  font-size: 0.9rem;
}
</style>
