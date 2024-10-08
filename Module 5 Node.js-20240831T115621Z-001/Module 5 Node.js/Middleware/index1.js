import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const port = 5500;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
  //alert(req.body);
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
