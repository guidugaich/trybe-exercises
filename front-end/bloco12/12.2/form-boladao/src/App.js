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
      displayCV: false
    };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  toggleDisplayCv = async () => {
    await this.setState((prevState) => ({displayCV: !prevState.displayCV}))
    console.log(this.state.displayCV)
  }


  render() {
    return (
      <div>
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
        </form>
        <button onClick={this.toggleDisplayCv}>Criar CV</button>
        {this.state.displayCV ? <CVRenderer data={this.state} /> : null}         
      </div>
    );
  }
}

export default App;
