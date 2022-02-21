const net = require('net');
const PORT = 9876;

const server = net.createServer();
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// listening for when a client connects
server.on('connection', (socket) => {
  // socket = connection
  socket.setEncoding('utf8');

  console.log(`Someone connected to the server ${socket.avatar}`);

  // sending data to our client
  socket.write('Welcome to our server!\n');

  // listening for data coming from our client
  socket.on('data', (data) => {
    console.log(`${socket.id}: ${data}`);
  });
});
