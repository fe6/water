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
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'));

    return config;
  },
};
