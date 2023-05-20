const user_route = require('./route/user_route')
const delivery_route = require('./route/delivery_route')
require('dotenv/config')

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// middleware
app.use(express.json())
app.use(Cors())

app.get('/',(req,res)=>{
    res.send("this is home page")
})

// main route
app.use('/api/delivery',delivery_route)

app.use('/api/user',user_route)

app.listen(process.env.PORT,()=>{
    console.log("listing on port 5000");
})

async function main(){
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()