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
      <form>
        <PersonalData 
          handleChange={this.handleChange} 
          nome={this.state.nome}
          email={this.state.email}
          cpf={this.state.cpf}
          endereco={this.state.endereco}
          cidade={this.state.cidade}
          estado={this.state.estado}
          tipo={this.state.tipo}
        />
        <WorkData />
      </form>
    );
  }
}

export default App;
