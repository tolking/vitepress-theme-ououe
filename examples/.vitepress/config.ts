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
    // logo: {
    //   src: 'https://avatars.githubusercontent.com/u/23313167?v=4',
    //   alt: 'logo'
    // },
    // cover: "https://picsum.photos/1920/1080?random",
    dir: ["posts"],

    nav: [
      { text: "Home", link: "/" },
      { text: "Tag", link: "/tag" },
      { text: "Category", link: "/category" },
    ],
    socialLinks: [
      {
        ariaLabel: "GitHub",
        link: "https://github.com/tolking/vitepress-theme-ououe",
        icon: "github",
      },
    ],
    footer: {
      // nav: [
      //   { text: "Home", link: "/" },
      //   { text: "GitHub", link: "https://github.com/tolking/vitepress-theme-ououe" },
      // ],
      copyright: "copyright © 2023",
    },
    search: {
      provider: "local",
    },
  },

  vite: {
    resolve: {
      alias: {
        "@src": resolve(__dirname, "../../src"),
      },
    },
  },
});
