import React from 'react';
import './PersonalData.css';
import states from './estadosBrasil'

class PersonalData extends React.Component {
  render() {
  const { nome, email, cpf, endereco, cidade, estado, tipo, handleChange } = this.props; 

    return (
      <fieldset className="personal-data">
        <legend>Dados Pessoais</legend>
        <label>Nome
          <input 
            type="text" 
            name="nome" 
            onChange={handleChange}
            value={nome}
            required
          />
        </label>

        <label>Email
          <input 
            type="text" 
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>

        <label>CPF
          <input 
            type="text" 
            name="cpf"
            onChange={handleChange}
            value={cpf}
          />
        </label>

        <label>Endereço
          <input 
            type="text" 
            name="endereco"
            onChange={handleChange}
            value={endereco}
          />
        </label>

        <label>Cidade
          <input 
            type="text" 
            name="cidade"
            onChange={handleChange}
            value={cidade}
          />
        </label>

        <label>Estado
          <select 
            type="text" 
            name="estado"
            onChange={handleChange}
            value={estado}
          >
            {states.map((obj) => <option key={Object.keys(obj)}>{Object.keys(obj)}</option>)}
          </select>
        </label>

        <div>Tipo da moradia<br></br>
          <label>
            <input 
              type="radio" 
              name="tipo"
              onChange={handleChange}
              value='casa'
            />
            Casa
          </label>

          <label>
            <input 
              type="radio" 
              name="tipo"
              onChange={handleChange}
              value='ape'
            />
            Apartamento
          </label>
        </div>
      </fieldset>
    )
  }
}

export default PersonalData