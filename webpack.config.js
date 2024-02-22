const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        header: path.resolve(__dirname, './frontEnd/header/js/main.js'),
        footer: path.resolve(__dirname, './frontEnd/footer/js/main.js'),
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, './src/main/resources/static'),
        filename: 'javascript/[name].[contenthash:6].bundle.js',
        assetModuleFilename: 'images/[hash][ext]',
    },
    module: {
        rules:[
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './frontEnd/templates/home.html'),
            filename: path.resolve(__dirname, './src/main/resources/templates/home.html'),
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './frontEnd/templates/product.html'),
            filename: path.resolve(__dirname, './src/main/resources/templates/product.html'),
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './frontEnd/templates/contact.html'),
            filename: path.resolve(__dirname, './src/main/resources/templates/contact.html'),
            inject: 'body',
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.resolve(__dirname, './src/main/resources/templates/*'),
                '!application.properties']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:6].css',
        })
    ]
};
