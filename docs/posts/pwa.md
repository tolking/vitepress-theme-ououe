---
title: pwa
descript: How to add PWA support to the blog
date: 2023-08-27
image: https://picsum.photos/536/354?random=22
index: 22
tags:
  - pwa
categories:
  - enhance
---

Add PWA support to the blog

<!-- more -->

## Installation

First, you need to install the [@vite-pwa/vitepress](https://vite-pwa-org.netlify.app/frameworks/vitepress.html) plugin

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

## Configuration

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

Then inject the component into the slot

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

For more details, refer to the [@vite-pwa/vitepress](https://vite-pwa-org.netlify.app/frameworks/vitepress.html) documentation
