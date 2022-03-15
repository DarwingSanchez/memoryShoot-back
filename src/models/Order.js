const mongoose = require('mongoose')
const { Schema } = mongoose

const orderSchema = new Schema(
    {   
        saleID: mongoose.Types.ObjectId,
        address: String,
        city: String,
        state: String,
        status:Boolean,
        created: String,
    }, 
    {
        versionKey: false, 
        timestamps: true,
    })

module.exports = mongoose.model("Orders", orderSchema)