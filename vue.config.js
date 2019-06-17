const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  productionSourceMap: false,
  outputDir: process.env.VUE_APP_FILE,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'));

    return config;
  },
};
