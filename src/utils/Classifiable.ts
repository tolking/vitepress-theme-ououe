import type { PostsItem } from '../types/index'

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

  getAllTags(filter: (item: PostsItem) => boolean) {
    return this.toCountMap('tags', filter)
  }

  getAllCategories(filter: (item: PostsItem) => boolean) {
    return this.toCountMap('categories', filter)
  }

  getPostsByTag(tag: string, filter: (item: PostsItem) => boolean) {
    return this.tags[tag]?.filter(filter)
  }

  getPostsByCategory(category: string, filter: (item: PostsItem) => boolean) {
    return this.categories[category]?.filter(filter)
  }

  toCountMap(
    type: 'tags' | 'categories',
    filter: (item: PostsItem) => boolean,
  ) {
    const obj: Record<string, number> = {}

    for (const key in this[type]) {
      const len = this[type][key]?.filter(filter)?.length ?? 0

      if (len) {
        obj[key] = len
      }
    }

    return obj
  }
}
