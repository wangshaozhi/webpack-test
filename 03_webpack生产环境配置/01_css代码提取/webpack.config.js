const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: './js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // 以link形式引入css文件
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './build/css/built.css'
        })
    ],
    mode: 'development'
}