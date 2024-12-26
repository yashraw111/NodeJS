const Student = require('../model/StudentModel')

const store = async(req,res)=>{
    const student = await Student.create(req.body)
    
    res.json("inserted")
}

const index = async(req,res)=>{
    const student = await Student.find()
    res.json({
        success:true,
        student
    })
}

const single = async(req,res)=>{
    const id = req.params.id
    console.log(id);

    const student = await Student.findById({_id:id})
    res.json({
       success:true,
       student
    })
}

const trash = async (req,res)=>{
    const {id} = req.params
    // console.log(id);
    

    const student =await Student.findByIdAndDelete(id)

    res.json("record deleted")
}
module.exports={store,index,single,trash}