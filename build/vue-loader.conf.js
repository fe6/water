var utils = require('./utils')

module.exports = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: true,
      extract: process.env.NODE_ENV === 'production'
    }),
    // Module build failed: TypeError: Cannot read property 'transforms' of null
    // 兼容 vuepress 打包时候报错
    js: "babel-loader",
  }
}
