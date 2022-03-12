require("./database");
const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const morgan = require("morgan");

env.config();
const app = express();
const port = process.env.PORT;

app.use(cors({ origin: ["http://localhost:4200"] }));

app.use(express.json());

app.use(morgan("dev"));

/* Rutas */
///
app.use("/api/user", require("./routes/users.routes"));

app.listen(port, () => console.log(`Ejecutando en port ${port}`));
