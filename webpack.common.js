const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/js/main.js'
    },
    module: {
        rules: [
            {
              test: /\.(html)$/,
              use: ['html-loader'],
            },
            {
                test: /\.(js)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|npg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:5*1024,
                            outputPath: 'images'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};