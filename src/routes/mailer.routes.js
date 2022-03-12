const express = require('express')
const router = express.Router();

const mailerController = require('./../controllers/mailerController')

router.post('/send-general-report', mailerController.sendGeneralReport)
router.post('/send-sales-report', mailerController.sendSalesReport)

module.exports = router