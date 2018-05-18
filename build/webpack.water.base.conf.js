var path = require('path');
var chalk = require('chalk');
var webpack = require('webpack');
// 百分比进度
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

var utils = require('./utils');
var vueLoaderConfig = require('./vue-loader.conf');
// 公共的 banner
var banner = require( './banner' )();

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  cache: true,
  entry: `./${utils.outname()}/water.js`,
  mode: 'development',
  output: {
    publicPath: '/dist/',
    library: utils.outname(),
  },
  resolve: {
    extensions: ['.js', '.md', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  performance: {
    hints: false
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint',
        enforce: 'pre',
        options: {
          cache: true,
          fix: true,
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel?cacheDirectory',
        exclude: [resolve('node_modules')],
      },
      ...utils.styleLoaders({
        sourceMap: true,
        extract: true
      }),
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  plugins: [
    new ProgressBarPlugin({
      format: '📦  '+ chalk.blue('构建进度:') + ' '+ chalk.redBright.bold('[:bar]') + ' ' + chalk.magentaBright.bold(':percent') + ' ' + chalk.magentaBright.bold(':elapsed seconds'),
    }),
    // 注入内容
    new webpack.BannerPlugin( banner )
  ]
}
