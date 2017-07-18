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
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template,{
        text: message.text,
        from: message.from,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);
});

socket.on('newLocationMessage', function(message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#location-message-template').html();
    var html = Mustache.render(template,{
        url: message.url,
        from: message.from,
        createdAt: formattedTime
    });

    jQuery('#messages').append(html);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    var messageTextBox = jQuery('[name=message]');
    socket.emit('createMessage', {
        from: 'User',
        text: messageTextBox.val()
    }, function () {
        messageTextBox.val('');
    });
});

var locationButton = jQuery('#send-location');

locationButton.on('click', function(){
   if(!navigator.geolocation){
       return alert('Your browser doesn\'t support Geolocation.');
   }

   locationButton.attr('disabled', 'disabled').text('Sending location...');
   navigator.geolocation.getCurrentPosition(function (position){
       locationButton.removeAttr('disabled').text('Send location');
       socket.emit('createLocationMessage', {
           lat: position.coords.latitude,
           lng: position.coords.longitude
       });
   }, function (){
       locationButton.removeAttr('disabled').text('Send location');
       alert('Unable to fetch location.');
   });
});