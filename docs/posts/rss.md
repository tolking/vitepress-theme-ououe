---
title: RSS Subscription
descript: How to add RSS to the blog
date: 2023-08-24
image: https://picsum.photos/536/354?random=21
index: 21
tags:
  - rss
categories:
  - enhance
---

The theme does not include RSS by default, but you can generate it with simple configuration

<!-- more -->

## Installation

First, you need to install a plugin to generate RSS, such as [feed](https://github.com/ekalinin/sitemap.js#readme)

::: code-group

```sh [npm]
npm i -D feed
```

```sh [pnpm]
pnpm add -D feed
```

```sh [yarn]
yarn add -D feed
```

:::

## Configuration

Generate RSS using the [buildEnd](https://vitepress.dev/reference/site-config#buildend) hook

The following configuration is for reference only and should be modified according to actual conditions

-> .vitepress/config.ts

```ts
import { resolve } from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import {
  createContentLoader,
  defineConfigWithTheme,
  type SiteConfig,
} from 'vitepress'
import type { Theme } from 'vitepress-theme-ououe'

export default defineConfigWithTheme<Theme>({
  // ...
  buildEnd: genRSS,
})

async function genRSS(siteConfig: SiteConfig<Theme>) {
  const baseUrl = `https://my.blog`
  const feed = new Feed({
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    id: baseUrl,
    link: baseUrl,
    language: siteConfig.site.lang,
    favicon: `${baseUrl}/favicon.ico`,
    copyright: siteConfig.site.themeConfig.footer?.copyright || '',
  })

  const posts = await createContentLoader('posts/*.md', {
    excerpt: true,
    render: true,
  }).load()

  posts
    .filter((item) => {
      return !(
        /\[[^\]]*\]\./.test(item.url) ||
        ['page', 'tag', 'category'].includes(item.frontmatter.layout)
      )
    })
    .sort((a, b) => {
      if (!b.frontmatter.date || !a.frontmatter.date) return 0
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      )
    })
    .forEach((post) => {
      feed.addItem({
        title: post.frontmatter.title || '',
        id: `${baseUrl}${post.url}`,
        link: `${baseUrl}${post.url}`,
        description: post.excerpt || post.frontmatter.description,
        content: post.html,
        image: post.frontmatter.image,
        date: new Date(post.frontmatter.date || ''),
      })
    })

  const filePath = resolve(siteConfig.outDir, 'feed.rss')

  writeFileSync(filePath, feed.rss2())
}
```
