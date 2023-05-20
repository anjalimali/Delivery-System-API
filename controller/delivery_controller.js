
const Delivery = require('../model/delivery')

exports.getdelivery = async (req,res)=>{
    try {
        const data = await Delivery.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.postdelivery = async (req,res)=>{
    try {
        const data= await Delivery.create(req.body)
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.putdelivery = async (req,res)=>{
    try {
        const data = await Delivery.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.deletedelivery = async (req,res)=>{
    try {
        const data = await Delivery.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}