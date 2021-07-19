import React from 'react'
import './WorkData.css';

class WorkData extends React.Component {
  constructor() {
    super();
    this.state = {hasShownAlert: false}
  }

  render() {
    const { hasShownAlert } = this.state;
    const { handleChange, cv, cargo, descricaoCargo } = this.props;

    return (
      <fieldset className="work-data">
        <legend>Dados Profissionais</legend>
        <label>Resumo do currículo
          <textarea
            required
            maxLength="1000"
            name="cv"
            onChange={handleChange}
            value={cv}
          />
        </label>

        <label>Cargo
          <textarea
            required 
            maxLength="40"
            onMouseEnter={() => {
              if (!hasShownAlert) {
                alert('Preencha com cuidado');
                this.setState({hasShownAlert: !hasShownAlert});
              }
            }}
            name="cargo"
            onChange={handleChange}
            value={cargo}
          />
        </label>

        <label>Descrição do cargo
          <input
            required
            type="text"
            maxLength="500"
            name="descricaoCargo"
            onChange={handleChange}
            value={descricaoCargo}
          />
        </label>
      </fieldset>
    )
  }
}

export default WorkData