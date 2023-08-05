import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { usePagination } from './index'
import type { PostsItem } from '../types'

export function usePrevNext() {
  const route = useRoute()
  const { posts } = usePagination()

  return computed(() => {
    const index = posts.value.findIndex((item) => item.url === route.path)
    const list: PostsItem[] = []

    if (index > 0) {
      list.push(posts.value[index - 1])
    }
    if (index < posts.value.length - 1) {
      list.push(posts.value[index + 1])
    }

    return list
  })
}
