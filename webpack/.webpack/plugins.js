const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CompressionPlugin = require('compression-webpack-plugin')

const developmentPlugins = []

const productionPlugins = [
    //Gzip
    new CompressionPlugin(),
    //Brotli
    new CompressionPlugin({
        filename: "[path][base].br",
        algorithm: "brotliCompress",
    }),
]

const commonPlugins = [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HTMLWebpackPlugin({
        title: "Practicing Webpack",
        template: 'src/index.html'
    }),
]

const plugins = (mode) => {
    return [
        ...(mode === 'production' ? productionPlugins : developmentPlugins),
        ...commonPlugins
    ].filter(Boolean)
  };

module.exports = plugins