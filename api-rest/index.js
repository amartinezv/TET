'use strict'
const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB conectado"))
    .catch(err => console.log(err))

app.listen(config.port, ()=>{
    console.log(`API REST corriendo en http://localhost:${config.port}`)
})

