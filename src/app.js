require('./database')
const express = require('express');
let cors = require('cors')
const env = require('dotenv')
const morgan = require("morgan")

env.config()
const app = express();

app.use(cors({origin:['http://localhost:4200']}));

const PORT = process.env.PORT

app.use(express.json());

app.use(morgan('dev'));

/* Rutas */
///

app.listen(PORT, () => console.log(`Ejecutando en port ${PORT}`))



