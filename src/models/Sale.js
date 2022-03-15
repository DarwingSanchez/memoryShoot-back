const mongoose = require('mongoose')
const { Schema } = mongoose

const saleSchema = new Schema(
    {   
        productID: Number,
        totalPrice: Number,
        created: String,

    }, 
    {
        versionKey: false, 
        timestamps: true,
    })

module.exports = mongoose.model("Sales", saleSchema)