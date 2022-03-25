const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    polyfill: 'babel-polyfill',
    main: './js/main.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 9000,
    hot: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        test: /\.js$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  }
}