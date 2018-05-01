const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: __dirname + '/src/js/app.js',
  output: {
    path: __dirname + '/www/js',
    publicPath: '/www/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.join(__dirname, "src/js"),
      "node_modules",
    ],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
        }),
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '../assets/css/style.css',
      allChunks: true,
    }),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      CSSModules: 'react-css-modules',
    }),
  ]
}
