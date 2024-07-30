//requirements
const express = require('express');
const path = require('path');
const http = require('http');
const socket = require('socket.io');
const formatMessage = require('./utils/messages');
const botName = "ChatApp Bot !";
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers

} = require('./utils/users');

//variables
const app = express();
const server = http.createServer(app);
const io = socket(server);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket=> {
    socket.on("joinRoom", ({username, room})=>{
        const user = userJoin(socket.id, username, room);
        //join room
        socket.join(user.room);
        //welcome current user
        socket.emit('message',formatMessage(botName,'Welcome!!'));
        //broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', formatMessage(botName,`${user.username} has joined`));
        //send users and rooms info
        io.to(user.room).emit("roomUsers", {
            room: user.room,
            users: getRoomUsers(user.room)
        })
    });  
    //listen to chatMessage
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username,msg));
    });
    //runs when user disconnects
    socket.on('disconnect', ()=>{
        const user = userLeave(socket.id);
        if(user){
            io.to(user.room).emit('message', formatMessage(botName,`${user.username} left`));  
            //Resend users and rooms info
            io.to(user.room).emit("roomUsers", {
                room: user.room,
                users: getRoomUsers(user.room)
            });
            }
        
    });
});

server.listen(3000, ()=> console.log("Server running in port 3000"));
