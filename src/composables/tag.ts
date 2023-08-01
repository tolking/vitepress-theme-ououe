import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import { data } from '../posts.data'
import { Classifiable } from '../utils/index'
import type { Theme } from '../types'

const classifiable = new Classifiable(data)

export function useTag() {
  const { frontmatter } = useData<Theme>()

  const current = ref<string>()

  const list = computed(() => {
    switch (frontmatter.value.layout) {
      case 'tag':
        return classifiable.allTags
      case 'category':
        return classifiable.allCategories
      default:
        return undefined
    }
  })

  const posts = computed(() => {
    if (!current.value) return undefined

    switch (frontmatter.value.layout) {
      case 'tag':
        return classifiable.getPostsByTag(current.value)
      case 'category':
        return classifiable.getPostsByCategory(current.value)
      default:
        return undefined
    }
  })

  return {
    current,
    list,
    posts,
  }
}
