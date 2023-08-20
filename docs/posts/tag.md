---
title: 标签和分类
descript: 如何配置博客的标签和分类
date: 2023-08-19
image: https://picsum.photos/536/354?random=2
index: 2
tags:
  - guide
  - tag
categories:
  - docs
---

如何快速显示所有文章的标签和分类数据

<!-- more -->

## 配置

由于 vitepress 目前不能够生成纯动态的页面，所以需要增加 `tag.md` `category.md` 生成对应信息

-> tag.md

```md
---
layout: tag
---
```

-> category.md

```md
---
layout: category
---
```

然后在配置中通过 [tag 和 category](./config.md#tag) 属性配置对应链接

## 使用

在文档中的 [frontmatter](./frontmatter.md) 中增加相关信息即可

```md
---
tags:
  - vitepress
  - vitepress-themt-ououe
categories:
  - blog
  - theme
---
```

或者

```md
---
tag: vitepress
category: blog
---
```
