const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// app.use((req,res,next)=>{
//     return res.json({msg:"hello from middleware  "})
// })
app.get('/',(req,res)=>{ 
    res.send("hello world ")
})



var arr = []
app.post('/user',(req,res)=>{
    const {name,userId} = req.body

    const newUser= {
        user_name : name,
        user_id : userId
    }
    console.log(newUser);
    arr.push(newUser)

    res.json({
        success:true,
        message:'data inserted'
    })
    res.json('inserted')
})

app.get('/user',(req,res)=>{
    console.log("get api ");
    res.json({
        user:arr
    })
})
app.get('/user/:id',(req,res)=>{
    const {index} = req.params;

  const userfind =  arr.find((user)=>user.id === index)

    res.json(userfind)
})
app.delete('/user/:index',(req,res)=>{
    // console.log(req.params.index);

    const {index} = req.params;
    arr.splice(index,1)
    res.json({
        message:"deleted"
    })
    
})

app.put('/user',(req,res)=>{

    // console.log(req.query);
    
    const {index}= req.query

    arr.splice(index,1,req.body)
    
    res.json({
        message:"data update"
    })

})
app.listen(PORT,()=>console.log(`live server start = http://localhost:${PORT}`))