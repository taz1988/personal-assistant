require('dotenv').config()
const path                   = require('path');
const webpack                = require('webpack');
const HtmlWebpackPlugin      = require('html-webpack-plugin');
const miniCssExtractPlugin   = require('mini-css-extract-plugin');
const sourceMapDevToolPlugin = new webpack.SourceMapDevToolPlugin({});
const  definePlugin = new webpack.DefinePlugin({
    OPEN_WEATHER_MAP_API_KEY: JSON.stringify(process.env.OPEN_WEATHER_MAP_API_KEY)
});

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
    "login" : path.resolve(__dirname, 'src/js/MainLogin.js')
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
           test: /\.(png|jp(e*)g|svg)$/,
           use: [{
               loader: 'url-loader',
               options: {
                   limit: 8000000,
                   name: 'images/[hash]-[name].[ext]'
               }
           }]
       }
   ]
  },
  plugins:[definePlugin, htmlWebpackPlugin, htmlLoginWebpackPlugin, new HtmlWebpackInlineSourcePlugin(), sourceMapDevToolPlugin]
};
