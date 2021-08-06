// 引入资源
import '../css/test1.css';
import '../css/test2.css';

const getSum = (...args) => args.reduce((p, next) => p + next, 0);
console.log(getSum(1, 2, 3, 4, 5));
