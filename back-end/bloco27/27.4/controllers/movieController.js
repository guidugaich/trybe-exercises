const movieService = require('../services/movieService');

const getAll = async (req, res) => {
  const movies = await movieService.getAll();

  res.status(200).json(movies);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await movieService.create(
    { title, directedBy, releaseYear }
  );

  if (!movie) {
    return res.status(400).json({ message: 'Dados inválidos'})
  }

  res.status(201).json({ movie, message: 'Filme criado com sucesso!' })
};

module.exports = {
  getAll, 
  create,
}