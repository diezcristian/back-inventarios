const express = require('express')
const app = express()
const notFound = require("./middleware/notFound");
const handleErrors = require("./middleware/handleErrors");
const cors = require("cors")


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors({
    origin: '*'
}))


const tipoEquipo = require('./routes/tipoEquipo')
const estadoEquipo = require('./routes/estadoEquipo')
const Usuario = require('./routes/Usuario')
const Marca = require('./routes/Marca')
const Inventario = require('./routes/Inventario');


// middlewares
app.use('/api/tipoequipos', tipoEquipo)
app.use('/api/estadoequipos', estadoEquipo)
app.use('/api/usuarios', Usuario)
app.use('/api/marcas', Marca)
app.use('/api/inventarios', Inventario)

app.use(notFound)
app.use(handleErrors)

module.exports = app