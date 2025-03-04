---
title: Theme Configuration
descript: How to configure blog pagination
date: 2023-08-19
image: https://picsum.photos/536/354?random=10
index: 10
tags:
  - reference
  - config
categories:
  - docs
---

All configuration options for the theme

<!-- more -->

## Options

### logo

- Type: `string` | `object`

The logo image of the website

```ts
logo: 'https://avatars.githubusercontent.com/u/23313167?v=4',
// Or
logo: {
  src: 'https://avatars.githubusercontent.com/u/23313167?v=4',
  alt: 'logo',
},
// Or
logo: {
  light: 'https://avatars.githubusercontent.com/u/23313167?v=4',
  dark: 'https://avatars.githubusercontent.com/u/23313167?v=4',
  alt: 'logo',
},
```

### cover

- Type: `string` | `object`

The cover image of the website, used in the same way as the logo

### nav

- Type: `array`

The navigation bar of the website, configured the same as in vitepress

```ts
nav: [
  { text: 'Home', link: '/' },
  { text: 'Tag', link: '/tag' },
  { text: 'Category', link: '/category' },
],
```

### socialLinks

- Type: `array`

The social links of the website, configured the same as in vitepress

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

Pagination configuration, for detailed usage please refer to [Pagination](./pagination.md)

### excerpt

- Type: `string | boolean | function`
- default: `---`

How to split the article excerpt

```ts
excerpt: '<!-- more -->',
```

### tag

- Type: `string`

The link address of the tag. Before using, you need to refer to [Tags and Categories](./tag.md) to configure the tag page

```ts
tag: '/tag',
```

### category

- Type: `string`

The link address of the category. Before using, you need to refer to [Tags and Categories](./tag.md) to configure the category page

```ts
category: '/category',
```

### createTime

- Type: `object`

How to display the creation time

```ts
createTime: {
  text: 'Creation Time',
  format: (date) => new Date(date).toLocaleDateString(),
},
```

### lastUpdated

- Type: `object`

How to display the last update time

```ts
lastUpdated: {
  text: 'Last Updated',
  format: (date) => new Date(date).toLocaleDateString(),
},
```

### readingProgress

- Type: `boolean | 'top' | 'bottom' | 'left' | 'right'`

How to display the reading progress bar, only effective on article pages

### footer

- Type: `object`

The content displayed in the footer

```ts
footer: {
  copyright: 'copyright © 2023',
},
```

### search

- Type: `object`

Search configuration, for detailed usage please refer to [Search](https://vitepress.dev/reference/default-theme-search)

```ts
search: {
  provider: 'local',
},
```

:::details Type Declaration
<<< @./../src/types/theme.ts
:::
