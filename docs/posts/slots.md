---
title: Slots
descript: How to extend the theme
date: 2023-08-19
image: https://picsum.photos/536/354?random=11
index: 11
tags:
  - reference
  - slots
categories:
  - docs
---

You can easily extend the theme interface through the provided slots

<!-- more -->

## Usage

-> .vitepress/theme/index.ts

```ts
import { h } from 'vue'
import Theme from 'vitepress-theme-ououe'
import PwaPopup from '../components/PwaPopup.vue'
import './index.css'

export default {
  Layout() {
    return h(Theme.Layout!, null, {
      'footer-after': () => h(PwaPopup),
    })
  },
}
```

## All Slots

- header-before
- header-left
- header-logo-after
- header-search-before
- header-right
- header-after
- not-found-top
- not-found-bottom
- page-top
- page-pagination-before
- page-bottom
- article-item-top
- article-item-bottom
- tag-top
- tag-after
- tag-bottom
- tag-item
- article-top
- article-content-before
- article-content-after
- article-pagination-before
- article-bottom
- article-item-top
- article-item-bottom
- footer-before
- footer-after

:::details Type Declaration
<<< @./../src/types/slots.ts
:::
