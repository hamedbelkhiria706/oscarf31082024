import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set("view engine", "ejs");

const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("views", path.join(__dirname, "views"));
let middlewareresult = "";
app.use(bodyParser.urlencoded({ extended: true }));
const logger = (req, res, next) => {
  console.log(`URL: ${req.url}`);
  console.log(`Method: ${req.method}`);
  if (req.url == "/submit") {
    middlewareresult = (req.body.name + req.body.age).replaceAll(" ", "_");
    console.log(middlewareresult);
  }
  next();
};
app.use(logger);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  //alert(req.body);
  // console.log(req.body);
  // console.log(middlewareresult);
  //res.send(JSON.stringify(req.body));

  res.render("result", { data: req.body, middlewareResult: middlewareresult });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
