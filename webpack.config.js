const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'web', 'index.tsx'),
  output: {
    path: path.join(__dirname, 'dist', 'web'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx/,
        exclude: [/node_modules/, 'app.ts'],
        use: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'web', 'index.html')
    })
  ]
};
