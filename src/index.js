const app = require("./app");

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(app.get("port"), () => {
  console.log("Server listening on port 4000", app.get("port"));
});
