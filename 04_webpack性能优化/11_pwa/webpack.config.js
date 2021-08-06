const {
    resolve
} = require('path')


const HtmlWebpackPlugin = require('html-webpack-plugin')

const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

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
                loader: 'thread-loader',
                options: {
                    worker: 2
                }
            },
            {
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
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        /**
         * sw 代码必须运行在服务器
         */
        new WorkboxWebpackPlugin.GenerateSW({
            /**
             *  1 帮助serviceworker快速启动
             *  2 删除旧的serviceworker
             */
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    //开发模式
    mode: 'development'
}