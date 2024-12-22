import express from "express";
import http from "http";
import { Server } from "socket.io";

const app=express();

const server=http.createServer(app);

const io= new Server(server,{
    cors:{
        origin:["http://localhost:5173"],
    }
});

export function getReceiverSocetId(receiverId){
    return userSockets[receiverId];
}
//to check online users aam
const userSockets={}; // [userId:socketId]

io.on("connection",(socket)=>{
    console.log("User connected",socket.id);
    const userId=socket.handshake.query.userId;
    if(userId){
        userSockets[userId]=socket.id;
    }
    //showing all the connected users
    io.emit("getOnlineUsers",Object.keys(userSockets));
    socket.on('connect', () => {
        console.log('Socket connected with ID:', socket.id);
    });

    socket.on("disconnect",()=>{
        console.log("User disconnected",socket.id);
        delete userSockets[userId];
        io.emit("getOnlineUsers",Object.keys(userSockets));
    })

});

export {app,server,io};