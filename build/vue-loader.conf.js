var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
      extract: isProduction
    }),
    // Module build failed: TypeError: Cannot read property 'transforms' of null
    // 兼容 vuepress 打包时候报错
    js: "babel-loader",
  }
}
