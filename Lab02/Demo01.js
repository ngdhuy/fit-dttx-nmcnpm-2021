const http = require('http');

const hostName = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http:://${hostName}:${port}`);
});