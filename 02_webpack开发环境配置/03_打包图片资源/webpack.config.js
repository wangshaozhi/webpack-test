const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg)/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8 * 1024,
                        /**
                         * html-loader使用commonjs语法，url-loader是es6模块化语法
                         * 保持统一，所以使用把es6模块给关了 使用commonjs模块语法
                         */
                        esModule: false,
                        // hash值保留8位，使用之前的扩展名
                        name: '[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}