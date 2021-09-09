const { MongoClient } = require('mongodb');

const MONGODB_URL = 'mongodb://127.0.0.1:27017';

let schema = null;

async function getConnection() {
  if (schema) return Promise.resolve(schema);
  return MongoClient.connect(
    MONGODB_URL,
    { useNewUrlParser:  true, useUnifiedTopology: true }
  )
    .then((conn) => conn.db('model_example'))
    .then((dbSchema) => dbSchema)
    .catch((err) => console.error(err));
}

module.exports = { getConnection };
