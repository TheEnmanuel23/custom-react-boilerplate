const merge = require('webpack-merge');
const common = require('./webpack/webpack.common.js');

const config = env => require(`./webpack/webpack.${env}.js`)(__dirname);

module.exports = env => merge(common(__dirname), config(env));
