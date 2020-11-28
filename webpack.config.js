const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  devtool: 'eval-cheap-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@data': path.resolve(__dirname, 'src/data/'),
    },
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    open: true,
  },
};
