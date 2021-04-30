import './App.css';
import React from 'react';

const handleClick = () => console.log('Cricou danado')

class App extends React.Component {
  render() {
    return (
      <button onClick={handleClick}>Clica neu</button>
    );
  }
}

export default App;
