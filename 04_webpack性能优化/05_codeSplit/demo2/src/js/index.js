// 引入js
import $ from 'jquery'

import {
  mul,
} from './test';

const getSum = (...args) => args.reduce((p, next) => p + next, 0);
console.log(getSum(1, 2, 3, 4, 5));

console.log(mul(2, 3));
console.log($);