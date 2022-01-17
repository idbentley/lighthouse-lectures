
const net = require('net');
const helpers = require('./helpers');
const port = 9876;

const generateRandomEmoji = helpers.generateRandomEmoji;
const generateRandomId = helpers.generateRandomId;

const listOfClients = [];

const writeBack = (data, client) => {
  client.write(`\t 🦜: ${data}`)
}

const writeToAllClients = (data, client, listOfClients) => {
  for(const individualClient of listOfClients) {
    if (individualClient.id !== client.id){

      individualClient.write(`\t${client.avatar}: ${data}`)
    }
  }
}



const server = net.createServer();

// listening for when a client connects
server.on('connection', (socket) => {
  // socket = connection
  socket.setEncoding('utf8');

  socket.id = generateRandomId();
  socket.avatar = generateRandomEmoji();

  listOfClients.push(socket);

  console.log(`${socket.avatar} ${socket.id} is connected to the server`);

  // sending data to our client
  socket.write('🦜 welcome! to our server!\n');
  socket.write(`your avatar is ${socket.avatar} and id is ${socket.id}\n`)

  // listening for data coming from our client
  socket.on('data', (data) => {
    console.log(`${socket.avatar} ${socket.id}: ${data}`);
    // writeBack(data, socket);
    writeToAllClients(data, socket, listOfClients);
  });
});

server.listen(port, () => {
  console.log(`🦜 server is listening on port ${port}`);
})