const express = require('express')
const app = express()

const fs = require('fs')

require('dotenv').config()

const PORT = process.env.PORT || 5000


app.set('View engine','ejs')



app.use(express.static('public'))
app.get('/',(req,res)=>{

    // fs.appendFile('write.txt',`${Date.now()}`)
    res.render('pages/Home.ejs',{
        title:'Home page'
    })
})
app.get('/About',(req,res)=>{
    res.render('pages/About.ejs',{
        title:'About Page'
    })
})
app.listen(PORT,()=>console.log(`your server is = http://localhost:${PORT}`))