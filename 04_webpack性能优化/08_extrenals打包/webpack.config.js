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
        })
    ],
    // 打包的时候忽略内部导入的jquery，而是通过cdn等方式引入
    externals: {
        // 'jquery': "jQuery" jQuery 和 $对等
        'jquery': "jQuery"
    },
    //开发模式
    mode: 'development'
}