const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        // 文件名称 目录+文件名称
        filename: 'js/[name].js',
        // 打包
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 开发模式
    mode: 'development',
    // 解析模块配置
    resolve: {
        // 配置解析的别名，根据别名去查找
        alias: {
            '$css': resolve(__dirname, 'src/css')
        },
        // 在导入模块的时候 可以省略扩展名称
        extensions: ['.js', '.vue', '.css'],
        // 在哪里去找node_modules
        modules: [resolve(__dirname, '../../node_modules'), 'node_modules']
    }
}