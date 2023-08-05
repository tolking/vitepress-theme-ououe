import { computed, ref, watch } from 'vue'
import { useData, inBrowser, useRoute } from 'vitepress'
import { data } from '../posts.data'
import { Classifiable } from '../utils/index'
import type { Theme } from '../types'

const classifiable = new Classifiable(data)

export function useTag() {
  const route = useRoute()
  const { frontmatter, theme } = useData<Theme>()

  const current = ref<string>(getQuery())

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

  watch(
    () => route.path,
    (value) => {
      if ([theme.value.tag, theme.value.category].includes(value)) {
        current.value = getQuery()
      }
    },
  )

  function getQuery() {
    if (!inBrowser) return ''
    const { search } = new URL(location.href)
    const searchParams = new URLSearchParams(search)
    const tag = searchParams.get('t')

    return tag || ''
  }

  return {
    current,
    list,
    posts,
  }
}
