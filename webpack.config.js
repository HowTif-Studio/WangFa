const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname, './frontEnd/home/js/main.js'),
        about: path.resolve(__dirname, './frontEnd/about/js/main.js'),
        contact: path.resolve(__dirname, './frontEnd/contact/js/main.js'),
        product: path.resolve(__dirname, './frontEnd/product/js/main.js'),
    },
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, './src/main/resources/static'),
        // filename: 'javascript/[name].[contenthash:6].bundle.js',
        filename: 'javascript/[name].bundle.js',
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
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './frontEnd/templates/about.html'),
            filename: path.resolve(__dirname, './src/main/resources/templates/about.html'),
            inject: 'body',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './frontEnd/templates/product.html'),
            filename: path.resolve(__dirname, './src/main/resources/templates/product.html'),
            inject: 'body',
            chunks: ['product']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './frontEnd/templates/contact.html'),
            filename: path.resolve(__dirname, './src/main/resources/templates/contact.html'),
            inject: 'body',
            chunks: ['contact']
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.resolve(__dirname, './src/main/resources/templates/*'),
                '!application.properties']
        }),
        new MiniCssExtractPlugin({
            // filename: 'css/[name].[hash:6].css',
            filename: 'css/[name].css',
        })
    ]
};
