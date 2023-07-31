import type { DefaultTheme } from 'vitepress'

export interface Theme {
  /**
   * The logo of posts
   *
   * @example { src: '/public/logo.png', alt: 'logo' }
   * @example { src: 'https://avatars.githubusercontent.com/u/23313167?v=4', alt: 'logo' }
   */
  logo?: DefaultTheme.ThemeableImage
  /**
   * The cover image of pagination, tag, category pages
   *
   * @example { src: '/public/cover.png', alt: 'cover image' }
   */
  cover?: DefaultTheme.ThemeableImage
  /**
   * The nav items.
   */
  nav?: DefaultTheme.NavItem[]
  /**
   * The social links to be displayed at the end of the nav bar. Perfect for
   * placing links to social services such as GitHub, Twitter, Facebook, etc.
   */
  socialLinks?: DefaultTheme.SocialLink[]
  /**
   * Customize how to paginate posts
   *
   * Before using, you need to add some files to your directory
   *
   * ```md
   * // [page].md
   * ---
   * layout: page
   * ---
   * ```
   *
   * ```js
   * // [page].paths.ts
   * export default {
   *   paths() { ... }
   * }
   * ```
   *
   * Refer to [examples](https://github.com/tolking/vitepress-theme-ououe/blob/main/examples/%5Bpage%5D.paths.ts) for more information
   *
   * @example
   * ```ts
   * // When you only have a pagination in the root directory
   * {
   *   group: 7,
   *   // ...
   * }
   * // When you have multiple directories that require pagination
   * [
   *   {
   *     match: (path) => /^\/($|index|page-)/.test(path), // match the root directory
   *     // ...
   *   },
   *   {
   *     dir: 'posts', // match posts
   *     // ...
   *   },
   *   // ...
   * ]
   * ```
   */
  pagination?: MaybeArray<PaginationItem>
  /**
   * Link of the tag page
   *
   * Before using, you need to add a files to your directory. (eq. tag.md -> '/tag')
   *
   * ```
   * ---
   * layout: tag
   * ---
   * ```
   *
   * @example '/tag'
   */
  tag?: string
  /**
   * Link of the tag page
   *
   * Before using, you need to add a files to your directory. (eq. category.md -> '/category')
   *
   * ```
   * ---
   * layout: category
   * ---
   * ```
   *
   * @example '/category'
   */
  category?: string
  /**
   * Whether to show the create time?
   *
   * @example { text: 'Create Time', format(date) { ... }}
   */
  createTime?: TimeFormatOptions
  /**
   * Whether to show the last updated time?
   *
   * Before using, you need add `lastUpdated` options to your config
   *
   * @example { text: 'Last updated', format(date) { ... }}
   */
  lastUpdated?: TimeFormatOptions
  /**
   * Whether to show the reading progress bar?
   *
   * @default 'top'
   */
  readingProgress?: ReadingProgress
  /**
   * The footer configuration.
   */
  footer?: {
    /** The copyright message of the footer */
    copyright?: string
    /** The nav of the footer */
    nav?: DefaultTheme.NavItemWithLink[]
  }
  /**
   * Whether to enable the local search function?
   *
   * https://vitepress.dev/reference/default-theme-search#local-search
   */
  search?:
    | { provider: 'local'; options?: DefaultTheme.LocalSearchOptions }
    | { provider: 'algolia'; options: DefaultTheme.AlgoliaSearchOptions }
}

export type MaybeArray<T> = T | T[]

interface TimeFormatOptions {
  /**
   * Set custom time text
   *
   * @requires
   */
  text: string
  /** Set custom time format, Default transition to local timestamp */
  format?: (date: string | number) => string
}

export type ReadingProgress = boolean | 'top' | 'bottom' | 'left' | 'right'

export interface PostsItem {
  url: string
  title?: string
  description?: string
  excerpt?: string
  date?: string
  tags: string[]
  categories: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface PaginationItem {
  /**
   * Pagination collapses when the total page count exceeds this value
   *
   * @default 5
   */
  group?: number
  /**
   * The prev button text
   *
   * @default 'Prev'
   */
  prev?: string
  /**
   * The next button text
   *
   * @default 'Next'
   */
  next?: string
  /**
   * Directory that requires statistical pagination data. **It is best to have a unique value throughout the pagination config**
   *
   * default value: [srcDir](https://vitepress.dev/reference/site-config#srcdir)
   *
   * When your blog requires multiple pagination, you need to set dir to the current directory name
   */
  dir?: MaybeArray<string>
  /**
   * Customize how to match the path of route and current config
   *
   * If your pagination data is incorrect, you should increase it
   */
  match?: (path: string) => boolean
  /**
   * Customize how to filter the posts data
   */
  filter?: (item: PostsItem) => boolean
  /**
   * Customize how to sort the posts data
   */
  sort?: (a: PostsItem, b: PostsItem) => number
  /**
   * Custom pagination jump link data
   */
  formatPage?: (page: number) => DefaultTheme.NavItemWithLink
}

export interface PaginationParams {
  /**
   * File name for generating [dynamic-routes](https://vitepress.dev/guide/routing#dynamic-routes)
   *
   * @example n === 1 ? 'index' : `page-${n}`
   *
   * If you are not using the recommended format, you need to custom `pagination -> formatPage` match
   */
  page: string
  /**
   * Current pagination, starting from 1
   *
   * @requires
   */
  current: number
  /**
   * Item count of each page
   *
   * @requires
   */
  limit: number
}
