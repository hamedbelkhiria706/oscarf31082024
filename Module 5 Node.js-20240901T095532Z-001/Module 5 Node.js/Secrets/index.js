//Pour voir comment le site web final doit fonctionner, exécutez "node solution.js".
//Assurez-vous d'avoir installé toutes les dépendances avec "npm i".
//Le mot de passe est ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

const correctPassword = "ILoveProgramming";

const check = (req, res) => {
  const { password } = req.body;
  if (req.url == "/check") {
    if (password !== correctPassword) {
      res.render("index", { error: "Password is wrong." });
    } else {
      res.render("secrets");
    }
  } else {
    res.render("index", { error: "" });
  }
};
app.use(check);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
