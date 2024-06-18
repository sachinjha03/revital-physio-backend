const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    image : String,
    name : String,
    description : String
})

const serviceModel = new mongoose.model("Service" , serviceSchema)

module.exports = serviceModel;