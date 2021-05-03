import React from 'react'
import './WorkData.css';

class WorkData extends React.Component {
  render() {
    return (
      <fieldset>
        <label>Resumo do currículo
          <input type="textarea" />
        </label>

        <label>Cargo
          <input type="textarea" />
        </label>

        <label>Descrição do cargo
          <input type="text" />
        </label>
      </fieldset>
    )
  }
}

export default WorkData