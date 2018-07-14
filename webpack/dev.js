const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./common.js');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.join(__dirname, '../dev'),
    filename: 'bundle.js'
  }
})