const mongoose = require('mongoose')

const prouductSchema={
    prodId:{type:Number, required: true },
    name:{type:String, required: true},
    model:{type:String, required: true},
    price:{type:Number, required: true},
    stock:{type:String, required: true}
}
module.exports = mongoose.model('Product', prouductSchema)