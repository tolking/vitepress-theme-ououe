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

1. A simple blog post data statistics

-> index.md (or xxx.md)

```md
---
layout: page
---
```

Pages with `layout: page` will be injected with blog post pagination data. If used only this way, pagination functionality will not be triggered, and all posts will be displayed on a single page.

2. A standard pagination

> [page] can be replaced with other values

::: code-group

<<< @/[page].md

<<< @/[page].paths.ts

:::

Based on VitePress's [dynamic-routes](https://vitepress.dev/guide/routing#dynamic-routes) feature, pagination interfaces can be dynamically generated. By default, it will use `index.md` and `page-[n].md` to generate pagination. If you need to modify this, please refer to the [formatPage](#formatPage) configuration below.

3. Configure multiple paginations

The theme supports configuring multiple paginations. Configure pagination data where needed using the above method, then add the [pagination](./config.md#pagination) property in the configuration.

Example: Currently there are two directories `posts` and `lib` that need pagination, and you also want to display filtered articles on the homepage.

First, configure `index.md` according to method 1 to display filtered articles on the homepage.

Then configure `[page].md` and `[page].paths.ts` in the `posts` and `lib` directories according to method 2. Note that you need to change `readdirSync('docs/posts')` to the current directory.

Finally, add the following to the configuration:

-> .vitepress/config.ts

```ts
pagination: [
  {
    match: (path) => /^\/($|index|page-)/.test(path),
    filter: (page) => page.display === 'home', // Will match pages containing `display: home` in frontmatter
  },
  {
    dir: 'posts',
    prev: 'Previous',
    next: 'Next',
  },
  {
    dir: 'lib',
    prev: 'Previous',
    next: 'Next',
  },
],
```

## pagination Configuration

For cases with only one pagination, pagination supports passing an object; for cases with multiple paginations, pagination supports passing an array.

### group

- Type: `number`
- Default: `5`

The number of pagination buttons displayed in the pagination component.

### prev

- Type: `string`
- Default: `Prev`

The text for the previous page button in the pagination component.

### next

- Type: `string`
- Default: `Next`

The text for the next page button in the pagination component.

### dir

- Type: `string ｜ array`
- Default: [srcDir](https://vitepress.dev/reference/site-config#srcdir)

The directory for collecting pagination data. When you have multiple directories that need pagination, it's best to set this value to the directory name, otherwise you need to configure `match`.

### match

- Type: `function`

When you need pagination for multiple directories, you can use this function to match the directories that need pagination. This function receives a parameter `path`, representing the current page's path. If it returns `true`, it means the current pagination path matches the current configuration.

### filter

- Type: `function`

The filter function for the current pagination.

### sort

- Type: `function`

The sort function for the current pagination. By default, it will sort by the `date` field in the `frontmatter`.

### formatPage

- Type: `function`

A function to format pagination button links. If you change the page parameter name in `[page].paths.ts`, you need to add this function to format pagination links.

:::details Type Declaration
<<< @./../src/types/theme.ts#pagination
:::
