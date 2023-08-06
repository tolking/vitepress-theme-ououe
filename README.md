# vitepress-theme-ououe [BETA]

> A blog theme based on vitepress

![demo](./examples/public/vitepress-theme-ououe.jpg)

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

## Config

[Refer to type file](./src/types.ts)
