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
            descricaoCargo,
            cvDisplay } = this.props.data;

    return (
      <div className="cvComponent">
        <button onClick={this.props.onRenderBtnClick}>Criar CV</button>
        <div
          className="cv"
          style={cvDisplay}
        >
          <h1>{nome}</h1>
          <div className="personalData">
            <span>{email}</span>
            <p>{`CPF: ${cpf}`}</p>
            <span>{`${endereco} | ${cidade} | ${estado} | ${tipo}`}</span>
          </div>
          <div className="workData">
            <h2>Dados Profissionais</h2>
            <h4>{`Resumo: ${cv}`}</h4>
            <h4>{`Cargo: ${cargo}`}</h4>
            <h4>{`Descrição do cargo: ${descricaoCargo}`}</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default CVRenderer;