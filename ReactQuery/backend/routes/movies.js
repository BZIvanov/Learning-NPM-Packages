const router = require('express').Router();
const { getAllMovies, createMovie } = require('../controllers/movies');

router.route('/').get(getAllMovies).post(createMovie);

module.exports = router;
