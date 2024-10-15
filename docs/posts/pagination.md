---
title: Pagination
descript: How to configure blog pagination
date: 2023-08-19
image: https://picsum.photos/536/354?random=3
index: 3
tags:
  - guide
  - pagination
categories:
  - docs
---

How to enable pagination for the theme and display pagination data

<!-- more -->

## Usage

1. A simple blog post data statistic

-> index.md (or xxx.md)

```md
---
layout: page
---
```

With `layout: page`, blog post pagination data will be injected. If used alone, it will not trigger pagination functionality, and all posts will be displayed on one page.

2. A standard pagination

> [page] can be replaced with other values
