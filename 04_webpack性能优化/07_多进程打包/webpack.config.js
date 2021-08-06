const {
    resolve
} = require('path')


const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        rules: [
            /**
             * thread-loader 会对后面的loader开启多进程打包
             * 进程启动事件大概为600ms,并且进程通信也有开销（启动的开销比较昂贵，不要滥用）
             * 只有工作消耗时间长的，才需要多线程打包
             * thread-loader必须是最后执行，loader的执行顺序是从上到下，从右到左。
             */
            // {
            //     test: /\.js$/,
            //     loader: 'thread-loader',
            //     options: {
            //         worker: 2
            //     }
            // },
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
        })
    ],
    //开发模式
    mode: 'development'
}