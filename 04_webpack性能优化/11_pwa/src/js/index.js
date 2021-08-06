if ('serviceWorker' in navigator) {
    console.log('进来了没？');
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(() => {
            console.log('sw注册成功！');
        }).catch(() => {
            console.log('sw注册失败了！');
        })
    })
}