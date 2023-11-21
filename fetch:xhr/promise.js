let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('promise resolve')
    }, 2000);
})

promise.then((data) => console.log('result:' + data))








