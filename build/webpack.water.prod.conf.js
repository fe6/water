var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var StyleLintPlugin = require('stylelint-webpack-plugin');
var CompressionWebpackPlugin = require('compression-webpack-plugin');

var utils = require('./utils');
var baseWebpackConfig = require('./webpack.water.base.conf');


var webpackConfig = merge(baseWebpackConfig, {
  devtool: '#source-map',
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
    new UglifyJSPlugin(),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(js|css)$'),
      threshold: 10240,
      minRatio: 0.8
    }),
  ]
});
// 如果环境允许就打出报告
if (process.env.npm_config_report) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
