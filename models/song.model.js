const { model, Schema} = require('mongoose')

const songSchema = new Schema({ //constructor de la clase Schema
   title: String,
   artist: String,
   genre: String,
   album: String,
   duration: Number,
   year: Number,
   track:Number,
   isExplicit: Boolean,
})

module.exports = model('song', songSchema)
                 //Asociacia el modelo con la coleccion de la base de dato
                 //Primero se le pasa el nombre de la coleccion en singular
                 //Segundo nombre del esquema