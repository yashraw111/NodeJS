const {Schema,model}=require('mongoose')

const StudentSchema = new Schema({
    std_name:String,
    std_email:String,
    std_drid:Number,
})
const student = model("Student",StudentSchema)
module.exports = student