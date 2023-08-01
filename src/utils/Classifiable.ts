import type { PostsItem } from '../types'

export class Classifiable {
  public tags: Record<string, PostsItem[] | undefined>
  public categories: Record<string, PostsItem[] | undefined>

  constructor(data: PostsItem[]) {
    const _tags: Record<string, PostsItem[] | undefined> = {}
    const _categories: Record<string, PostsItem[] | undefined> = {}

    data.forEach((item) => {
      item.tags.length &&
        item.tags.forEach((tag) => {
          _tags[tag] = [...(_tags[tag] || []), item]
        })
      item.categories.length &&
        item.categories.forEach((category) => {
          _categories[category] = [...(_categories[category] || []), item]
        })
    })

    this.tags = _tags
    this.categories = _categories
  }

  get allTags() {
    return this.toCountMap('tags')
  }

  get allCategories() {
    return this.toCountMap('categories')
  }

  getPostsByTag(tag: string) {
    return this.tags[tag]
  }

  getPostsByCategory(category: string) {
    return this.categories[category]
  }

  toCountMap(type: 'tags' | 'categories') {
    const obj: Record<string, number> = {}

    for (const key in this[type]) {
      const len = this[type][key]?.length
      obj[key] = len || 0
    }

    return obj
  }
}
