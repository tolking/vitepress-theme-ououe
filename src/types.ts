export interface Theme {
  /**
   * The logo of posts
   *
   * @example '/public/logo.png'
   * @example 'https://avatars.githubusercontent.com/u/23313167?v=4'
   */
  logo?: string
  /**
   * The cover image of pagination, tag, category pages
   *
   * @example '/public/cover.png'
   */
  cover?: string
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
}
