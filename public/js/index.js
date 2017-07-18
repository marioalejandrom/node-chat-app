/**
 * Created by mario on 7/17/17.
 */
var socket = io();
socket.on('connect', function (){
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})

socket.on('newEmail', function(email) {
    console.log('New email', email);
});

socket.on('newMessage', function(message) {
    console.log('New message', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

socket.on('newLocationMessage', function(message) {
    console.log('New message', message);
    var li = jQuery('<li></li>');
    var a = jQuery(`<a target= "_blank">My current location</a>`);

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    });
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function(){
   if(!navigator.geolocation){
       return alert('Your browser doesn\'t support Geolocation.');
   }

   navigator.geolocation.getCurrentPosition(function (position){
       socket.emit('createLocationMessage', {
           lat: position.coords.latitude,
           lng: position.coords.longitude
       });
   }, function (){
       alert('Unable to fetch location.');
   });
});