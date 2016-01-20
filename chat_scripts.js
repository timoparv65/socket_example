// kts. http://socket.io/get-started/chat/

window.onload = function(event){
    //luo client pään soketin ja connect to server with socket
    var socket = io();
    
    //listen "new message" from server
    socket.on('new message',function(data){
        //get teaxarea with id="messages"   
        var textArea = document.getElementById('messages');
        textArea.value += data.name + ":" + data.message + "\n"; // kts dataToServer määritys
    });
    
    //get object that has id="send"
    var btnSend = document.getElementById('send');
    //add click listener for it
    btnSend.onclick = function(){
        
        var msg = document.getElementById('chat_message');
        console.log(msg.value);
        
        var dataToServer = {
            name:'undefined',
            message:msg.value
        }
        //send message to server
        socket.emit('chat msg',dataToServer); // chat msg = viestin protokolla
    }
}
