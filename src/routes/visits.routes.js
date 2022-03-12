const express = require('express')
const router = express.Router();

const visitsController = require('../controllers/VisitsController')

router.post('/create-visit', visitsController.createVisit)
router.get('/get-visits', visitsController.getVisits)

module.exports = router