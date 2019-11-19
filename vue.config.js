const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const file = process.env.VUE_APP_FILE;

const buildConf = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  productionSourceMap: false,
  outputDir: file,
  configureWebpack: (config) => {
    // 自动修复语法错误
    Object.assign(
      config.module.rules[config.module.rules.length - 3].use[0].options,
      {
        fix: true,
      }
    );
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('assets', resolve('src/assets'));

    // 解决 wc-async 打包之后引入路径问题
    if (file === 'dist') {
      config.resolve.alias.set('~root', resolve(file));
    }

    config.plugin('StyleLintPlugin').use(StyleLintPlugin, [
      {
        fix: true,
      },
    ]);

    return config;
  },
};

if (file === 'site') {
  buildConf.publicPath = process.env.VUE_APP_CDN;
}

module.exports = buildConf;
