import express from "express";
const app = express();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}.`);
});
app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("home page");
});
