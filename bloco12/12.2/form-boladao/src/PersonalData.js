import React from 'react';
import './PersonalData.css';

class PersonalData extends React.Component {
  render() {
    return (
      <fieldset className="personal-data">
        <label>Nome
          <input type="text" name="nome"/>
        </label>

        <label>Email
          <input type="text" name="email"/>
        </label>

        <label>CPF
          <input type="text" name="cpf"/>
        </label>

        <label>Endereço
          <input type="text" name="endereco"/>
        </label>

        <label>Cidade
          <input type="text" name="cidade"/>
        </label>

        <label>Estado
          <input type="text" name="estado"/>
        </label>

        <label>Tipo
          <input type="checkbox" name="tipo"/>
        </label>
      </fieldset>
    )
  }
}

export default PersonalData