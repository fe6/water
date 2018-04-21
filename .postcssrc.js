// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    postcss: [
      require('postcss-initial')(),
      // 允许您今天使用未来的CSS功能（包括autoprefixer） http://cssnext.io/
      require('postcss-cssnext')(),
      // 解开嵌套 https://github.com/postcss/postcss-nested
      require('postcss-nested'),
      // 祖先选择器 https://github.com/toomuchdesign/postcss-nested-ancestors
      require('postcss-nested-ancestors'),
      // 嵌套属性 https://github.com/jedmao/postcss-nested-props
      require('postcss-nested-props'),
    ],
  }
}
