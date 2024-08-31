const express = require("express");

const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}.`);
});
app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>homme page</h1>");
});
app.get("/about", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>about page</h1>");
});
