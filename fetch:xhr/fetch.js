function sendPostRequest(url, method = 'get', body = '') {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json"
        }
    })
}

function sendGetRequest(url) {
    return fetch(url)
}


sendGetRequest('https://jsonplaceholder.typicode.com/psts/10')


    .then((response) => {
        if (!response.ok)
            throw new Error('плоха')
        return response.json()
    })
    .then((data) => {
        data.title = 'holahola'
        data.body = 'text of the post we are changed. so interesting '
        return data
    })
    .then((editedData) => sendPostRequest('https://jsonplaceholder.typicode.com/posts/10', 'PATCH', editedData))
    .then((response) => response.json())
    .then((finalRes) => console.log(finalRes))
    .catch((error) => console.log('named of error: ' + error))
    .finally(() => console.log('Promise fully finished'))











//ex 2 
// let requestBody = {
//     name: 'How to',
//     readTime: 15,
//     author: 'Dasha'

// }

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'post',
//     body: JSON.stringify(requestBody),
//     headers: {
//         "Content-type": "application/json"
//     }
// })
//     .then((response) => response.json())
//     .then((data) => console.log(data))

