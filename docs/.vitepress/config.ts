import { resolve } from 'path'
import { defineConfigWithTheme } from 'vitepress'
import type { Theme } from '../../src/types'

export default defineConfigWithTheme<Theme>({
  title: 'vitepress-theme-ououe',
  outDir: '../dist',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' }],
    ['meta', { name: 'renderer', content: 'webkit' }],
    ['meta', { name: 'force-rendering', content: 'webkit' }],
    ['meta', { name: 'applicable-device', content: 'pc,mobile' }],
    ['meta', { name: 'author', content: 'tolking <w13131wang@gmail.com>' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'A blog theme based on vitepress',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Tag', link: '/tag' },
          { text: 'Category', link: '/category' },
        ],
        tag: '/tag',
        category: '/category',
        createTime: {
          text: 'Create Time',
        },
        lastUpdated: {
          text: 'Last Updated',
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      description: '为 vuepress 制作的一款主题',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '标签', link: '/zh/tag' },
          { text: '分类', link: '/zh/category' },
        ],
        tag: '/zh/tag',
        category: '/zh/category',
        createTime: {
          text: '创建时间',
        },
        lastUpdated: {
          text: '最后更新',
        },
      },
    },
  },
  themeConfig: {
    // logo: {
    //   src: 'https://avatars.githubusercontent.com/u/23313167?v=4',
    //   alt: 'logo'
    // },
    cover: {
      src: 'https://picsum.photos/1920/1080?random',
      alt: 'cover image',
    },
    socialLinks: [
      {
        ariaLabel: 'GitHub',
        link: 'https://github.com/tolking/vitepress-theme-ououe',
        icon: 'github',
      },
    ],
    pagination: {
      prev: '<-',
      next: '->',
      // match: (path) => /^\/($|index|page-)/.test(path),
      sort: (a, b) => a.index - b.index,
      // filter: (page) => page.home,
    },
    excerpt: '<!-- more -->',
    // readingProgress: 'bottom',
    footer: {
      // nav: [
      //   { text: "Home", link: "/" },
      //   { text: "GitHub", link: "https://github.com/tolking/vitepress-theme-ououe" },
      // ],
      copyright: 'tolking © 2023',
    },
    search: {
      provider: 'local',
    },
  },

  vite: {
    resolve: {
      alias: {
        '@src': resolve(__dirname, '../../src'),
      },
    },
  },
})
