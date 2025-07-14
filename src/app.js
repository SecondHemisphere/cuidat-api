const express = require("express");
const morgan = require("morgan");
const config = require("./config");

const cors = require("cors");

const mensajes = require("./modulos/mensajes/rutas");
const usuarios = require("./modulos/usuarios/rutas");
const auth = require("./modulos/auth/rutas");

const error = require("./red/errors");

const app = express();

//Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//configuracion
app.set("port", config.app.port);

//rutas
app.use("/api/mensajes", mensajes);
app.use("/api/usuarios", usuarios);
app.use("/api/auth", auth);

app.use(error);

module.exports = app;
