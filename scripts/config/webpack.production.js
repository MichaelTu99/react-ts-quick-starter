const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const glob = require('glob');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const { resolve } = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');
const { PROJECT_PATH } = require('../constants');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  // devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, {
        nodir: true,
      }),
      whitelist: ['html', 'body'],
    }),
    new webpack.BannerPlugin({
      raw: true,
      banner:
        '/** @preserve Powered by react-ts-quick-starter (https://github.com/MichaelTu99/react-ts-quick-starter) */',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'server', // 开一个本地服务查看报告
      analyzerHost: '127.0.0.1', // host 设置
      analyzerPort: 8888, // 端口号设置
    }),
  ],
});
