const express = require('express');
const server = express();

server.listen(3000, () => console.log('listening at port 3000'));

server.get('/', (req, res) => res.sendStatus(200));

module.exports = server;