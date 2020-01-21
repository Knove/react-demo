const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

const path = require('path');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    js: ['babel-polyfill', './src/index.jsx'],
    // index: './src/index.js',
    framework: ['react', 'react-dom'],
  },
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.jsx', '.ts', '.tsx', '.js', '.json', '.less'],
    alias: {
      '@': resolve('../src'),
    },
  },

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
            limit: 8192,
          },
        },
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: 'font/',
          },
        },
      },
    ],
  },
  plugins: [new AntdDayjsWebpackPlugin()],
};
