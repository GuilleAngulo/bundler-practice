const path = require( 'path');

const options = (mode) => {
    console.log(mode)
    if(mode === 'development') {
        return {
            devtool: 'inline-source-map',
            devServer: {
                contentBase: path.join(__dirname, 'dist'),
                compress: true,
                open: true,
                port: 9000
            },
        }
    }
  };

module.exports = options