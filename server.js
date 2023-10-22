const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Configuración para servir el archivo de configuración
app.get("/src/assets/config.json", (req, res) => {
  const config = {
    emailjsUserId: process.env.emailjsUserId || "defaultUserId",
  };
  res.json(config);
});

// Configuración para servir los archivos estáticos de Angular
app.use(express.static(path.join(__dirname, "dist/mi-portfolio")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/mi-portfolio/index.html"));
});

app.listen(process.env.PORT || 8080);
