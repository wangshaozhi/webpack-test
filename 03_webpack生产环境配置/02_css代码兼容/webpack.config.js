const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 设置node环境变量
process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                // postcss-loader 默认是处理生产环境的，它是通过变量来鉴别是开发环境还是生产环境的
                /**
                 * 处理兼容性，需要通过postcss-loader和post-preset-env来同时处理
                 * post-preset-env帮助postcss找到package.json中browserslist中的配置，通过配置来加载指定的css兼容样式
                 */
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        // 这里返回的是一个数组
                        plugins: () => [require('postcss-preset-env')()]
                    }
                }
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './css/built.css'
        })
    ],
    mode: 'development'
}