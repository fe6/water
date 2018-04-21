var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var StyleLintPlugin = require('stylelint-webpack-plugin');

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
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  mode: 'production',
  optimization: {
    removeAvailableModules: true,
    removeEmptyChunks: true,
    mergeDuplicateChunks: true,
    splitChunks: {
      chunks: 'async', // 必须三选一： 'initial' | 'all'(默认就是all) | 'async'
      minSize: 100, // 最小尺寸，默认0
      minChunks: 3, // 最小 chunk ，默认1
      maxAsyncRequests: 30, // 最大异步请求数， 默认1
      name: () => {}, // 名称，此选项课接收 function
      cacheGroups: { // 这里开始设置缓存的 chunks
        priority: '0', // 缓存组优先级 false | object |
        vendor: { // key 为entry中定义的 入口名称
          chunks: 'async', // 必须三选一： 'initial' | 'all' | 'async'(默认就是异步)
          test: /vue|em-fe|em-jsonp|em-cookie|emfe|react|lodash/, // 正则规则验证，如果符合就提取 chunk
          name: 'vendor', // 要缓存的 分隔出来的 chunk 名称
          minSize: 100,
          minChunks: 3,
          enforce: true,
          maxAsyncRequests: 30, // 最大异步请求数， 默认1
          reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值） } }
        },
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'async'
        },
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'async',
          enforce: true
        }
      },
    },
  },
  plugins: [
    new StyleLintPlugin(),
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    // 提取
    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css'),
      chunkFilename: utils.assetsPath('css/[id].[contenthash].css')
    })
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
