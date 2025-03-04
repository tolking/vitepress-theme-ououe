---
title: Quick Start
description:
date: 2023-08-19
image: https://picsum.photos/536/354?random=1
index: 1
tags:
  - guide
categories:
  - docs
---

How to quickly use vitepress-theme-ououe as your blog theme

<!-- more -->

## Installation

Since this theme is based on [vitepress](https://vitepress.dev/), you need to install it accordingly

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

## Usage

1. Import the theme

-> .vitepress/theme/index.ts

```ts
import Theme from 'vitepress-theme-ououe'

export default Theme
```

2. Add the theme configuration file

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

[Detailed configuration information](./config.md)

## Recommended Directory Structure

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

Among them, posts is the directory mainly for placing articles
