import { createContentLoader } from 'vitepress'
import { toArray } from './utils/index'
import type { SiteConfig } from 'vitepress'
import type { Theme, PostsItem } from './types/theme'

declare const data: PostsItem[]
export { data }

type GlobalThis = typeof globalThis & { VITEPRESS_CONFIG: SiteConfig<Theme> }

const config = (globalThis as GlobalThis).VITEPRESS_CONFIG
const pattern = getPattern()

export default createContentLoader(pattern, {
  excerpt: config.site.themeConfig.excerpt ?? true,
  transform(raw): PostsItem[] {
    const posts: PostsItem[] = []

    for (let i = 0; i < raw.length; i++) {
      const { excerpt, frontmatter, url } = raw[i]

      if (
        /\[[^\]]*\]\./.test(url) ||
        ['page', 'tag', 'category'].includes(frontmatter.layout)
      ) {
        continue
      }

      const tags = toArray(frontmatter.tags || frontmatter.tag)
      const categories = toArray(frontmatter.categories || frontmatter.category)

      posts.push({
        ...frontmatter,
        tags,
        categories,
        url,
        excerpt,
      })
    }

    return posts
  },
})

function getPattern() {
  const dirs = new Set<string>()

  if (config.site.themeConfig.pagination) {
    toArray(config.site.themeConfig.pagination).forEach((item) => {
      item.dir && toArray(item.dir).forEach((item) => dirs.add(item))
    })
  }
  if (config.site.locales.length) {
    Object.values(config.site.locales).forEach((locale) => {
      if (locale.themeConfig?.pagination) {
        toArray(locale.themeConfig.pagination).forEach((item) => {
          item.dir && toArray(item.dir).forEach((item) => dirs.add(item))
        })
      }
    })
  }

  return dirs.size > 0
    ? [...dirs].map((item) => `${item}/*.md`)
    : `${config.userConfig.srcDir || '**'}/*.md`
}
