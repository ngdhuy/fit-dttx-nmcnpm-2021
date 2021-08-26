const express = require('express');
const path = require('path');

const app = express();

const host = 'localhost';
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.end("Hello");
})

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
})