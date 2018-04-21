var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
    filename: utils.outname() + '.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../water'),
        to: '',
        ignore: ['.*', '*.md',, '*.test.*', 'water.scss', 'water.js']
      }
    ]),
  ]
})

module.exports = webpackConfig
