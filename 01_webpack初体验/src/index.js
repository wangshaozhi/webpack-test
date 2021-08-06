/**
 * webpack是构建工具，负责静态资源的打包
 * webpack 能够打包js、json文件
 * webpack还能处理import文件
 * webpack处理不了css/图片等资源，需要loader或者plugin来处理
 */

import {
    add
} from './test'
import data from './data.json'

console.log(add(1, 2));
console.log(data);