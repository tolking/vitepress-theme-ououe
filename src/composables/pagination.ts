import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { useLangs } from './index'
import { data } from '../posts.data'
import { isFunction, toArray } from '../utils/index'
import type { Theme, PaginationParams } from '../types/index'

export function usePagination() {
  const route = useRoute()
  const { theme, page } = useData<Theme>()
  const { prefix, isLocaleUrl } = useLangs()

  /** Obtain the pagination config that matches the current route from the config file */
  const config = computed(() => {
    const pagination = theme.value.pagination && toArray(theme.value.pagination)
    if (!pagination?.length) return
    if (pagination.length === 1) return pagination[0]

    return pagination.find((item) => {
      if (isFunction(item.match)) {
        return item.match(route.path)
      } else if (item.dir) {
        const regExp = new RegExp(
          `^${prefix.value}(${toArray(item.dir).join('|')})/`,
        )
        return regExp.test(route.path)
      }
    })
  })

  /** Get all posts */
  const posts = computed(() => {
    if (!data.length) return []
    let list = data.filter((item) => isLocaleUrl(item.url))

    if (config.value?.filter) {
      list = list.filter(config.value.filter)
    } else if (config.value?.dir) {
      const regExp = new RegExp(`^/(${toArray(config.value.dir).join('|')})/`)
      list = list.filter((item) => regExp.test(item.url))
    }

    if (config.value?.sort) {
      list = list.sort(config.value.sort)
    } else {
      list = list.sort((a, b) => {
        if (!b.date || !a.date) return 0
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      })
    }

    return list
  })

  /** Get the current page data */
  const list = computed(() => {
    const params = page.value.params as PaginationParams | undefined
    if (!params?.current || !params?.limit) return posts.value
    return posts.value.slice(
      (params.current - 1) * params.limit,
      params.current * params.limit,
    )
  })

  return {
    config,
    posts,
    list,
  }
}
