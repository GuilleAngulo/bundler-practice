const HTMLWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')

const JSRules = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
    }
}

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

module.exports = (env, { mode }) => ({
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'output.[contenthash].js'
    },
    module: {
        rules: [JSRules]
    },
    plugins: [
        ...(mode === 'production' ? productionPlugins : developmentPlugins),
        new HTMLWebpackPlugin({
            title: "Practicing Webpack",
            template: 'src/index.html'
        })
    ].filter(Boolean)
})