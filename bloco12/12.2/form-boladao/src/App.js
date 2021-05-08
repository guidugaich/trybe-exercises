import React from 'react';
import './App.css';
import PersonalData from './components/PersonalData'
import WorkData from './components/WorkData'
import CVRenderer from './components/CVRenderer'

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
      descricaoCargo: '',
      cvDisplay: {display: 'none'}
    };
  }

  switchCVDisplay = async () => {
    if (Object.values(this.state.cvDisplay)[0] == 'none') {
      await this.setState({cvDisplay: {display: 'block'}})
    } else {
      await this.setState({cvDisplay: {display: 'none'}})
    }
    
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
        <WorkData
          handleChange={this.handleChange}
          cv={this.state.cv}
          cargo={this.state.cargo}
          descricaoCargo={this.state.descricaoCargo}
        />
        <CVRenderer
          data={this.state}
          onRenderBtnClick={this.switchCVDisplay}
        />
      </form>
    );
  }
}

export default App;
