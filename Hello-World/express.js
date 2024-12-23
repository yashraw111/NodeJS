// const http = require('http')
const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    return res.send("Hello From Home Page ")
});

app.get('/about',(req,res)=>{
    return res.send("Hello from About Page","hey" + req.query.name)
})

const myServer = http.createServer(app)
app.listen(8000,()=>console.log("Server Started!"))
// myServer.listen(8000,()=>console.log("Server Started"))