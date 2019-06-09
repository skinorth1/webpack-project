const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const chokidar = require('chokidar');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    before(app, server) {
      chokidar.watch(path.resolve(__dirname, 'index.html')).on('all', function () {
        server.sockWrite(server.sockets, 'content-changed');
      })
    },
    contentBase: './dist',
    port: 8080,
    hot: true,
    open: true
  }
});