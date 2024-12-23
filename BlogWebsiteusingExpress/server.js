const express = require('express')
const app = express()
const PORT = 8000

app.set('View engine','ejs')
app.get('/',(req,res)=>{
    res.render('home.ejs',{articles:"hello"})
})
    
app.listen(PORT,()=>console.log(`start project = http://localhost:${PORT}`))