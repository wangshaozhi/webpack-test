// 绝对路径拼接
const {
    resolve
} = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')

const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')


const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    'css-loader',
    // 兼容性处理
    {
        loader: 'postcss-loader',
        options: {
            ident: 'postcss',
            plugins: () => [
                require("postcss-preset-env")()
            ]
        }
    }
]

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: []
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
        }),
        // 提取css文件到一个文件
        new MiniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        // 压缩css
        new OptimizeCssAssetsWebpackPlugin()
    ],
    // 生产模式
    mode: 'production',
    devtool: 'nosources-source-map'

    /**
     *  source-map提供一种构建代码到源代码的映射
     *  [inline-|hidden-|eval-][nosources-][cheap-[module-]] source-map
     *  source-map                    外部 可以追踪到源代码和构建后代码出错的地方,准确到具体位置
     *  inline-source-map             内部 可以追踪到源代码和构建后代码出错的地方,精确到位置
     *  hidden-source-map             外部 不能追踪源代码出错的地方，只能追踪到构建后代码的错误地方
     *  eval-source-map               内部 只能追踪到构建后代码，无法追踪到源代码
     *  nosources-source-map          外部 可以追踪到构建代码以及源代码出错的具体地方
     *  cheap-source-map              外部 只能追踪构建后代码错误位置，不能追踪到源代码位置
     *  cheap-module-source-map       外部 带module还会检查module中的错误，只能追踪构建后代码错误位置，不能追踪到源代码位置
     */

    /**
     * 开发环境 推荐
     *  eval-source-map 
     * 生产环境 推荐
     *  source-map
     */
}