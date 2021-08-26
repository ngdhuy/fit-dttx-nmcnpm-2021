const express = require("express");
const app = express();

const host = "localhost";
const port = 3000;

const data = require("./data.json");

app.get("/", (req, res) => {
  res.end("Endpoint: /");
});

app.get("/products", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
});

app.get("/products/:productId", (req, res) => {
  data.forEach((element) => {
    if (element.id == req.params.productId) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(element));
      return;
    }
  });
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end("Product is invalid");
});

app.get('/categories', (req, res) => {
  let categories = data.map(item => item.category);
  // let setCategories = [...new Set(categories)];
  // let setCategories = categories.filter((item, index) => categories.indexOf(item) === index);
  let setCategories = categories.reduce((result, item) => (result.includes(item) ? result : [...result, item]),[]);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(setCategories));
})

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
