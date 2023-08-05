---
title: posts a
date: 2023-07-1
image: https://picsum.photos/536/354?random&date=2023-07-1
tags:
  - vitepress
  - posts
categories:
  - summary
---

This is posts a.

---

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

:tada: :100:

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to view the code

```js
console.log("Hello, VitePress!");
```

:::

```js
export default {
  name: "MyComponent",
  // ...
};
```

```js
export default {
  data() {
    return {
      msg: "Focused!", // [!code  focus]
    };
  },
};
```

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
};

export default config;
```

```ts [config.ts]
import type { UserConfig } from "vitepress";

const config: UserConfig = {
  // ...
};

export default config;
```

:::

[to posts b](/posts/b)
