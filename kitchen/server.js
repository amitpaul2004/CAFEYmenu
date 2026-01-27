const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

io.on('connection', (socket) => {
    console.log('Device connected: ' + socket.id);

    // When an order comes from a User Device
    socket.on('sendOrder', (orderData) => {
        // Broadcast to EVERYONE (Kitchen & Admin)
        io.emit('receiveOrder', orderData); 
    });
});

server.listen(3000, '0.0.0.0', () => {
    console.log('BrewVerse Hub is live on port 3000');
});