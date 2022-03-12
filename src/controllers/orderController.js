const Order = require('./../models/Order')

const getAll = async (req, res) => {
    try {
        const orders  = await Order.find()
        if(orders.length > 0){
            res.json(orders)    
        } 
        throw new Error('There are not orders')
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getAll
}