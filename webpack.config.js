var webpack = require("webpack");
var path = require('path');

module.exports = {

  // If you set either:
  // production - convert to optimised edition
  // development - convert with generating JS file with Activating sourcemap
  // mode: 'production',

  // entry point - where is the file which do you wanna convert?
  entry: {
    app: './src/App.js',
  },
  // then, convert file from jsx to compatible scripts in any browsers
  output: {
    // "bundle" is for transpiling:
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
  },
  devtool: '#source-map',

  module: {
    rules: [
      {
        // in case of .jsx - for react
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        // To declare using Babel 
        loader: 'babel-loader',
        // Specify options of Babel のオプションを指定する
        options: {
          presets: [
            // Conver from ES2018 to ES5 by specifying presets
            '@babel/preset-env',
            // To identify JSX in React
            '@babel/react'
          ]
        }
      }
    ]
  }
};
