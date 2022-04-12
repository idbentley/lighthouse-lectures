const {Client} = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'postgres'
}

const client = new Client(config);

client.connect(() => {
    console.log("Connected Successfuly to the Database");
});

module.exports = {client};
// module.exports = {client: client};