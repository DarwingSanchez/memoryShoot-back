require("./database");
const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const morgan = require("morgan");

env.config();
const app = express();
const port = process.env.PORT;

app.use(cors({ origin: ["http://localhost:4200"] }));

app.use(express.static("public"));

app.use(express.json());

app.use(morgan("dev"));

/* Rutas */

//app.use('/api/product', require('./routes/product.routes'))
app.use("/api/visits", require("./routes/visits.routes"));
app.use("/api/mailer", require("./routes/mailer.routes"));
app.use("/api/sales", require("./routes/sales.routes"));
app.use("/api/orders", require("./routes/orders.routes"));
///
app.use("/api/user", require("./routes/users.routes"));



app.listen(port, () => console.log(`Ejecutando en port ${port}`));
