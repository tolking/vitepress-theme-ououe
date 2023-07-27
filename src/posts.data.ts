import { createContentLoader } from 'vitepress'
import type { SiteConfig, ContentData } from 'vitepress'
import type { Theme } from './types'

declare const data: ContentData[]
export { data }

type GlobalThis = typeof globalThis & { VITEPRESS_CONFIG: SiteConfig<Theme> }

const config = (globalThis as GlobalThis).VITEPRESS_CONFIG
const themeConfig = config.site.themeConfig
const pattern = themeConfig.dir?.length
  ? themeConfig.dir.map((item) => `${item}/*.md`)
  : `${config.userConfig.srcDir || '**'}/*.md`

export default createContentLoader(pattern, {
  // TODO: 统计posts数据，用于生成page页面和本地搜索
  // includeSrc: true, // include raw markdown source?
  render: true, // include rendered full page HTML?
  excerpt: true, // include excerpt?
  // transform(raw): ContentData[] {}
})
