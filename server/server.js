/**
 * Created by mario on 7/17/17.
 */
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

let publicPath = path.join(__dirname, '../public');
let port  =  process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined the chat'));

    socket.on('createMessage', (newMessage, callaback) => {
        io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
        callaback('This is from the server');
    });


    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});