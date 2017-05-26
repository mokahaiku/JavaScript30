const express = require('express');
const path = require('path');

const server = express();

const exercise = '10 - Hold Shift and Check Checkboxes';

server.use(express.static(exercise));

server.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, exercise, 'index.html'));
});

const port = 3000;
server.listen(port);

// eslint-disable-next-line no-console
console.log(`Started server on port: ${port}`);
