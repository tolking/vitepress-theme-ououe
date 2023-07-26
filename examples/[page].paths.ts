import fs from 'fs'

export default {
  paths() {
    return fs
      .readdirSync(__dirname)
      .filter((file) => file.startsWith('['))
      .map((pkg, index) => {
        // console.log('pkg', pkg);

        // TODO: 根据当前也数据的条数生成page
        if (index) {
          return { params: { page: 'page/' + index, index, limit: 12 } }
        } else {
          return { params: { page: 'index', index, limit: 12 } }
        }
      })
  },
}
