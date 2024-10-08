import express from "express";

const app = express();
const port = 3000;
import morgan from "morgan";

app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
