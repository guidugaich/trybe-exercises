import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0
    }
    console.log(this.props)
  }

  handleClick = (evt) => {
    console.log(`Cricou no ${evt.target.name}`);
    console.log(this.state);
    this.setState((prevState, _props) => ({
      [evt.target.name]: prevState[evt.target.name] + 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick} className='fancyButton' name='btn1'>{this.state.btn1}</button>
        <button onClick={this.handleClick} className='fancyButton' name='btn2'>{this.state.btn2}</button>
        <button onClick={this.handleClick} className='fancyButton' name='btn3'>{this.state.btn3}</button>
      </div>
    );
  }
}

export default App;
