import { createContentLoader } from 'vitepress'
import type { SiteConfig, ContentData } from 'vitepress'
import type { Theme } from './types'

declare const data: ContentData[]
export { data }

const config: SiteConfig<Theme> = (globalThis as any).VITEPRESS_CONFIG
const themeConfig = config.userConfig.themeConfig
let pattern = themeConfig.dir.length
  ? themeConfig.dir.map(item => `${item}/*.md`)
  : `${config.userConfig.srcDir || '**'}/*.md`

export default createContentLoader(pattern, {
  // TODO: 统计posts数据，用于生成page页面和本地搜索
  // includeSrc: true, // include raw markdown source?
  render: true,     // include rendered full page HTML?
  // excerpt: true,    // include excerpt?
  // transform(raw): ContentData[] {}
})
