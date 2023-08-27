---
title: pwa
descript: 如何为博客增加PWA支持
date: 2023-08-27
image: https://picsum.photos/536/354?random=22
index: 22
tags:
  - pwa
categories:
  - enhance
---

为博客增加 PWA 支持

<!-- more -->

## 安装

首先需要安装 [@vite-pwa/vitepress](https://vite-pwa-org.netlify.app/frameworks/vitepress.html) 插件

::: code-group

```sh [npm]
npm i -D @vite-pwa/vitepress
```

```sh [pnpm]
pnpm add -D @vite-pwa/vitepress
```

```sh [yarn]
yarn add -D @vite-pwa/vitepress
```

:::

## 配置

-> .vitepress/config.ts

```ts
import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

export default withPwa(
  defineConfig({
    //...
    pwa: {},
  }),
)
```

然后在插槽中注入组件

-> .vitepress/theme/index.ts

```ts
import { h } from 'vue'
import Theme from 'vitepress/theme'
import RegisterSW from './components/RegisterSW.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout!, null, {
      'footer-after': () => h(RegisterSW),
    })
  },
}
```

更多细节参考 [@vite-pwa/vitepress](https://vite-pwa-org.netlify.app/frameworks/vitepress.html) 文档
