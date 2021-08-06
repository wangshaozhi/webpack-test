// 绝对路径拼接
const {
    resolve
} = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/js/index.js',
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
    /**
     * optimization 有两个作用
     *    1）会将node_modules文件单独打成一个chunk，在最后index页面引入 
     *    2）会主动分析多入口引入的依赖，如果存在共同的包，且包的大小大于10k左右，则会将这个依赖包打包为一个chunk
     */
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all'
    //     }
    // },
    // 生产模式
    mode: 'production'
}