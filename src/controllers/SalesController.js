const Sale = require('./../models/Sale')
const orderController = require('./orderController')

const getSales = async (req, res) =>{
    try {
        const sales = await Sale.find()
        if(sales.length > 0){
            res.json(sales)
        }else{
            throw new Error('There are no sales yet')
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}
const createSale = async (req, res) => {
    try {
        const body = req.body 
        console.log(body);
        const sale = new Sale(body)
        if(!body.productID ||!body.totalPrice || !body.created){
            throw new Error('There is one or more empty field')
        }
        await sale.save()
        res.json(sale)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getOneSale = async (req, res) => {
    try {
        const id = req.params.id
        const sale = await Sale.findById(id)
        if(sale){
            res.status(201).json(sale)
        }else{
            throw new Error('Sale not found')
        }
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports = {
    getSales,
    createSale,
    getOneSale
}