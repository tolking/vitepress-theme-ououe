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
   * The nav items.
   */
  nav?: DefaultTheme.NavItem[]
  /**
   * The social links to be displayed at the end of the nav bar. Perfect for
   * placing links to social services such as GitHub, Twitter, Facebook, etc.
   */
  socialLinks?: DefaultTheme.SocialLink[]
  /**
   * The directory where the blog is located, collecting relevant data for pagination, tag and category
   *
   * @default 'all Markdown files in `srcDir` directory'
   *
   * @example ['posts']
   * @example ['posts', 'articles']
   */
  dir?: string[]
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

interface TimeFormatOptions {
  /** Set custom time text, **required** */
  text: string
  /** Set custom time format, Default transition to local timestamp */
  format?: (date: string | number) => string
}

export type ReadingProgress = boolean | 'top' | 'bottom' | 'left' | 'right'
