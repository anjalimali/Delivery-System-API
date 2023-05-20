
const mongoose = require('mongoose')

const deliveryschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    mobileno:{
        type:Number,
        required:true
    },
    creatAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('delivery',deliveryschema)