import React from 'react';
import './PersonalData.css';

class PersonalData extends React.Component {
  render() {
  const { nome, email, cpf, endereco, cidade, estado, tipo, handleChange } = this.props; 

    return (
      <fieldset className="personal-data">
        <label>Nome
          <input 
            type="text" 
            name="nome" 
            onChange={handleChange}
            value={nome}
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
          <input 
            type="text" 
            name="estado"
            onChange={handleChange}
            value={estado}
          />
        </label>

        <label>Tipo
          <input 
            type="text" 
            name="tipo"
            onChange={handleChange}
            value={tipo}
          />
        </label>
      </fieldset>
    )
  }
}

export default PersonalData