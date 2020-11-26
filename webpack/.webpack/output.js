const path = require('path');

module.exports = {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
}