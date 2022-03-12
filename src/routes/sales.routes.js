const express = require('express')
const router = express.Router();
const salesController = require('./../controllers/SalesController')


router.get('/get-sales', salesController.getSales)

module.exports = router