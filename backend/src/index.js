const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://spotify:1234@cluster0-shard-00-00-nee7v.mongodb.net:27017,cluster0-shard-00-01-nee7v.mongodb.net:27017,cluster0-shard-00-02-nee7v.mongodb.net:27017/spotifydb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.use(cors({ origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes);

app.listen(3001);