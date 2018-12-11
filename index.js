const express = require('express');
const app = express()
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://admin:admin123@ds217671.mlab.com:17671/ktest')

//Routers
const contacts = require('./routes/contacts')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/contacts', contacts)

app.listen(3000, () => {
  console.log('listening on port 3000')
})