const mongoose = require('mongoose');

const SingerSchema = new mongoose.Schema({

    name: String,
    estilo:String,
    singer_image:String,
    musics: [{name:String,album:String,duration:String}],
    albums: [String]

});

module.exports = mongoose.model('Singer', SingerSchema);