/** @format */

const nodeExternals = require('webpack-node-externals');
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const configureWebpack = {};

configureWebpack.externals = [
  {
    vue: 'vue',
  },
  // https://github.com/pixeloven/pixeloven/issues/30
  // https://github.com/liady/webpack-node-externals/issues/39
  // Doesn't work with yarn workspaces by default
  nodeExternals(),
  nodeExternals({
    modulesDir: path.resolve(__dirname, 'node_modules'),
  }),
];

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: '',
  filenameHashing: false,
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
  },
  configureWebpack,
  chainWebpack(webpackConfig) {
    webpackConfig.resolve.alias.set('@packages', resolve('packages'));
    webpackConfig.module
      .rule('fonts')
      .use('url-loader')
      .tap((options) => Object.assign(options, { limit: 10 }));
  },
};
