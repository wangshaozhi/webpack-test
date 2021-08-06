console.log('index.js加载了');

document.getElementById('btn').addEventListener('click', () => {
    /**
     * 懒加载 需要使用时 再加载
     * 而且只会加载一次
     */
    // import( /* webpackChunkName:'test' */ './test').then(({
    //     add
    // }) => {
    //     console.log(add(2, 3));
    // }).catch(err => {
    //     console.log('加载失败', err);
    // })

    /**
     * 预加载，加载页面的时候，已经加载了，但是加载的时机是等待其他资源加载完毕，浏览器空闲的时候，再加载的
     * 等到事件触发的时候，再执行
     * 同样只会加载一次，后面就从缓存中获取
     */
    import( /*webpackChunkName:'test', webpackPrefetch:true */ './test').then(({
        add
    }) => {
        console.log(add(3, 4));
    }).catch(err => {
        console.log(err + '加载失败');
    })
})