const merge = require('webpack-merge');
const common = require('./webpack.common');
const productionConfig = require('./webpack.prod');
const developmentConfig = require('./webpack.dev');

module.exports = env => {
  const config = env === 'production' ? productionConfig : developmentConfig;
  return merge(common, config);
};
