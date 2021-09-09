const mongoConnection = require('./connection');

const getAll = async () => {
  const db = await mongoConnection.getConnection()
  
  const movies = await db.collection('movies').find().toArray();
  
  return movies.map(
    ({_id, ...movieData}) => ({id: _id, ...movieData})
  );
};

const create = async ({ title, directedBy, releaseYear }) => {
  const db = await mongoConnection.getConnection()

  const { insertedId: id } = await db.collection('movies').insertOne(
    { title, directedBy, releaseYear }
  );

  return {
    id,
    title, 
    directedBy,
    releaseYear,
  };
};

module.exports = {
  getAll,
  create,
}