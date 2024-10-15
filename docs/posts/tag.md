---
title: Tags and Categories
descript: How to configure tags and categories for the blog
date: 2023-08-19
image: https://picsum.photos/536/354?random=2
index: 2
tags:
  - guide
  - tag
categories:
  - docs
---

How to quickly display tags and categories data for all articles

<!-- more -->

## Configuration

Since vitepress currently cannot generate purely dynamic pages, you need to add `tag.md` and `category.md` to generate the corresponding information

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

Then configure the corresponding links through the [tag and category](./config.md#tag) attributes in the configuration

## Usage

Add relevant information in the [frontmatter](./frontmatter.md) of the document

```md
---
tags:
  - vitepress
  - vitepress-theme-ououe
categories:
  - blog
  - theme
---
```

Or

```md
---
tag: vitepress
category: blog
---
```
