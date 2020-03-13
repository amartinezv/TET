'use strict'

const express = require('express')
const Datoscontrollers = require('../controllers/datos')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()


api.get('/data', Datoscontrollers.getDatos)
api.get('/data/:dataId', Datoscontrollers.getDato)
api.post('/data',  Datoscontrollers.saveDatos)
api.put('/data/:dataId', auth, Datoscontrollers.updateDato)
api.delete('/data/:dataId', auth, Datoscontrollers.deleteDato)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res)=>{
    res.status(200).send({message: 'tienes acceso'})
})

module.exports = api