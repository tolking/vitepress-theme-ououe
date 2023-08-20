---
title: 分页
descript: 如何配置博客的分页
date: 2023-08-19
image: https://picsum.photos/536/354?random=3
index: 3
tags:
  - guide
  - pagination
categories:
  - docs
---

如何启用主题的分页，显示分页数据

<!-- more -->

## 使用

1. 一个最简单的博客文章数据统计

-> index.md (or xxx.md)

```md
---
layout: page
---
```

带有 `layout: page` 将会被注入博客文章分页数据。如果仅这样使用将不会触发分页功能，所以的文章都会显示在一个页面中

2. 一个标准的分页

> [page] 可以换成其它值

::: code-group

<<< @/[page].md

<<< @/[page].paths.ts

:::

基于 vitepess 的 [dynamic-routes](https://vitepress.dev/guide/routing#dynamic-routes) 功能，可以动态生成分页界面。默认将占用 `index.md` 和 `page-[n].md` 生成分页，如果你需要修改请参考下面的[formatPage](#formatPage)配置

3. 配置多个分页

主题支持配置多个分页，在需要分页数据的地方按照上面方式配置。然后在配置中增加 [pagination](./config.md#pagination) 属性

例如：目前有两个目录 `posts` `lib` 需要分页，同时还想在首页显示筛选出来的文章

首先需要在按照 1 的方式配置 `index.md` 用来显示首页筛选出来的文章

然后在 `posts` 和 `lib` 目录下按照 2 的方式配置 `[page].md` 和 `[page].paths.ts`。注意需要将 `readdirSync('docs/posts')` 修改为当前目录

最后在配置中增加

-> .vitepress/config.ts

```ts
pagination: [
  {
    match: (path) => /^\/($|index|page-)/.test(path),
    filter: (page) => page.display === 'home', // 将匹配 frontmatter 中包含 `display: home` 的页面
  },
  {
    dir: 'posts',
    prev: '上一页',
    next: '下一页',
  },
  {
    dir: 'lib',
    prev: '上一页',
    next: '下一页',
  },
],
```

## pagination 配置

对于仅有一处分页的情况，pagination 支持传入一个对象；对于多处分页的情况，pagination 支持传入一个数组

### group

- Type: `number`
- Default: `5`

分页组件中显示的分页按钮数量

### prev

- Type: `string`
- Default: `Prev`

分页组件中上一页按钮的文本

### next

- Type: `string`
- Default: `Next`

分页组件中下一页按钮的文本

### dir

- Type: `string ｜ array`
- Default: [srcDir](https://vitepress.dev/reference/site-config#srcdir)

需要统计分页数据的目录。当你有多个目录需要分页时，最好将该值设置为目录名，否则你需要配置 `match`

### match

- Type: `function`

当你需要对多个目录进行分页时，可以通过该函数来匹配需要分页的目录。该函数接收一个参数 `path`，表示当前页面的路径。如果返回 `true` 则表示当前分页路径配置当前配置

### filter

- Type: `function`

当前分页的过滤函数

### sort

- Type: `function`

当前分页的排序函数，默认将通过 `frontmatter` 中的 `date` 字段进行排序

### formatPage

- Type: `function`

格式化分页按钮链接的函数。如果你更改了 `[page].paths.ts` 中的 page 参数名，那么你需要增加该函数用于格式化分页链接

:::details 类型声明
<<< @./../src/types/theme.ts#pagination
:::
