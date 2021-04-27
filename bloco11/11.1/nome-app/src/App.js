import './App.css';
import ListTitle from './components/ListTitle'

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

const tasks = ['limpar', 
               'lavar', 
               'cozinhar', 
               'estudar', 
               'dormir', 
               'jogar'];

function App() {
  return (
    <div>
      <ListTitle title={'Lista de tarefas'}/>
      <h1>{tasks.map(t => task(t))}</h1>
    </div>
  );
}

export default App;
