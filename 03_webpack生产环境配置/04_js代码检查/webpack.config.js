// 添加path包，使用绝对路径
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
        rules: [{
            /**
             * eslint-loader 开启es代码检查 需要下载eslint和eslint-loader包
             * 要检查的是自己写的代码，不包括从网络下载的node_modules中的代码
             * 检查规则在package.json中eslintConfig中进行配置
             * 需要导入eslint-config-airbnb-base eslint-plugin-import相关包
             */
            test: /\.js$/,
            exclude: '/node_modules/',
            loader: 'eslint-loader',
            options: {
                //自动修复
                fix: true
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}