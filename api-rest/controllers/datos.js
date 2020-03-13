'use strict'
const datos = require('../models/datos')
function getDato(req, res) {
    let dataId = req.params.dataId
    datos.findById(dataId, (err, datosSave) =>{
        if(err) return res.status(500).send({message: "Error al realizar la peticion"})
        if(!datosSave) return res.status(404).send({message: "El producto no existewwwww"})

        res.status(200).send({datosSave})
    })
}

function getDatos (req, res){
    datos.find({}, (err, dato) => {
        if(err) return res.status(500).send({message: "Error al realizar la peticion"})
        if(!dato) return res.status(404).send({message: "No existe"})

        res.status(200).send({dato});
    }) 
}

function saveDatos(req, res){
    console.log('POST /api/data')
    console.log(req.body)

    let dato = new datos()
    dato.latitud = req.body.latitud
    dato.longitud = req.body.longitud
    dato.humedad = req.body.humedad
    dato.temperatura = req.body.temperatura
    

    dato.save((err, datoRegister)=>{
        if(err) res.status(500).send({message: `Error al guardar en la bd:${err}`})

        res.status(200).send({dato: datoRegister})
    })
}

function updateDato(req, res){
    let dataId = req.params.dataId
    let update = req.body

    datos.findByIdAndUpdate(dataId, update, (err, dataUpdate)=>{
        if(err) res.status(500).send({message:`Error al actualizar el producto: ${err}`})

        res.status(200).send({dato: dataUpdate})
    } )
}

function deleteDato(req, res){
    let dataId = req.params.dataId
    datos.findById(dataId, (err, product)=>{
        if(err) res.status(500).send({message:`Error al eliminar el producto: ${err}`})

        product.remove(err =>{
            if(err) res.status(500).send({message: `Error al borrar los datos: ${err}`})
            res.status(200).send({message: `El producto ha sido eliminado`})
        })

    })
}

module.exports = {
    getDato,
    getDatos,
    saveDatos,
    updateDato,
    deleteDato
}