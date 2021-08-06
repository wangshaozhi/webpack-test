// import 'babel-polyfill';

const add = function add(x, y) {
  return x + y;
}; 

// eslint-disable-next-line
console.log(add(5, 3));
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello Webpack');
    console.log('hhh');
  }, 1000);
});
console.log(promise.then((res) => console.log(res)));
