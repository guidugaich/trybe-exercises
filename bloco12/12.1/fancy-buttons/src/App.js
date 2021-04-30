import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      nClicks: 0
    }
  }

  handleClick() {
    console.log('Cricou danado');
    console.log(this.state);
    this.setState((prevState, _props) => ({
      nClicks: prevState.nClicks + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className='fancyButton'>{this.state.nClicks}</button>
      </div>
    );
  }
}

export default App;
