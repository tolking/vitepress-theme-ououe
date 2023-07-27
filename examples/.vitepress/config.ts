import { resolve } from "path";
import { defineConfigWithTheme } from "vitepress";
import type { Theme } from "../../src/types";

export default defineConfigWithTheme<Theme>({
  title: "My Site",
  description: "This is my site",
  // srcDir: 'posts',
  // base: '/base/',
  cleanUrls: true,

  themeConfig: {
    cover: "https://picsum.photos/1920/1080?random",
    dir: ["posts"],
  },

  vite: {
    resolve: {
      alias: {
        "@src": resolve(__dirname, "../../src"),
      },
    },
  },
});
