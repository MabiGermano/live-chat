
const express = require('express') 
const  http = require('http')
const socket = require('socket.io')
const { dirname, join } = require('path')

const app = express()
const server = http.createServer(app)
const io = socket(server);

app.use(express.static(join(__dirname, '../public')))
app.set('views', join(__dirname, '../public'))
app.set('view engine', 'html')

app.get('/', (req, res) => {
    res.render('index.html')
})


io.on('connect', socket => {
    console.log(`socket conectado: ${socket.id}`);

    socket.on('sendMessage', data => {
        console.log("oia")
        console.log(data)
    })
})

server.listen(3000, () => {
    console.log('I\'m alive!')
})