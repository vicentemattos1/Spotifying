const { Router } = require('express');

const SingerController = require('./controllers/SingerController')
const SearchController = require('./controllers/SearchController')


const routes = Router();

routes.post('/singer',SingerController.store);
routes.get('/singer',SingerController.index)
routes.get('/search',SearchController.index)

module.exports = routes;