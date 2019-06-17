const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

const file = process.env.VUE_APP_FILE;

const buildConf = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  productionSourceMap: false,
  outputDir: file,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('assets', resolve('src/assets'));

    return config;
  },
};

if (file === 'dist') {
  buildConf.baseUrl = '';
}

module.exports = buildConf;
