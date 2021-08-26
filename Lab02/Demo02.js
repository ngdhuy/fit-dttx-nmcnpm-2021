const http = require('http');
const fs = require('fs');

const hostName = "localhost";
const port = 3000;

const filePath = __dirname + '/resources/data.json';

const server = http.createServer((req, res) => {
  let content = fs.readFileSync(filePath, 'utf8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/json');
  res.end(content);
});

server.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
})