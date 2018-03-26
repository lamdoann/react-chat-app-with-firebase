const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

const config = {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true,
    }),
  ],
};

module.exports = merge(common, config);
