import React from 'react';
import './Logar.css';
import tiraDuvidasLogo from '../Logo-Tira-Dúvidas-removebg.png'; // Logo do Tira Dúvidas
import ufmsLogo from '../ufms-logo.png'; // Logo da UFMS

function Logar() {
  return (
    <div className='body-login'>
      <div className="container">
        <div className="left-panel">
          <img src={tiraDuvidasLogo} alt="Tira Dúvidas Logo" className="logo" />
        </div>
        <div className="divider"></div> {/* Linha divisória */}
        <div className="right-panel">
          <h2>Login</h2>
          <form>
            <label className='label-login'>Email:</label>
            <input type="email" name="email" placeholder="email@email.com" />
            <label className='label-login'>Senha:</label>
            <input type="password" name="password" placeholder="••••••••" />
            <button type="submit">Entrar</button>
          </form>
          <img src={ufmsLogo} alt="UFMS Logo" className="ufms-logo" /> {/* Logo UFMS */}
        </div>
      </div>
    </div>
  );
}

export default Logar;
