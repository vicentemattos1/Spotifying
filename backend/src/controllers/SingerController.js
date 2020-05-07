const Singer = require('../models/Singer');

module.exports = {
    async store(request,response) {
        const {name,estilo,singer_image, musics} = request.body;
        
        let singer = await Singer.findOne({name});

        if(!singer){
            const albums = musics.map(music => music.album).filter((elem, index, arr) => arr.indexOf( elem ) === index);
        
            singer = await Singer.create({
                name,
                singer_image,
                estilo,
                musics,
                albums
            });
        }
  
        return response.json(singer);
    },


    async index(request,response) {
        const singers =  await Singer.find();

        return response.json(singers);
    }
}