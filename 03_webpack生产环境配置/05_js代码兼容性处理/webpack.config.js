const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: './js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            //     {
            //     test: /\.js$/,
            //     exclude: '/node_modules/',
            //     loader: 'eslint-loader',
            //     /**
            //      *  eslintConfig :{
            //         "extends":"airbnbBase"
            //     }
            //      * */
            //     options: {
            //         // 自动修复
            //         fix: true
            //     }
            // },
            {
                /**
                 * js兼容有三种处理 
                 * 1 只能处理基本的语法 babel babel-loader @babel/preset-env @babel/core
                 * 2 全部处理，但是会全局引入 babel-polyfill
                 * 3 按需引入 core-js
                 */
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    // 预设，指示loader怎么进行处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                // 按需引入
                                useBuiltIns: 'entry',
                                // 指定core-js版本
                                corejs: {
                                    version: 3
                                },
                                // 指定兼容性做到哪个版本浏览器
                                targets: {
                                    chrome: '60',
                                    firefox: '50',
                                    ie: '8',
                                    safari: '10'
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true
            }
        })
    ],
    mode: "development"
}