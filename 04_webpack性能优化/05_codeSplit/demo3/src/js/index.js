import( /*webpackChunkName:'test' */ './test').then(({
  mul,
  add
}) => {
  console.log(mul(2, 3));
}).catch(err => {
  console.log('导入错误了' + err);
})

const getSum = (...args) => args.reduce((p, next) => p + next, 0);
console.log(getSum(1, 2, 3, 4, 5));