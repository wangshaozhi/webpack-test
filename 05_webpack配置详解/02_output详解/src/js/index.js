import( /* webpackChunkName:'test' */ './test').then(({
    default: add
}) => {
    console.log(add(2, 3));
})