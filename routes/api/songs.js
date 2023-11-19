//Encargado de gestionar las routes

const router = require('express').Router()

const Song = require('../../models/song.model')

router.get('/', async (req, res) => {
   try{
      const songs = await Song.find() //Aqui devuelve una promesa
      res.json(songs)
   }catch(e){
      res.json({error: e.messaje});
   }
});

router.get('/:songId', async (req, res) => {
   const { songId } = req.params; //todas las peticiones salen del require.params

   const song = await Song.findById(songId)
   res.json(song)

});

module.exports = router