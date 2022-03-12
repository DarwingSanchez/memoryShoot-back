const Visit = require('../models/Visits');

const createVisit = async (req, res) => {
    try {
        const body = req.body
        const visited = new Visit(body)
        console.log(visited)
        if(!body.date.day || !body.date.month || !body.date.year || !body.date.hour || !body.date.minutes || !body.userIP){
            throw new Error('Faltan campos')
        }
        /* await visited.save() */
        res.json({Messege: 'Visit created', body})
    } catch (error) {
        res.status(400).json({Message: error.message})
    }
}

const getVisits = async (req, res) => {
    try {
        const visits = await Visit.find()
        res.status(200).json(visits)
    } catch (error) {
        res.status(500).json({Message: error.message})
    }
}

module.exports = {
    createVisit,
    getVisits
}