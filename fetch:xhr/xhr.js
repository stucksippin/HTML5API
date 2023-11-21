let url = 'https://vk.com/im?peers=339647600/posts'

function sendRequest(url, method) {
    return new Promise((resolve, reject) => {


        let xhr = new XMLHttpRequest()
        xhr.open(method, url, true)

        xhr.responseType = 'json'
        xhr.onload = function () {
            if (xhr.status < 400)
                resolve(xhr.response)
            else
                reject(xhr.status)
        }

        xhr.onerror = function () {
            reject('network error')
        }

        xhr.send()
    })
}

sendRequest('https://jsonplaceholder.typicode.com/posts', 'get').then((data) => console.log(data))