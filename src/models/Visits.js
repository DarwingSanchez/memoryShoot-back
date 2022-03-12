const mongoose = require('mongoose')
const { Schema } = mongoose

const visitSchema = new Schema(
    {
        date: {
            day: Number,
            month: Number,
            year: Number,
            hour: Number,
            minutes: Number
        },
        userIP: String

    }, 
    {
        versionKey: false, 
        timestamps: true,
    })

module.exports = mongoose.model("Visits", visitSchema)