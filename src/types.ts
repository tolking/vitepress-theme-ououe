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
   * Whether you need the statistics of the label data?
   *
   * @default true
   */
  tag?: boolean
  /**
   * Whether you need the statistics of the category data?
   *
   * @default true
   */
  category?: boolean
  /**
   * The footer configuration.
   */
  footer?: DefaultTheme.Footer
  /**
   * Whether to enable the local search function?
   *
   * https://vitepress.dev/reference/default-theme-search#local-search
   */
  search?:
    | { provider: 'local'; options?: DefaultTheme.LocalSearchOptions }
    | { provider: 'algolia'; options: DefaultTheme.AlgoliaSearchOptions }
}
