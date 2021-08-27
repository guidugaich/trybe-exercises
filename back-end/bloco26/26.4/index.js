const express = require('express');

const app = express();

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.get('/', (req, res) => {
  res.send('hola chicos!!! kkk')
});

app.get('/recipes', (req, res) => {
  res.json(recipes);
});

app.get('/recipes/:id', (req, res) => {
  console.log(req.query)
  const recipeId = parseInt(req.params.id);
  recipe = recipes.filter(r => r.id === recipeId)
  res.status(200).json(recipe)
});

app.listen(3000, () => {
  console.log('app rodando bruto na porta 3000')
});