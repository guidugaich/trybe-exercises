const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.send('alou')
})

app.listen(3000, () => {
  console.log('pau na máquina');
})