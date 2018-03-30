var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public/');
var APP_DIR = path.resolve(__dirname, 'src/app/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules: [
      {
        test: /\.jsx?$/,
        include : APP_DIR,
        exclude:/(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']

        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  devServer: {
    inline:true,
    host:'localhost',
    contentBase: "./src",
    port: 9000
  }
};

module.exports = config;
