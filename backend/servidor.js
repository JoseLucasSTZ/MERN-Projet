//Imports
const express = require('express')
const cors = require ('cors')
const axios = require('axios')
const bodyParser = require('body-parser')

//Declaração de constantes
const PORT = 3000
const router = express.Router()
const app = express()


//Convenções
app.use(express.static(__dirname))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false}))

//Código
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
    
})


//Porta do servidor
app.listen(PORT, console.log('Servidor rodando'))