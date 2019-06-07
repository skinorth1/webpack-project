const path = require('path');

const config = {
    entry: {
        main: './src/js/main.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist/js'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};

module.exports = config;