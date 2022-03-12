require('./database')
const express = require('express');
let cors = require('cors')
const env = require('dotenv')
const morgan = require("morgan")

env.config()
const app = express();
const PORT = process.env.PORT

app.use(cors({ origin: ["http://localhost:4200"] }));

app.use(express.json());

app.use(morgan('dev'));

/* Rutas */


app.use('/api/visits', require('./routes/visits.routes'))
app.use('/api/mailer', require('./routes/mailer.routes'))
app.use('/api/sales', require('./routes/sales.routes'))
app.use('/api/orders', require('./routes/orders.routes'))

app.listen(PORT, () => console.log(`Ejecutando en port ${PORT}`))



