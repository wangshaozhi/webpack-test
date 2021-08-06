import '../css/test1.css'
import test from './test'

console.log('index.js被加载了');
function add(x, y) {
    return x + y;
}

if(module.hot){
    module.hot.accept('./test.js',()=>{
        test()
    })
}

console.log(test());
console.log(add(3, 3));
