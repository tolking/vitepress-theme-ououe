import fs from 'fs'

export default {
  paths() {
    const limit = 12 // Item count of each page
    const files = fs
      .readdirSync('docs/zh/posts')
      .filter((file) => !/^\[[^]*]\]\./.test(file))
    const total = Math.ceil(files.length / limit)

    return Array.from({ length: total }).map((_, index) => {
      const current = index + 1
      const page = current === 1 ? 'index' : `page-${current}`

      return { params: { page, current, limit } }
    })
  },
}
