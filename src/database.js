const env = require('dotenv');
const mongoose = require('mongoose')
env.config()
const uri = process.env.MONGO_ATLAS


mongoose
    .connect(uri)
    .then((db) => console.log('Conexión a DB exitosa'))
    .catch(error => console.log('Ups! Having a DB error', error))

module.exports = mongoose