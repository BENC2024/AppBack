const express = require('express')
const cors = require('cors')

require('dotenv').config()
require('./config/db')

const app = express()

//Formas de tratar los datos
app.use(cors()) //Cualquier dominio, url puede utilizar la funcion de express
//Tambien el cors puede especificar cuales no y cuales si
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// GET /api/songs
// GET /api/songs/SONGID
app.use('/api', require('./routes/api')) //todas las peticiones /api seran gestionadas por el require

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
   console.log(`Servidor en escucha en el puerto ${PORT}`);
})