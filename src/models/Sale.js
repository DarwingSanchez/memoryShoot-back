const mongoose = require('mongoose')
const { Schema } = mongoose

const saleSchema = new Schema(
    {   
        productID: mongoose.Types.ObjectId,
        totalAmount: Number,
        items: Number,
        created: String,
        orderID: mongoose.Types.ObjectId
    }, 
    {
        versionKey: false, 
        timestamps: true,
    })

module.exports = mongoose.model("Sales", saleSchema)