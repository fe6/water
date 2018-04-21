var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');

var utils = require('./utils');
var config = require('../config');
var baseWebpackConfig = require('./webpack.water.base.conf');

var env = config.build.env;

var styleLoaders = utils.styleLoaders({
  sourceMap: config.build.productionSourceMap,
  extract: true
});
var files = baseWebpackConfig.module.rules.splice(2, 3);

files.forEach((file) => {
  styleLoaders.push(file);
});

var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules:styleLoaders
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    filename: utils.outname() + '.min.js',
  },
  mode: 'production',
  optimization: {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    splitChunks: {
      minSize: 100, // 最小尺寸，默认0
      minChunks: 3, // 最小 chunk ，默认1
      maxAsyncRequests: 30, // 最大异步请求数， 默认1
      name: () => {}, // 名称，此选项课接收 function
    },
  },
  plugins: [
    new StyleLintPlugin(),
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new UglifyJSPlugin(),
  ]
})

if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
