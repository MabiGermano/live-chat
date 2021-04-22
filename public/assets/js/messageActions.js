function renderMessage(message, owner = false) {
    const messages = document.querySelector('#messages')
    console.log(messages);
    const divMessage = document.createElement('div')
    owner? divMessage.classList.add("owner") : divMessage.classList.add("other")
    divMessage.innerHTML = `
        <label>
            ${message.author}
        </label>
        <div class="textMessage">
            <p>
                ${message.message}
            </p>
        </div>
    `
    messages.appendChild(divMessage)
}


function sendMessage(event) {
    event.preventDefault()
    const author = document.querySelector('#userName').value
    const message = document.querySelector('#message').value

    if (author.length > 0 && message.length) {
        const messageObject = {
            author: author,
            message: message
        }
        renderMessage(messageObject, true)
        socket.emit('sendMessage', messageObject)
    }
}