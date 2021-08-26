const express = require('express');

const hostName = "localhost";
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/json'});
  object = {
    name : 'product 01',
    price : 2000
  };
  res.end(JSON.stringify(object));
});

app.post('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("POST method");
})

app.put('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("PUT method");
})

app.delete('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("DELETE method");
})

app.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
})