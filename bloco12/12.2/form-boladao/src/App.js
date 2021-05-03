import './App.css';
import PersonalData from './PersonalData'
import WorkData from './WorkData'
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      cv: '',
      cargo: '',
      descricaoCargo: ''
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div>
        <PersonalData />
        <WorkData />
      </div>
    );
  }
}

export default App;
