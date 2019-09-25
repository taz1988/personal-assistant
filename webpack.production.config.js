const path                   = require('path');
const webpack                = require('webpack');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const miniCssExtractPlugin   = require('mini-css-extract-plugin');
const sourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({});

const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/html/index.html",
  filename: "./index.html",
  inlineSource: 'app.js',
  chunks: ['app']
});

const htmlLoginWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/html/index.html",
  filename: "./login.html",
  inlineSource: 'login.js',
  chunks: ['login']
});


module.exports = {
  entry:  {
    "app" : path.resolve(__dirname, 'src/js/Main.js'),
    "login" : path.resolve(__dirname, 'src/js/Login.js')
  },
  output: {
    path: path.resolve(__dirname, "build/")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
         test: /\.scss$/,
         use: [
             'style-loader',
             'css-loader',
             'sass-loader'
         ]
     },
     {
        test: /\.sass/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    },
     {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
   ]
  },
  plugins:[htmlWebpackPlugin, htmlLoginWebpackPlugin, new HtmlWebpackInlineSourcePlugin(), sourceMapDevToolPlugin]
};
