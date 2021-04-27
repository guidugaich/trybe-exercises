import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

const tasks = ['limpar', 'lavar', 'cozinhar'];

function App() {
  return (
    <h1>{tasks.map(t => task(t))}</h1>
  );
}

export default App;
