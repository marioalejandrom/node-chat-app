/**
 * Created by mario on 7/17/17.
 */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

let publicPath = path.join(__dirname, '../public');
let port  =  process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

// app.get('/', middle, (req, res) => {
//     res.send(200);
// });

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Server',
        text: 'Welcome!',
        createdAt: 1223453
    })

    socket.on('createMessage', (newMessage) => {
        console.log('createMessage', newMessage);
        socket.emit('newMessage', {
           from: newMessage.from,
           text: newMessage.text,
           createdAt: new Date()
        });
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});