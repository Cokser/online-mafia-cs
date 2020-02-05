import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import paths from './paths';
import path from "path";

module.exports = {
    entry: paths.entryPath,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: paths.nodeModules,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: paths.nodeModules,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)$/,
                exclude: paths.nodeModules,
                loader: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: paths.nodeModules,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
            {
                test: /\.(s*)css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.scss', '.css']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        })
    ]
};