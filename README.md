# vitepress-theme-ououe

> A blog theme based on vitepress

[Documentation and Demo](https://tolking.github.io/vitepress-theme-ououe)

![image](./docs/public/vitepress-theme-ououe.jpg)

## Install

```bash
npm i vitepress-theme-ououe
```

## Usage

```ts
// .vitepress/theme/index.ts
import Theme from 'vitepress-theme-ououe'

export default Theme
```

```ts
// .vitepress/config.ts
import { defineConfigWithTheme } from 'vitepress'
import type { Theme } from 'vitepress-theme-ououe'

export default defineConfigWithTheme<Theme>({
  // ...
  themeConfig: {
    // config
  },
})
```
