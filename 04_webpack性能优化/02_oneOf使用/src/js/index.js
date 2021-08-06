// 引入资源
import '../css/test1.css';
import '../css/test2.css';

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (2 > 1) {
      resolve('hhh');
    } else {
      reject();
    }
  }, 1000);
  console.log('promise');
});

console.log(promise);
