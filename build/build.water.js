var chalk = require('chalk');
console.log(chalk.cyan('❗️  环境检测'));
require('./check-versions')();
console.log(chalk.cyan('❗️  初始化打包配置'));
var rm = require('rimraf');
var path = require('path');
var webpack = require('webpack');

var pkg = require('../package.json');
var webpackConfigDev = require('./webpack.water.dev.conf');
var webpackConfigProd = require('./webpack.water.prod.conf');

var assetsRoot = path.resolve(__dirname, '../dist');

var build = function(wpkConfig) {
  return new Promise(function (resolve, reject) {
    webpack(wpkConfig, function (err, stats) {
      if (err) {
        reject(err);
      }

      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n');

      resolve();
    })
  });
};

rm(path.join(assetsRoot), err => {
  if (err) throw err
  console.log(chalk.cyan('❗️  开始打包\n'));
  // 打包 js | css
  Promise.all([
    build(webpackConfigDev),
    build(webpackConfigProd),
  ]).then(function() {
    console.log(chalk.cyan('✅  ') + chalk.redBright.bold(pkg.name+'@'+pkg.version) + chalk.cyan('  打包完成.\n'))
  }, function() {
    throw err;
  });
})
