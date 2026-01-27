require('dotenv').config(); // Load environment variables
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// Use FRONTEND_URL from .env for production security
const io = new Server(server, { 
    cors: { 
        origin: process.env.FRONTEND_URL || "*", 
        methods: ["GET", "POST"]
    } 
});

app.use(cors());
app.use(express.json());

io.on('connection', (socket) => {
    console.log('Device connected: ' + socket.id);

    socket.on('sendOrder', (orderData) => {
        // Broadcast to EVERYONE (Kitchen & Admin)
        io.emit('receiveOrder', orderData); 
    });

    socket.on('disconnect', () => {
        console.log('Device disconnected');
    });
});

// Port 3000 for local, process.env.PORT for Render
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`BrewVerse Hub is live on port ${PORT}`);
});