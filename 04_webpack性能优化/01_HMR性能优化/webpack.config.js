// // HMR  hot-module-replace

// const {
//     resolve
// } = require('path')

// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//     entry: './src/index.html',
//     output: {
//         filename: 'js/built.js',
//         path: resolve(__dirname, 'build')
//     },
//     module: {
//         rules: [{
//             test: /\.css$/,
//             use: [
//                 'style-loader',
//                 'css-loader'
//             ]
//         }]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template:'./src/index.html'
//         })
//     ],
//     mode: 'development',
//     devServer: {
//         contentBase: resolve(__dirname, 'build'),
//         compress: true,
//         port: 3000,
//         open: true
//     }
// }

const {
    resolve
} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * css 配置hot之后，在开发环境下，可以利用style-loader内置实现热更新
 * js 代码通过module.hot.accept方法来监听，从而实现模块的热加载，而不用加载整个js文件，提高构建速度
 * 注意不能监听index.js 因为index.js变化的话，所有的就都变化了 
 * html 因为只有一个html文件，所以不能实现HMP
 */
module.exports = {
    // html更改之后 不会热加载，需要重新配置entry，才可以热加载
    // entry: ['./src/js/index.js','./src/index.html'],
    // entry: './src/js/index.js',
    entry: ['./src/js/index.js', './src/index.html'],
    output: {
        filename: "built.js",
        path: resolve(__dirname, './build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
        open: true,
        // 启用热加载之后，需要重新启动webpack才可以生效
        hot: true
    }
}