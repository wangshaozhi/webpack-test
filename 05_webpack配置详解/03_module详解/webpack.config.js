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
                // 多个loader不配置 直接用数组形式
                use: ['style-loader', 'css-loader']
            },
            // 单个配置可以用对象 更详细配置可以在options中进行配置 
            {
                test: /\.(jpg|png|jpeg|tiff)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude 排除哪些文件
                exclude: /node_modules/,
                // src目录下的js文件
                // include: /src\/js\/\.js$/,
                include: resolve(__dirname, 'src'),
                // 优先执行 pre 延后执行 post
                enforce: 'pre',
                options: {
                    limit: 8 * 1024
                }
            }
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