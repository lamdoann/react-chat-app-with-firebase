const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

const config = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 8081,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(common, config);
