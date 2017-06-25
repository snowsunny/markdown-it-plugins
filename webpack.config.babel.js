import path from 'path'

import webpack from 'webpack'

module.exports = {
  entry: {
    'bundle': './index.js',
  },
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist'),
    library: 'MarkdownItPlugins',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
  watch: true
}
