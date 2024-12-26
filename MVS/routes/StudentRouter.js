const express = require('express')
const app = express()
const router = express.Router()
const StudentController = require('../controller/StudentController')

app.post('/',StudentController.store)
app.get('/',StudentController.index)
app.get('/:id',StudentController.single)
app.delete('/:id',StudentController.trash)

module.exports =app