const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

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
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
                            outputPath: 'images',
                            name: devMode ? '[name].[ext]' : '[name].[contenthash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].style.css' : '[name].[contenthash:8].css',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
    output: {
        filename: devMode ? '[name].bundle.js' : '[name].[contenthash:8].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};