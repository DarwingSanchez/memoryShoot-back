
const express = require('express')
const router = express.Router()

const orderController = require('./../controllers/orderController')


router.get('/get-orders', orderController.getAll)
router.post('/create-order/:id', orderController.newOrder)
router.put('/dispatch-order', orderController.dispatchOrder)



module.exports = router