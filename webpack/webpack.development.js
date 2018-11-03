const path = require('path');

module.exports = root => ({
  output: {
    filename: 'bundle.js',
    path: path.join(root, 'dist'),
    publicPath: '/',
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.join(root, 'dist'),
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  },
});
