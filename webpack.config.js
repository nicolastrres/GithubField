var webpack = require('webpack');
var path = require('path');

var webpackConfig = {
  entry: './lib/index.js',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }]
  }
};


module.exports = webpackConfig;
