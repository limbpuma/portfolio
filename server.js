// server.js
const express = require("express");
const path = require("path");

const app = express();

// Sirve los archivos estáticos construidos por Angular
app.use(express.static("./dist/mi-portfolio"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/mi-portfolio/" })
);

// Inicia el servidor en el puerto 8080 o en el puerto definido por el entorno
app.listen(process.env.PORT || 8080);
