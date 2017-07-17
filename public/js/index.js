/**
 * Created by mario on 7/17/17.
 */
var socket = io();

socket.on('connect', function (){
    console.log('Connected to server');
    socket.emit('createMessage', {
        from: 'Mario',
        text: 'Hello World!'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})

socket.on('newEmail', function(email) {
    console.log('New email', email);
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
});