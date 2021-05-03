import React from 'react'

class PersonalData extends React.Component {
  render() {
    return (
      <fieldset>
        <label>Nome
          <input type="text" />
        </label>

        <label>Email
          <input type="text" />
        </label>

        <label>CPF
          <input type="text" />
        </label>

        <label>Endereço
          <input type="text" />
        </label>

        <label>Cidade
          <input type="text" />
        </label>

        <label>Estado
          <input type="text" />
        </label>

        <label>Tipo
          <input type="checkbox" />
        </label>
      </fieldset>
    )
  }
}