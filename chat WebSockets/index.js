const ws = new WebSocket('ws://127.0.0.1:3000')
const statusField = document.getElementById('status')
const form = document.getElementById('form')
const input = document.getElementById('send')
const history = document.getElementById('history')
const nickname = document.getElementById('nickname')





function saveMessage(message, userNick) {
    const li = document.createElement('li')
    li.textContent = `${userNick}: ${message}`
    history.appendChild(li)
}


function changeStatus(status) {
    statusField.innerHTML = status
}


form.addEventListener('submit', (event) => {
    event.preventDefault()

    ws.send(JSON.stringify({
        message: input.value,
        userName: nickname.value
    }))
    input.value = ''
})


ws.onopen = () => changeStatus('ONLINE')
ws.onclose = () => changeStatus('OFFLINE')

ws.onmessage = (response) => {
    let newMessage = JSON.parse(response.data)
    console.log(response)
    saveMessage(newMessage.message, newMessage.userName)
}

