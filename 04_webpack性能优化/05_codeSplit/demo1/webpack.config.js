// 绝对路径拼接
const {
    resolve
} = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    // 单入口
    // entry: './src/js/index.js',
    // 多入口
    entry: {
        index: './src/js/index.js',
        test: "./src/js/test.js"
    },
    output: {
        filename: 'js/[name].built[contenthash:8].js',
        path: resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            minify: {
                // 删除空格
                collapseWhitespace: true,
                // 删除注释
                removeComments: true
            }
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    // 生产模式
    mode: 'production'
}