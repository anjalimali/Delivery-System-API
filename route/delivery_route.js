
const {getdelivery,postdelivery,putdelivery,deletedelivery} = require('../controller/delivery_controller')
const{auth}= require('../middleware/auth')

const route = require('express').Router()

route.get('/',getdelivery)

route.post('/',auth,postdelivery)

route.put('/:id',putdelivery)

route.delete('/:id',deletedelivery)

module.exports = route