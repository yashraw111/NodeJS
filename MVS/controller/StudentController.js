const student = require('../model/StudentModel')

const store = async(req,res)=>{
    const student = await student.create(req.body)
    res.json("inserted")
}

const index = (req,res)=>{
    res.json("index api")
}
module.exports={store,index}