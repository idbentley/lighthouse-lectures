const net = require("net");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

// creating a coonnection with a server
const client = net.createConnection({
  host: '127.0.0.1',
  port: 9876
});

// setting the encoding incoming from the connection
client.setEncoding('utf8');

// handling data sent from the server
client.on('data', (data) => {
  console.log(data);
});

// handling out input typed into the terminal
// and writing it to the server
rl.on('line', (input) => {
  client.write(`${input}\n`)
});

// listening for the connection to be severed
client.on("end", () => {
  console.log('diconnected from the server');
  rl.close();
})