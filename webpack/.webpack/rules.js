const javascript = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
    }
}

const css = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
}

const image = {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
}

const font = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
}

module.exports = [javascript, css, image, font]
