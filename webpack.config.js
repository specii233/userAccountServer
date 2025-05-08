const path = require('path');

module.exports = {
  mode: 'development', // 或 'production'
  entry: './script/index.js', // 你的入口文件路径
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};