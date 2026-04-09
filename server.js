const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // When a host spins the wheel, broadcast it to all other viewers
  socket.on('spin', (data) => {
    console.log(`Spin event received with target angle: ${data.targetAngle}`);
    socket.broadcast.emit('spin', data);
  });

  socket.on('sync_state', (data) => {
    socket.broadcast.emit('sync_state', data);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
