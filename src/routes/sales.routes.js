const express = require('express')
const router = express.Router();
const salesController = require('./../controllers/SalesController')


router.get('/get-sales', salesController.getSales)
router.post('/create-sale', salesController.createSale)
router.get('/get-sale/:id', salesController.getOneSale)

module.exports = router