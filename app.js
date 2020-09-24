let express = require("express");
let app = express();
const path = require("path");

app.get("/", function (req, res) {
  let file = path.resolve("vistas/index.html");
  return res.sendFile(file);
});
app.get("/register", function (req, res) {
  let file = path.resolve("vistas/register.html");
  res.sendFile(file);
});
app.get("/contacto", function (req, res) {
  let file = path.resolve("vistas/contacto.html");
  return res.sendFile(file);
});

app.get("*", function (req, res) {
  if (req.url.includes(".")) {
    let file = path.resolve("public" + req.url);
    return res.sendFile(file);
  }
  res.send("Not found");
});

app.listen(3000, () => console.log("mercadoLibre"));
