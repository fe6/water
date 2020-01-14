/** @format */

const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

function resolve(dir) {
  return path.join(__dirname, dir);
}

const buildConf = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  productionSourceMap: false,
  outputDir: 'dist',
  transpileDependencies: [/@fe6/],
  configureWebpack: (config) => {
    // 自动修复语法错误
    Object.assign(
      config.module.rules[config.module.rules.length - 3].use[0].options,
      {
        fix: true,
      },
    );
    // 优化体积
    if (isProduction) {
      config.externals = {
        lodash: 'lodash',
        moment: 'moment',
        vue: 'Vue',
      };
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('assets', resolve('src/assets'));

    config.plugin('StyleLintPlugin').use(StyleLintPlugin, [
      {
        fix: true,
      },
    ]);

    return config;
  },
};

module.exports = buildConf;
