const {
    resolve
} = require('path')


const webpack = require('webpack')

/**
 * 使用dll 技术对第三方库进行打包 如jquery react vue
 * 运行webpack默认是去赵webpack.config.js文件
 * 如果想要运行webapck.dll.js 则运行命令 webpack --config webpack.dll.js
 */
module.exports = {
    entry: {
        /**
         * 键的意思是指打包后的名称是jquery 后面可以通过[name]获取
         * 值的意思是要打包的库包括jquery
         */
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        //向外暴露的名称是什么，通过名称加hash来命名
        library: '[name]_[hash:8]'
    },
    plugins: [
        // 通过打包后的文件，可以知道jquery不用打包，而且向外暴露的名称是[name][hash:8]
        new webpack.DllPlugin({
            // 
            name: '[name]_[hash:8]',
            // json文件提供库名称的映射
            path: resolve(__dirname, 'dll/mainfest.json')
        })
    ],
    mode: 'development'
}