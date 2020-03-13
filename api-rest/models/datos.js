const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DatosSchema = Schema({
    latitud: Number,
    longitud: Number,
    humedad: Number,
    temperatura: Number
    
})

module.exports=mongoose.model('datos', DatosSchema)