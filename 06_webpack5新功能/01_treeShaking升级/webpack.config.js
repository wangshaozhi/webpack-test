const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    output: {
        // 文件名称 目录+文件名称
        filename: 'js/[name]_[contenthash:8].js',
        // 打包
        path: resolve(__dirname, 'build'),
        chunkFilename: 'js/[name]_chunk_[contenthash:8].js'
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
    mode: 'production'
}