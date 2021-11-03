const Movie = require('../models/movie');

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({ success: true, movies });
  } catch (error) {
    console.log(error);
  }
};

exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    res.status(201).json({ success: true, movie });
  } catch (error) {
    console.log(error);
  }
};
