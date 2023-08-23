---
title: 配置站点地图
descript: 如何为博客增加站点地图
date: 2023-08-23
image: https://picsum.photos/536/354?random=20
index: 20
tags:
  - sitemap
categories:
  - enhance
---

主题默认是不包含站点地图的，但你可以通过简单的配置来生成它

<!-- more -->

## 安装

首先需要安装生成站点地图的插件，如 [sitemap](https://github.com/ekalinin/sitemap.js#readme)

::: code-group

```sh [npm]
npm i -D sitemap
```

```sh [pnpm]
pnpm add -D sitemap
```

```sh [yarn]
yarn add -D sitemap
```

:::

## 配置

通过 [buildEnd](https://vitepress.dev/reference/site-config#buildend) 钩子来生成站点地图

-> .vitepress/config.ts

```ts
import { resolve } from 'path'
import { writeFileSync } from 'fs'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineConfig } from 'vitepress'
import type { SiteConfig } from 'vitepress'

export default defineConfig({
  // ...
  buildEnd: genSitemap,
})

function genSitemap(siteConfig: SiteConfig) {
  const stream = new SitemapStream({ hostname: 'https://my.blog' })

  siteConfig.pages.forEach((url) => {
    stream.write({
      url: url.replace(/\.md$/, ''),
      // ...
    })
  })

  stream.end()
  streamToPromise(stream).then((data) => {
    const filePath = resolve(siteConfig.outDir, 'sitemap.xml')

    writeFileSync(filePath, data.toString())
  })
}
```
