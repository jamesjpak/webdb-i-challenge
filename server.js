const express = require('express');
const helmet = require('helmet');

const server = express();

// your code here

const accountsRouter = require('./data/accountsRouter');

server.use(express.json());
server.use(helmet());

server.use('/accounts', accountsRouter);

server.get('/', (req, res) => {
    res.send(`<h2> Fired up! </h2>`)
  });

module.exports = server;