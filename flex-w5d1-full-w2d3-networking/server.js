const net = require('net');
const port = 9876;


const server = net.createServer();
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

let id = 0;
const nextId = () => {
  return id++;
}

const listOfClients = [];

const writeToAllClients = (data, client, listOfClients) => {
  for(const individualClient of listOfClients) {
    if (individualClient.id !== client.id){

      individualClient.write(`\t: ${data}`)
    }
  }
}



// listening for when a client connects
server.on('connection', (socket) => {
  // socket = connection
  socket.setEncoding('utf8');

  socket.id = nextId();

  listOfClients.push(socket);

  console.log(`${socket.id} is connected to the server`);

  // sending data to our client
  socket.write('Welcome to our server!\n');
  socket.write(`Your id is ${socket.id}\n`)

  // listening for data coming from our client
  socket.on('data', (data) => {
    console.log(`${socket.id}: ${data}`);
    writeToAllClients(data, socket, listOfClients);
  });
});


