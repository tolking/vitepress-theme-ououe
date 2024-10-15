---
title: frontmatter
descript: 如何配置博客的 frontmatter
date: 2023-08-19
image: https://picsum.photos/536/354?random=4
index: 4
tags:
  - guide
  - frontmatter
categories:
  - 文档功能
---

如何配置博客文章的 frontmatter 信息

<!-- more -->

## 使用

- 一个标准文章的 frontmatter

```md
---
title: 文章的标题
descript: 文章的描述
date: 2023-08-19
image: 图片链接 (可以省略)
tags:
  - guide
  - frontmatter
categories:
  - 文档功能
---
```

- 一些控制界面的参数

```md
---
createTime: false
lastUpdated: false
articlePagination: false
footer: false
readingProgress: false (`boolean | 'top' | 'bottom' | 'left' | 'right'`)
---
```

- 特殊的属性 layout

```md
---
layout: article (`'page' | 'tag' | 'category' | 'article'`)
---
```

参考 [标签和分类](./tag.md) 和 [分页](./pagination.md) 使用
