const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
/**
 * entry 有三种方式
 *  1）字符串
 *     常用于单入口应用，也是最常用的功能
 *     最后会形成一个chunk，一个bundle文件 
 *  2）数组
 *     用于HMR，html文件不会热更新，不太常用
 *     数组后面的文件会被打包到main.js中，形成一个chunk,一个bundle
 *  3）对象
 *     常用于多入口应用，不太常用
 *     最后会形成多个chunk，多个bundle
 */
module.exports = {
    entry: './src/js/index.js',
    output: {
        // 文件名称 目录+文件名称
        filename: 'js/[name].js',
        // 打包
        path: resolve(__dirname, 'build'),
        // 引入资源的名称 会在前面加一个/
        publicPath: "/",
        // 指定非入口chunk的名称
        chunkFilename: '[name]_chunk.js',
        //向外暴露的名称
        library: '[name]_[hash:8]',
        // 暴露在哪个上面
        // libraryTarget: 'window'
        // commonjs导出
        // libraryTarget: 'commonjs'
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    // 开发模式
    mode: 'development'
}