var chalk = require('chalk');
console.log(chalk.cyan('❗️  环境检测'));
require('./check-versions')();
console.log(chalk.cyan('❗️  初始化打包配置'));
var rm = require('rimraf');
var path = require('path');
var webpack = require('webpack');

var config = require('../config');
var webpackConfig = require('./webpack.prod.conf');
var assetsRoot = config.build.assetsRoot;
var assetsSubDirectory = config.build.assetsSubDirectory;

rm(path.join(assetsRoot, assetsSubDirectory), err => {
  if (err) throw err;
  console.log(chalk.cyan('❗️  开始打包\n'));
  webpack(webpackConfig, function (err, stats) {
    if (err) throw err;
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('✅  打包完成.\n'));
    console.log(chalk.yellow(
      '❗️  提示：构建的文件旨在通过HTTP服务器提供。直接打开文件访问也许不会工作哟。\n'
    ));
  });
});
