---
title: 插槽
descript: 如何扩展主题
date: 2023-08-19
image: https://picsum.photos/536/354?random=11
index: 11
tags:
  - reference
  - slots
categories:
  - docs
---

通过内部提供的插槽可以很轻松的扩展主题界面

<!-- more -->

## 使用

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

## 全部插槽

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

:::details 类型声明
<<< @./../src/types/slots.ts
:::
