const {
    resolve
} = require('path')


const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')

module.exports = {
    // 入口
    entry: './src/js/index.js',
    // 出口
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    // loader 
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            useBuiltIns: 'usage',
                            corejs: {
                                version: 3
                            },
                            targets: {
                                chrome: '60',
                                firefox: '50'
                            }
                        }
                    ]
                ]
            }
        }]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 忽略哪个包，不用打包
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, './dll/mainfest.json')
        }),
        // 在html页面自动将dll的第三方库引入到html中
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, './dll/jquery.js')
        })
    ],
    //开发模式
    mode: 'development'
}