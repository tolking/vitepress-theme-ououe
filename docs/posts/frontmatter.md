---
title: frontmatter
descript: How to configure the frontmatter of the blog
date: 2023-08-19
image: https://picsum.photos/536/354?random=4
index: 4
tags:
  - guide
  - frontmatter
categories:
  - docs
---

How to configure the frontmatter information of blog posts

<!-- more -->

## Usage

- A standard article's frontmatter

```md
---
title: Title of the article
descript: Description of the article
date: 2023-08-19
image: Image link (optional)
tags:
  - guide
  - frontmatter
categories:
  - docs
---
```

- Some parameters to control the interface

```md
---
createTime: false
lastUpdated: false
articlePagination: false
footer: false
readingProgress: false (`boolean | 'top' | 'bottom' | 'left' | 'right'`)
---
```

- Special attribute layout

```md
---
layout: article (`'page' | 'tag' | 'category' | 'article'`)
---
```

Refer to [Tags and Categories](./tag.md) and [Pagination](./pagination.md) for usage
