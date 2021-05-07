import React from 'react'
import './CVRenderer.css'

class CVRenderer extends React.Component {
  render() {
    const { nome,
            email, 
            cpf, 
            endereco, 
            cidade, 
            estado, 
            tipo, 
            cv, 
            cargo, 
            descricaoCargo } = this.props.data;

    return (
      <div>
        <button>Criar CV</button>
        <div className="cv">
          <h1>{nome}</h1>
          <div className="personalData">
            <span>{email}</span>
            <p>{`CPF: ${cpf}`}</p>
            <span>{`${endereco} | ${cidade} | ${estado} | ${tipo}`}</span>
          </div>
          <div className="workData">
            <h5>{cv}</h5>
            <h5>{cargo}</h5>
            <h5>{descricaoCargo}</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default CVRenderer;