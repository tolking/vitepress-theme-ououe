---
title: 快速开始
description:
date: 2023-08-19
image: https://picsum.photos/536/354?random=1
index: 1
tags:
  - guide
categories:
  - docs
---

如何快速使用 vitepress-theme-ououe 作为你的博客主题

<!-- more -->

## 安装

由于本主题是基于 [vitepress](https://vitepress.dev/) 实现，所以你需要根据情况安装它

::: code-group

```sh [npm]
npm i vitepress vitepress-theme-ououe
```

```sh [pnpm]
pnpm add vitepress vitepress-theme-ououe
```

```sh [yarn]
yarn add vitepress vitepress-theme-ououe
```

:::

## 使用

1. 引入主题

-> .vitepress/theme/index.ts

```ts
import Theme from 'vitepress-theme-ououe'

export default Theme
```

2. 增加主题的配置文件

-> .vitepress/config.ts

```ts
import { defineConfigWithTheme } from 'vitepress'
import type { Theme } from 'vitepress-theme-ououe'

export default defineConfigWithTheme<Theme>({
  // ...
  themeConfig: {
    // config
  },
})
```

[详细的配置信息](./config.md)

## 建议目录结构

```
+- blog
  +- .vitepress
    +- theme
      +- index.ts
    +- config.ts
  +- posts
    +- one.md
    ...
  +- category.md
  +- tag.md
  +- index.md
  ...
```

其中 posts 是主要放置文章的目录
