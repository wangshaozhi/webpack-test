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
        rules: [
            // 处理css资源
            {
                test: /\.css$/,
                use: [
                    ...commonCssLoader
                ]
            },
            //  处理less资源
            {
                test: /\.less$/,
                use: [
                    ...commonCssLoader,
                    'less-loader',
                ]
            },
            // 处理图片资源
            {
                test: /\.(jpg|png|jpeg|tiff)$/,
                loader: 'url-loader',
                options: {
                    limit: 8 * 1024,
                    // 关闭es模块化，使用commonJS模块化处理
                    esModule: false,
                    name: '[hash:8].[ext]',
                    outputPath: 'images'
                }
            },
            // 处理html中图片资源
            {
                test: /.(html)$/,
                loader: 'html-loader',
                options: {
                    name: '[hash:8].[ext]'
                }
            },
            /**
             * 正常来讲，一个文件只能被一个loader处理，当一个文件被多个loader处理，必须先要被eslint-loader处理，然后再去被其他loader处理
             * 处理js语法检查
             */
            {
                test: /\.js$/,
                // 去除其他的代码，只检查自己写的代码
                exclude: /node_modules/,
                // 优先执行
                enforce: 'pre',
                loader: 'eslint-loader',
                // 需要在pacck.json 中配置eslintConfig
                options: {
                    // 自动修复开启
                    fix: true
                }
            },
            // 处理js兼容性
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                // 现在用usage是可以的，用entry兼容不了ie8以上
                                useBuiltIns: 'usage',
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: '60',
                                    firefox: '50',
                                    ie: '8'
                                }
                            }
                        ]
                    ]
                }
            },
            // 处理其他资源
            {
                exclude: /\.(js|css|less|jpg|jpeg|tiff|html)$/,
                loader: 'file-loader',
                options: {
                    name: '[hash:8].[ext]',
                    outputPath: 'media'
                }
            }
        ]
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
    mode: 'production'
}