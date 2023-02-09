const express = require("express");
const router = require("./routes/routes");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(router);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
