const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vendor: [
      'antd',
      'moment'
    ],
    base: [
      'react',
      'react-dom'

    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, '../public'),
    library: '[name]_library'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, '../public', '[name]-manifest.json'),
      name: '[name]_library',
      context: __dirname
    })
  ]
}
