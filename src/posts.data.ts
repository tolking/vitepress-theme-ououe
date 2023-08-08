import { createContentLoader } from 'vitepress'
import { toArray } from './utils/index'
import type { SiteConfig } from 'vitepress'
import type { Theme, PostsItem } from './types/theme'

declare const data: PostsItem[]
export { data }

type GlobalThis = typeof globalThis & { VITEPRESS_CONFIG: SiteConfig<Theme> }

const config = (globalThis as GlobalThis).VITEPRESS_CONFIG
const themeConfig = config.site.themeConfig
const pagination = themeConfig.pagination && toArray(themeConfig.pagination)
const postsDir = pagination?.reduce((all, item) => {
  if (Array.isArray(item.dir)) {
    all = all.concat(item.dir)
  } else if (item.dir) {
    all.push(item.dir)
  }
  return all
}, [] as string[])
const pattern = postsDir?.length
  ? postsDir.map((item) => `${item}/*.md`)
  : `${config.userConfig.srcDir || '**'}/*.md`

export default createContentLoader(pattern, {
  excerpt: themeConfig.excerpt ?? true,
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
