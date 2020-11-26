const path = require( 'path');

/** Track down source errors | DEVELOPMENT **/
const devtool = 'inline-source-map'

/** Webpack Dev Server | DEVELOPMENT */
const devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: 9000
}

/** Caching vendors (React) boilerplate bundle */
const optimization = {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
            },
        }
    }
}

const options = (mode) => {
    console.log(mode)
    if(mode === 'development') {
        return {
            devtool,
            devServer,
        }
    }
    if(mode === 'production') {
        return {
            optimization,
        }
    }
  };

module.exports = options