const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3001,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@userSlice': path.resolve(
                __dirname,
                'src/store/slices/userSlice.ts'
            ),
            '@viewsSlice': path.resolve(
                __dirname,
                'src/store/slices/viewsSlice.ts'
            ),
            '@gameSlice': path.resolve(
                __dirname,
                'src/store/slices/gameSlice.ts'
            ),
            '@sharedTypes': path.resolve(__dirname, 'src/sharedTypes'),
            '@constants': path.resolve(__dirname, 'src/utils/constants'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/assets/favicon.svg',
        }),
        new MiniCssExtractPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
    },
};
