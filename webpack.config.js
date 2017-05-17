const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = [{
  entry: './src/html/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.html$/,
      loader: 'html-loader'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/html/index.html'
  })]
}];

module.exports = config;
