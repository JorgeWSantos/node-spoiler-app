const express = require('express')
const { buscarUm, buscarTodos, criar, atualizar, excluir, opa } = require('../controller/spoilers')

const router = express.Router()

router.get('/spoilers/getone/:id', buscarUm)

router.post('/spoilers/create', criar)

router.put('/spoilers/put/:id', atualizar)

router.delete('/spoilers/del/:id', excluir)

router.get('/spoilers/getall', buscarTodos)

router.get('/spoilers/opa', opa);


module.exports = router