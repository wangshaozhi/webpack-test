const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "./js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            // 处理css资源
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            // 处理less资源
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            // 处理图片资源
            {
                test: /\.(jpg|png|jpeg|tiff)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    // 关闭 es模块化  使用common模块化
                    esModule: false,
                    name: '[hash:8].[ext]',
                    outputPath: 'images'
                }
            },
            // 处理html中图片资源
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    name: '[hash:8].[ext]'
                }
            },
            // 处理其他资源
            {
                exclude: /\.(js|html|css|less|png|jpg|jpeg|tiff)$/,
                loader: "file-loader",
                options: {
                    name: '[hash:8].[ext]',
                    outputPath: 'media'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    /**
     * 是在内存中进行编译，不会进行输出，想要输出用webpack进行打包
     * 使用命令npx dev-webpacker-server
     */
    devServer: {
        // 构建完成后的路径
        contentBase: resolve(__dirname, 'build'),
        // 开启压缩
        compress: true,
        port: 8000,
        //自动打开
        open: true,
    }
}