
const {getuser,login,postuser} = require('../controller/user_controller')

const route = require('express').Router()

route.get('/',getuser)

route.post('/login',login)

route.post('/',postuser)

module.exports = route