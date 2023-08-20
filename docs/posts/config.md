---
title: 主题配置
descript: 如何配置博客的分页
date: 2023-08-19
image: https://picsum.photos/536/354?random=10
index: 10
tags:
  - reference
  - config
categories:
  - docs
---

主题的所有配置项

<!-- more -->

## Options

### logo

- Type: `string` | `object`

网站的 logo 图片

```ts
logo: 'https://avatars.githubusercontent.com/u/23313167?v=4',
// 或者
logo: {
  src: 'https://avatars.githubusercontent.com/u/23313167?v=4',
  alt: 'logo',
},
// 或者
logo: {
  light: 'https://avatars.githubusercontent.com/u/23313167?v=4',
  dark: 'https://avatars.githubusercontent.com/u/23313167?v=4',
  alt: 'logo',
},
```

### cover

- Type: `string` | `object`

网站的封面图片，使用方式同 logo

### nav

- Type: `array`

网站的导航栏，和 vitepress 具有相同的配置

```ts
nav: [
  { text: 'Home', link: '/' },
  { text: 'Tag', link: '/tag' },
  { text: 'Category', link: '/category' },
],
```

### socialLinks

- Type: `array`

网站的社交链接，和 vitepress 具有相同的配置

```ts
socialLinks: [
  {
    ariaLabel: 'GitHub',
    link: 'https://github.com/tolking/vitepress-theme-ououe',
    icon: 'github',
  },
],
```

### pagination

- Type: `object | array`

分页的配置，具体的使用方法请参考[分页](./pagination.md)

### excerpt

- Type: `string | boolean | function`
- default: `---`

如何分割文章的摘要

```ts
excerpt: '<!-- more -->',
```

### tag

- Type: `string`

标签的链接地址。在使用前，你需要参考[标签和分类](./tag.md)来配置 tag 的页面

```ts
tag: '/tag',
```

### category

- Type: `string`

分类的链接地址。在使用前，你需要参考[标签和分类](./tag.md)来配置 category 的页面

```ts
category: '/category',
```

### createTime

- Type: `object`

如何显示创建时间

```ts
createTime: {
  text: '创建时间',
  format: (date) => new Date(date).toLocaleDateString(),
},
```

### lastUpdated

- Type: `object`

如何显示最后更新时间

```ts
lastUpdated: {
  text: '更新时间',
  format: (date) => new Date(date).toLocaleDateString(),
},
```

### readingProgress

- Type: `boolean | 'top' | 'bottom' | 'left' | 'right'`

如何显示阅读进度条，仅在文章页面有效

### footer

- Type: `object`

页脚的显示内容

```ts
footer: {
  copyright: 'copyright © 2023',
},
```

### search

- Type: `object`

搜索的配置，具体的使用方法请参考[搜索](https://vitepress.dev/reference/default-theme-search)

```ts
search: {
  provider: 'local',
},
```

:::details 类型声明
<<< @./../src/types/theme.ts
:::
