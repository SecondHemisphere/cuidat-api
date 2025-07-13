const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const emergencias = require("./modulos/emergencias/rutas");
const advertencias = require("./modulos/advertencias/rutas");
const pasos = require("./modulos/pasos/rutas");
const mensajes = require("./modulos/mensajes/rutas");
const usuarios = require("./modulos/usuarios/rutas");
const auth = require("./modulos/auth/rutas");

const error = require("./red/errors");

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuracion
app.set("port", config.app.port);

//rutas
app.use("/api/emergencias", emergencias);
app.use("/api/pasos", pasos);
app.use("/api/advertencias", advertencias);
app.use("/api/mensajes", mensajes);
app.use("/api/usuarios", usuarios);
app.use("/api/auth", auth);

app.use(error);

module.exports = app;
