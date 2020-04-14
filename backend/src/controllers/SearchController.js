const Singer =  require('../models/Singer');

module.exports = {

    async index(request,response){

        const {search} = request.query;

        const singer = await Singer.find({
 
                $or: [
                    {
                        musics: {
                            $elemMatch:{
                                name:search
                            }
                        }
                    },
                    {
                        name:{
                            $in: search
                        }
                    },
                    {
                        musics: {
                            $elemMatch:{
                                album:search
                            }
                        }
                    },                    {
                        estilo: {
                            $in: search
                        }
                    },
                ]
                
        });
        

        return response.json( {singer} );

    }

}