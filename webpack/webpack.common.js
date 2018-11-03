const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebPackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = root => ({
  entry: path.join(root, 'src/index.js'),
  module: {
    rules: [
      {
        test: /\.png|jpg|gif$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [path.join(root, 'src')],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebPackPlugin({
      template: path.join(root, 'src/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
  ],
});
