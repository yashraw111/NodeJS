const express = require('express')
const app = express()
const StudentController = require('../controller/StudentController')

app.post('/',StudentController.store)
app.get('/',StudentController.index)

module.exports =app