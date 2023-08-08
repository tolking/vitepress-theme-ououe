/* eslint-disable @typescript-eslint/no-explicit-any */
import { PostsItem } from './index'

type Frontmatter = Record<string, any>

export interface ArticleListSlots {
  'article-item-top'?: (props: { item: PostsItem }) => any
  'article-item-bottom'?: (props: { item: PostsItem }) => any
}

export interface TagListSlots {
  'tag-item'?: (props: { tag: string; count: number }) => any
}

export interface HeaderSlots {
  'header-left'?: () => any
  'header-logo-after'?: () => any
  'header-search-before'?: () => any
  'header-right'?: () => any
}

export interface ArticleSlots extends ArticleListSlots {
  'article-top'?: (props: { frontmatter: Frontmatter }) => any
  'article-content-before'?: (props: { frontmatter: Frontmatter }) => any
  'article-content-after'?: (props: { frontmatter: Frontmatter }) => any
  'article-pagination-before'?: (props: { frontmatter: Frontmatter }) => any
  'article-bottom'?: (props: { frontmatter: Frontmatter }) => any
}

export interface PageSlots extends ArticleListSlots {
  'page-top'?: () => any
  'page-pagination-before'?: () => any
  'page-bottom'?: () => any
}

export interface TagSlots extends TagListSlots {
  'tag-top'?: () => any
  'tag-after'?: () => any
  'tag-bottom'?: () => any
}

export interface LayoutsSlots
  extends ArticleSlots,
    PageSlots,
    TagSlots,
    HeaderSlots {
  'header-before'?: () => any
  'header-after'?: () => any
  'footer-before'?: () => any
  'footer-after'?: () => any
}
