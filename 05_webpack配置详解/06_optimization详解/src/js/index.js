// 引入css资源

import '$css/index'

import( /* webpackChunkName:'test' */ './test').then(({
    default: add
}) => {
    console.log(add(2, 3));
}).catch(err => {
    console.log(err);
})

console.log('index.js被加载了');