const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/js/index.js',
    // entry: ['./src/js/index.js', './src/index.html'],
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
    mode: 'development',
    resolve: {
        alias: {
            '$css': resolve(__dirname, 'src/css')
        },
        extensions: ['.js', '.css', '.vue']
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        }
    },
    // devServer: {
    //     // contentBase
    //     contentBase: resolve(__dirname, 'build'),
    //     // 开启压缩
    //     compress: true,
    //     // 端口号
    //     port: 3000,
    //     // 域名
    //     host: 'localhost',
    //     // 默认打开
    //     open: true,
    //     // 开启HMR功能
    //     hot: true,
    //     // 不显示启动服务器日志信息
    //     clientLogLevel: 'none',
    //     // 不显示多余的日志信息
    //     quiet: true,
    //     // 出现错误不要满屏显示
    //     overlay: false,
    //     // 设置代理 proxy
    //     proxy: {
    //         "/api": {
    //             // 收到/api的请求时，会被代理服务器捕获到，转发到5000端口的服务器，然后再将获取的数据通过代理服务器返回给前端
    //             target: "http:localhost:5",
    //             // 以/api开头的请求将会被重写
    //             pathRewrite: {
    //                 // 将类似 /api/login中的 /api 调换为 http://localhost:8009/api  
    //                 '^/api': 'http://localhost:5000/api'
    //             }
    //         }
    //     }
    // }
}