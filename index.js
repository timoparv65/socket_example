var express = require('express')(); // lataa modulin ja kutsuu express serverin (yhdistetty samaa)
var http = require('http').Server(express);

//create socket
var io = require('socket.io')(http);

//Listen "connection" message from client socket
io.on('connection',function(socket){ // eventin nimi on connection
   console.log('connected') ;
    //listen "chat msg" message from ANY client
    socket.on('chat msg',function(data){ // on:lla kuunnellaan 'chat msg'
        //broadcast message to all connected clients
        io.emit('new message',data); // protokollaviestin nimi = new message
    });
});

//make root context router to return index.html
express.get('/',function(req,res){
   
    res.sendfile('index.html');
});

express.get('/chat_scripts.js',function(req,res){
   
    res.sendfile('chat_scripts.js');
});

http.listen(3000, function(){
   console.log('listening on *:3000') ;
});
