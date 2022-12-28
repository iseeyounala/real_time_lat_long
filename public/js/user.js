

(function connect() {
    let socket = io.connect("http://localhost:3000")
    let messageList = document.querySelector('#message-list')
    socket.on('sent_data', data => {
        console.log("fontend",data)
        let listItem = document.createElement('li')
        listItem.textContent = "Lat" + data.lat + ": " + "Long"+ data.long;
        listItem.classList.add('list-group-item');
        messageList.appendChild(listItem) 
    })
})();