var path = require('path');

var buildEnv = require('./prod.env');

var path1 = buildEnv.CDN;
path1 = path1.replace(/"/g, '');

module.exports = {
  build: {
    env: buildEnv,
    index: path.resolve(__dirname, '../out/index.html'),
    assetsRoot: path.resolve(__dirname, '../out'),
    assetsSubDirectory: 'static',
    assetsPublicPath: path1,
    productionSourceMap: true,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    cssSourceMap: true,
    proxyTable: {},
  }
}
