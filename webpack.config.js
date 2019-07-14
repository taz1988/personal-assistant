const path                   = require('path');
const webpack                = require('webpack');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const miniCssExtractPlugin   = require('mini-css-extract-plugin');
const sourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({});

const isProduction = process.env.NODE_ENV === 'production';

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/html/index.html",
  filename: "./index.html"
});


module.exports = {
  entry:  path.resolve(__dirname, 'src/js/App.js'),
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "app.js"
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
         test: /\.less$/,
         use: [
             'style-loader',
             'css-loader',
             'less-loader'
         ]
     },
     {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    }
   ]
  },
  plugins: isProduction ? [new miniCssExtractPlugin(), htmlWebpackPlugin, sourceMapDevToolPlugin] : [htmlWebpackPlugin, sourceMapDevToolPlugin]
};
